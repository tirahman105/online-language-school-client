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
  }, [price, axiosSecure]);

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
    setProcessing(true)
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
    console.log(paymentIntent)
    if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const paymentInfo = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            name: item.name,
            date: new Date(),
            _id: item._id,
            bookedClassId: item.bookedClassId,
           instructor_email: item.email,
           instructor: item.instructor,
           instructorPhoto: item.instructorPhoto,
            status: 'service pending',
            
        }
        axiosSecure.post('/payments', paymentInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.result.insertedId) {
                    // display confirm
                    alert('Payment info added to DB')
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
          <button className="btn btn-warning" type="submit" disabled={!stripe || !clientSecret || processing}>
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
