import React, {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0">
                <span className="navbar-brand text-gold" href="/"><b>Sosial</b>Network</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 pr-sm-3 flex-grow-1">
                        <input className="form-control mr-sm-3 flex-grow-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn my-2 my-sm-0 px-2 bg-gold" type="submit">Upload</button>
                    </form>
                </div>
                <div className="row d-none d-lg-block">
                    <div className="col-6 d-flex px-0 justify-content-center">
                        <img className="img-fluid" style={{width: "2rem"}} src="https://img.icons8.com/material/4ac144/256/user-male.png" alt=""/>
                    </div>
                    <div className="col-6">
                        Nama
                        <br/>
                        Alamat
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
