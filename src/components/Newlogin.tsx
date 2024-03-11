
import React, {useState} from 'react';
import './Newlogin.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Newlogin: React.FC = () => {
    const [showStaffId, setShowStaffId] = useState(false);
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100'>
            <div className='form_container p-3 rounded-4 bg-white shadow-lg'>
                <form>
                    <h3 className='text-center p-5'>Welcome Admin!</h3>
                    <h6 className='text-center p-4'>Enter your staff Id to login</h6>
                    <div className='mb-5'>
                        
                        <input type="password" placeholder='enter staff id' className='form-control p-2 ' />
                        <div className="password-toggle" onClick={() => setShowStaffId(!showStaffId)}>
                        {showStaffId ? <BsEyeSlash /> : <BsEye />}
                        </div>
                    </div>
                   
                    <div className='d-grid'>
                        <button className='btn btn-primary'style={{backgroundColor: '#5CA7B7'}}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Newlogin;
