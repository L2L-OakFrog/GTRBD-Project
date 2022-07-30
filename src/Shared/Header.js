import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import useAuth from '../Hooks/UseAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/">GTRBD Project</Nav.Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {user?.email ?
                        <div>
                            <Navbar.Text>
                                Signed in as: {user?.displayName}
                            </Navbar.Text>
                            <Button onClick={logout} style={{ marginLeft: '15px', borderRadius: "5px" }} variant="danger">
                                Log Out!
                            </Button>
                        </div>
                        :
                        <div>
                            <Navbar.Text>Have an account?</Navbar.Text>
                            <Button style={{ marginLeft: '15px', borderRadius: "5px" }} variant="danger" type="submit">
                                <Nav.Link as={Link} to="/login">Go to Login</Nav.Link>
                            </Button></div>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;