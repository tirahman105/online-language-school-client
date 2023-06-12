import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const PaymentHistory = () => {
    
    const payments = useLoaderData();
    return (
        <div className="w-full px-8">
             <Helmet>
                <title>Online Language School | Payment History</title>
            </Helmet>
            <h3 className="text-3xl text-center font-semibold my-4 ">Total Payments: {payments.length}</h3>

<div className="overflow-x-auto">
    <table className="table table-zebra w-full">
        {/* head */}
        <thead className='bg-blue-900 text-white'>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Tx Id</th>
                <th>Paid amount</th>
                <th>Student Email</th>
                <th>Instructor Name</th>
                <th>Instructor email</th>
            </tr>
        </thead>
        <tbody>
            {
                payments.map((payment, index) => <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{new Date(payment.date).toLocaleDateString('en-US')}</td>
                    <td>{payment.transactionId}</td>
                    <td>$ {payment.price}</td>
                    <td>{payment.email}</td>
                    <td>{payment.instructor}</td>
                    <td>{payment.instructor_email}</td>
                
                </tr>)
            }
            
            
        </tbody>
    </table>
</div>
        </div>
    );
};

export default PaymentHistory;