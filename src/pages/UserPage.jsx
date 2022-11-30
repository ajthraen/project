import React from 'react';
import Regmodal from '../components/ui/Regmodal';
// import { Link } from 'react-router-dom';

const UserPage = ({isLoggedIn, onSubmitHandler, setEmail, setPassword, register, login, logout, email, password, regStatus}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="books">
                    <div className='book'>
                        <form onSubmit={onSubmitHandler}>
                            <div><label htmlFor="first_name">Email</label></div>
                            <div>        
                                <input
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div><label htmlFor="last_name">Password</label></div>
                            <div>
                                <input
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </form>
                        <button className='btn3 m-2' onClick={login}>Login</button>
                        <button className='btn3 m-2' onClick={logout}>Logout</button>
                        <div className='loginStatus'>You are <b>{isLoggedIn ? 'Currently' : 'Not'}</b> logged in.</div>
                        {/* Firebase Registration Button
                        <div className='mt-5'>
                            <button className='btn2' onClick={register}>Firebase Registration</button>
                        </div> */}
                    </div>
                    <div className="book">
                        {isLoggedIn ?
                            <div className="container4">
                                
                            </div>
                            : 
                            <div className="container4">
                                <div className='mb-2 ml-3' style={{fontSize:"18px"}}>Not a Member?</div>
                                <Regmodal register={register} login={login} logout={logout} onSubmitHandler={onSubmitHandler} setEmail={setEmail} setPassword={setPassword} isLoggedIn={isLoggedIn} regStatus={regStatus}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
