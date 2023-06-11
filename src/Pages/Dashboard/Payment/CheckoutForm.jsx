import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckoutForm = ({ handleCloseModal, item }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const [axiosSecure] = useAxiosSecure();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const price = item.price;
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("error", confirmError);
      setCardError(confirmError.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }
    if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const paymentInfo = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: item.length,
            cartItems: item.map(item => item._id),
            menuItems: item.map(item => item.menuItemId),
            status: 'service pending',
            itemNames: item.map(item => item.name)
        }
        axiosSecure.post('/payments', paymentInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.result.insertedId) {
                    // display confirm
                    alert('Payment done')
                }
            })
    }
  };

  const handleClose = () => {
    handleCloseModal();
  };
  return (
    <>
      <form className="w-2/3 mx-auto my-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="modal-action flex justify-end">
          <button className="btn btn-warning" type="submit">
            Pay $ {item.price}
          </button>
          <button type="button" className="btn btn-error" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
