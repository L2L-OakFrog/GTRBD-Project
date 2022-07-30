import React from 'react';
import useAuth from '../../Hooks/UseAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '100px', marginTop: '5px', padding: '250px', backgroundImage: `url('../../GTR.png')` }}>
                {user?.email ?
                    <div>
                        <h1>Welcome To GTRBD!</h1>
                    </div>
                    :
                    <h1>Please Log in/ Register</h1>
                }
            </div>
            <div>
                <img src="../../GTR.png" alt="" />
            </div>
        </div>
    );
};

export default Home;