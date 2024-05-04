
import React, {useState} from 'react';
import './Newlogin.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import invoice_logo from '../assets/invoice_logo.jpg'
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [showStaffId, setShowStaffId] = useState(false);
    const [staffId, setStaffId] = useState('');

    const handleStaffIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStaffId(event.target.value);
    }

    const togglePasswordVisibility = ()=> {
        setShowStaffId(!showStaffId);
    }
    
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/Table');
        alert('Login successful!')
    } 

    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100'>
            <div className='form_container p-3 rounded-4 bg-white shadow-lg'style={{ minHeight: '500px', width: '500px',backgroundColor: "#fffcfa"  }}>
                <form>
                    <h3 className='text-center p-3 ' style={{fontFamily: 'times new roman'}}>Welcome Admin!</h3>
                    <div className='text-center mb-5' >
                    <img src={invoice_logo} alt="company logo" className='logo' style={{ width: '110px', borderRadius: '50%' }}/>
                    </div>
                    <h6 className='text-center p-4'style={{fontFamily: "inter", fontSize: "20px"}}>Enter your staff Id to login</h6>
                    <div className='mb-4'>
                       <div style={{position: 'relative'}}>
                        <input type={showStaffId ? 'text' : 'password'} 
                        placeholder='enter staff id' 
                        className='form-control p-1 text-center' 
                        value={staffId} onChange={handleStaffIdChange} />
                        <span onClick={togglePasswordVisibility} 
                        
                        className='icon-container'
                        >
                            {showStaffId ? <BsEyeSlash /> : <BsEye />}
                        </span>
                        </div>   
                    </div>
                   
                    <div className='d-grid mt-auto'>
                        <button className='btn'
                            style={{backgroundColor: '#5CA7B7', color: 'white', fontFamily: 'times new roman', fontSize: "25px"}} 
                            onClick={handleSignIn}>Sign in
                        </button>
                    </div>
                </form>
            </div>
            
            
        </div>
    );
}

export default Login;
