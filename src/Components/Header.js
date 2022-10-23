import React from 'react';
import Caurosel from './Caurosel';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

const Header = () => {
    return (
        <>
            <SubHeader/>
            <MainHeader/>
            <Caurosel/>
        </>
    );
};

export default Header;