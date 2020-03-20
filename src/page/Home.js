import React, {Component, Fragment} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Videos from "../page/Videos";
import Header from "../component/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Breadcrumb from "../component/Breadcrumb";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paths : "Home"
        }
    }

    handleBreadcrumb = (newPath) => {
        // this.setState({
        //     paths : this.state.paths + "/" + newPath
        // })
    }

    render() {
        const {paths} = this.state;
        return (
            <Router>
                <div className="container-fluid px-lg-5">
                    <div className="row flex-column no-gutters mx-lg-5">
                        <Header/>
                        <Breadcrumb class="border-top border-bottom my-lg-4 my-3" path={paths}/>
                        <Switch>
                            <Route path="/" exact component={Content}/>
                            <Route path="/videos" exact component={Videos} handleBrcm={this.handleBreadcrumb}/>
                        </Switch>
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Home;
