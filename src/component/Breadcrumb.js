import React, {Component} from "react";

const Breadcrumb = (props) => {
    const strPath = props.path;
    const listPath = strPath !== undefined ? strPath.split("/") : 0;
    return(
        <nav aria-label="breadcrumb" className={props.class}>
            <ol className="breadcrumb bg-transparent mb-0 px-0 text-gold">
                {
                    listPath.length > 1 ?
                    listPath.map((path, index) => {
                        if (listPath.length === index + 1) {
                            return <li className="breadcrumb-item">{path}</li>
                        } else {
                            return <li className="breadcrumb-item"><a href={"/"+ path} className="text-gold">{" / " + path}</a></li>
                        }
                    }) : <li className="breadcrumb-item">{listPath[0]}</li>
                }
            </ol>
        </nav>
    );
}

export default Breadcrumb;
