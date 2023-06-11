
import { Helmet } from 'react-helmet-async';
import useBookedClass from '../../hooks/useBookedClass';
import useEnrolledClass from '../../hooks/useEnrolledClass';


const MyEnrolledClass = () => {
    
    const [enrolledClasses, refetch] = useEnrolledClass();
    return (
        <div className="w-full px-8">
             <Helmet>
                <title>Online Language School | Payment History</title>
            </Helmet>
            <h3 className="text-3xl text-center font-semibold my-4 ">Total Payments: {enrolledClasses.length}</h3>

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
                enrolledClasses.map((payment, index) => <tr key={payment._id}>
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

export default MyEnrolledClass;