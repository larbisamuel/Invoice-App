
import React, { useState} from 'react';
import './Newlogin.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import invoice_logo from '../assets/invoice_logo.jpg'
import { useNavigate } from 'react-router-dom';
import {staffInfo} from './userApi';

const Login: React.FC = () => {
    const [showStaffId, setShowStaffId] = useState(false);
    const [staffId, setStaffId] = useState<staffInfo>({'staff_id': ""});
    const [isLoading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    const handleStaffIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStaffId({ ...staffId, [event.target.name]: event.target.value});
        console.log(staffId)
    }

    const togglePasswordVisibility = ()=> {
        setShowStaffId(!showStaffId);
    }


    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        console.log(staffId);
        setLoading(true);
        
      
            await fetch( "http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(staffId)
            }).then(async (response) => { 
                if (response.ok) {
                    const jsonResponse = await  response.json();
                    setLoading(false);
                    localStorage.setItem('token', jsonResponse.token)
                    navigate("/Table");
                    
                }
                else{
                    setLoading(false);
                    alert("Unsuccesful");
                }
                
            })
        
        }

    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100'>
            <div className='form_container p-3 rounded-4 bg-white shadow-lg'style={{ minHeight: '500px', width: '500px',backgroundColor: "#fffcfa"  }}>
                <form onSubmit={handleSignIn}>
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
                        name='staff_id'
                        value={staffId.staff_id} onChange={handleStaffIdChange} />
                        <span onClick={togglePasswordVisibility} 
                        
                        className='icon-container'
                        >
                            {showStaffId ? <BsEyeSlash /> : <BsEye />}
                        </span>
                        </div>   
                    </div>
                    {isLoading && <div className="d-flex justify-content-center">
                                <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                </div>}
                    <div className='d-grid mt-auto'>
                        <button  type="submit"
                            style={{backgroundColor: '#5CA7B7', color: 'white', fontFamily: 'times new roman', fontSize: "25px"}} 
                            >Sign in
                        </button>
                    </div>
                </form>
            </div>
            
            
        </div>
    );
}

export default Login;
