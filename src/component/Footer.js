import React, {Component} from "react";
import Breadcrumb from "./Breadcrumb";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="border-top my-4 text-lg-left text-center">
                <div className="row flex-column text-gold px-3">
                    <div className="col-md-12 px-0">

                        <div className="my-3">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <i className="fab fa-facebook-square fa-2x"/>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-twitter-square fa-2x"/>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fab fa-linkedin fa-2x"/>
                                </li>
                            </ul>

                        </div>

                    </div>
                    <Breadcrumb class="text-center"/>
                    <div className="footer-copyright py-3">
                        <span>© 2020 Copyright: wahyu</span>
                        <br/>
                        <span>Privacy / Terms</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
