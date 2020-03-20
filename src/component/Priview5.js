import React, {Fragment} from "react";
import TitleContent from "./TitleContent";

const Priview5 = (props) => {
    return(
        <Fragment>
            <TitleContent title={props.title}
                          linkTo={props.link}
                          linkTitle={props.linkTitle}
                          class={"d-flex justify-content-between align-items-end mb-2 h3 "}
                          linkClass={"text-gold h6 mb-0 mx-auto"}
            />

            <div className="row no-gutters">
                <div className="col-lg-8">
                    <img className="img-fluid w-100 pr-lg-1 pr-0 main-img mb-lg-0 mb-3" alt="" src={props.data[0].src}/>
                    <div className="bottom-left p-3">
                        <h3>How to improve your skills</h3>
                        <h6>Waseem Arshad</h6>
                    </div>
                    <div className="bottom-right p-3">
                        <h6>10.000/views</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="col-lg px-0">
                        <img className="img-fluid w-100 pl-lg-2 pb-lg-3 mb-lg-0 mb-3" style={{height : '12rem'}} src={props.data[1].src} alt=""/>
                        <div className="bottom-left p-3">
                            <h6>Waseem Arshad</h6>
                        </div>
                        <div className="bottom-right p-3">
                            <h6>10.000/views</h6>
                        </div>
                    </div>
                    <div className="col-lg px-0">
                        <img className="img-fluid w-100 pl-lg-2 pb-lg-3 mb-lg-0 mb-3" style={{height : '12rem'}} src={props.data[2].src} alt=""/>
                        <div className="bottom-left p-3">
                            <h6>Waseem Arshad</h6>
                        </div>
                        <div className="bottom-right p-3">
                            <h6>10.000/views</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center">
                    <div className="col-lg-4 px-0 mb-3">
                        <img className="img-fluid w-100 pr-lg-2" style={{height : '12rem'}} src={props.data[3].src} alt=""/>
                        <div className="bottom-left">
                            <h6>Waseem Arshad</h6>
                        </div>
                        <div className="bottom-right">
                            <h6>10.000/views</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 px-0 mb-3">
                        <img className="img-fluid w-100 px-lg-1" style={{height : '12rem'}} src={props.data[4].src} alt=""/>
                        <div className="bottom-left">
                            <h6>Waseem Arshad</h6>
                        </div>
                        <div className="bottom-right">
                            <h6>10.000/views</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 px-0 mb-3 pl-lg-2">
                        <div className=" border border-white d-flex justify-content-center align-items-center h-100">
                            Upload Your Own Video
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );

}

export default Priview5;