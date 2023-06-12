

import useClasses from '../../../hooks/useClasses';
import useUsers from '../../../hooks/useUsers';
import { FcBusinessman, FcOpenedFolder } from "react-icons/fc";

const AdminHome = () => {
    const [users] =useUsers()
    const [classes] =useClasses()
 
    
    const instructors = users.filter(user => user.role === 'instructor')
    return (
        <div>
            
            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FcBusinessman className='text-7xl'></FcBusinessman>
    </div>
    <div className="stat-title">Instructors</div>
    <div className="stat-value">{instructors.length}</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FcOpenedFolder className='text-7xl'></FcOpenedFolder>
    </div>
    <div className="stat-title">Classes</div>
    <div className="stat-value">{classes.length}</div>
    
  </div>
  

</div>
            
        </div>
    );
};

export default AdminHome;
