import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Content from "./Content";

function Main() {
    return (
        <div className="container-fluid px-lg-5 vh-100 bg-red-blood">
            <div className="row flex-column no-gutters">
                <Header/>
                <Breadcrumb class="border-top border-bottom my-lg-4 my-3"/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default Main;
