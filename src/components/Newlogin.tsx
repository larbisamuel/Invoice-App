
import React, {useState} from 'react';
import './Newlogin.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import invoice_logo from '../assets/invoice_logo.jpg'

const Newlogin: React.FC = () => {
    const [showStaffId, setShowStaffId] = useState(false);
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100'>
            <div className='form_container p-3 rounded-4 bg-white shadow-lg'style={{ minHeight: '500px', width: '500px' }}>
                <form>
                    <h3 className='text-center p-3 ' style={{fontFamily: 'times new roman'}}>Welcome Admin!</h3>
                    <div className='text-center mb-5' >
                    <img src={invoice_logo} alt="company logo" className='logo' style={{ width: '110px', borderRadius: '50%' }}/>
                    </div>
                    <h6 className='text-center p-4' style={{fontFamily: "inter", fontSize: "20px"}}>Enter your Staff Id to login</h6>
                    <div className='mb-4'>
                        
                        <input type="password" placeholder='enter staff id' className='form-control p-1 text-center' />
                        {/*  */}
                    </div>
                   
                    <div className='d-grid mt-auto'>
                        <button className='btn 'style={{backgroundColor: '#5CA7B7', color: 'white', fontFamily: 'times new roman', fontSize: "25px"}}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Newlogin;
