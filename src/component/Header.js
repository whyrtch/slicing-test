import React, {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0 mt-3">
                <span className="navbar-brand text-gold" href="/"><b>Sosial</b>Network</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 pr-sm-3 flex-grow-1">
                        <input className="form-control mr-sm-3 flex-grow-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn my-2 my-sm-0 px-2 bg-gold" type="submit">
                            <i className="far fa-arrow-alt-circle-up pr-2"></i>
                            Upload
                        </button>
                    </form>
                </div>
                <div className="row d-none d-lg-block">
                    <button className="btn bg-gold d-flex align-items-center justify-content-start py-0 mx-3"><i
                        className="fas fa-user h-100 d-block p-2 bg-gold mr-2"/>
                        <span style={{lineHeight: 1}}>
                            <h6 className="mb-0">Waseem</h6>
                            <small>arshad</small></span>
                        </button>
                </div>
            </nav>
        );
    }
}

export default Header;
