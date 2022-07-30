import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-container">
            <div>
                <Form className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div >
                        <Button onClick={signInUsingGoogle} style={{ borderRadius: "25px" }} variant="danger">
                            Google Login
                        </Button>
                    </div>
                </Form>
            </div>
            <div>
                <img className="w-100" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5375.jpg" alt="" />
            </div>
        </div>
    );
};

export default Login;