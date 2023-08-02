import React from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import SecondNavbar from '../modules/SecondNavbar';

const Layout = ({children , search , setSearch}) => {
    return (
        <>
            <Header search={search}  setSearch={setSearch} />
            <SecondNavbar />
                {children}
            <Footer />
        </>
    );
};

export default Layout;