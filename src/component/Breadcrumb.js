import React, {Component} from "react";

class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <nav aria-label="breadcrumb" className={this.props.class}>
                <ol className="breadcrumb bg-transparent mb-0 px-0">
                    <li className="breadcrumb-item"><a href="/" className="text-gold">Home</a></li>
                    <li className="breadcrumb-item"><a href="/" className="text-gold">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;
