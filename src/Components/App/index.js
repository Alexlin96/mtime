import React, { Component } from 'react';
import ReactDom from "react-dom";
import './index.css';
import axios from 'axios';
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { connect } from 'react-redux';
import store from "../.././Redux/Store";

class App extends Component {
    render() {
        return (
            <div id="app">
                {
                    /*this.props.isShow?
                    <Navbar></Navbar>
                    :null*/
                }
                <Navbar></Navbar>
                <section>
                    {
                      this.props.children
                    }
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default App