import React from "react";
import {Link} from "react-router-dom";

const TitleContent = (props) => {
    return(
        <div className={props.class}>
            <span>{props.title}</span>
            <Link to={props.linkTo} className={props.linkClass}>{props.linkTitle}</Link>
        </div>
    )
}

export default TitleContent;