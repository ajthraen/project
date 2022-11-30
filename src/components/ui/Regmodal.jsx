import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const Regmodal = ({regStatus, onSubmitHandler, setEmail, setPassword, register, login, logout, email, password}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
        <Button className='BSbutton p-2' onClick={handleShow}>
            Register!
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <div><label htmlFor="email">Email</label></div>
                        <div>        
                            <input
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div><label htmlFor="password">Password</label></div>
                        <div>
                            <input
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                    <button className='m-2 btn3' onClick={register}>Register</button>
                    <div className='loginStatus'>You are <b>{regStatus ? 'Currently' : 'Not'}</b> registered!</div>
                </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default Regmodal;
