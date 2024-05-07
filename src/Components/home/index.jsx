import React from 'react';
import { useAuth } from '../../contexts/authContext';
import Landing from '../../Pages/Home';

const Home = () => {
    const { currentUser } = useAuth();
    
    return (
        <div>
            <p>bldandjndJKDjkbdBDkbqubJAB X X x</p>
            <Landing />
        </div>
    );
};

export default Home;