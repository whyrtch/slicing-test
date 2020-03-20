import React, {Component, Fragment} from "react";
import Priview5 from "./Priview5";
import TitleContent from "./TitleContent";

const Content = (props) => {
    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            name: "Google",
            type: "image",
            description: "Nulla viverra pharetra sem, egasdasdasdasd"
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            name: "Microsoft",
            type: "image",
            description: "Nulla viverra pharetra sem, egasdasdasdasd"
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            name: "Behance",
            type: "image",
            description: "Nulla viverra pharetra sem, egasdasdasdasd"
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            name: "iMedia",
            type: "image",
            description: "Nulla viverra pharetra sem, egasdasdasdasd"
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            name: "Yahoo",
            type: "image",
            description: "Nulla viverra pharetra sem, egasdasdasdasd"
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            name: "Gmail",
            type: "image",
            description: "Nulla viverra pharetra sem, egasdasdasdasd"
        }
    ]
    return (
        <Fragment>
            <div className="row no-gutters text-gold">

                <div className="col-lg-9 pr-lg-4 pr-0">
                    <Priview5 title="Video" data={photos} linkTitle="Browse all videos" link="/"/>
                    <Priview5 title="People" data={photos} linkTitle="View all" link="/"/>
                    <Priview5 title="Documents" data={photos} linkTitle="Browse all documents" link="/"/>
                </div>

                <div className="col-lg-3 pl-lg-1 pl-0 py-lg-0 py-3">
                    <div className="row no-gutters flex-column">

                        <TitleContent title={"Activity"}
                                      class={"d-flex justify-content-between align-items-end mb-2 h3"} l
                                      inkTo={"/"}
                                      linkTitle={"View timeline / Filter activities"}
                                      linkClass={"text-gold h6 mb-0"}/>

                        <div className="border-top border-bottom my-2 py-3">

                            {
                                photos.map(photo => {
                                    return (
                                        <div className="container-hover">
                                            <div className="card bg-transparent my-3 image-card border-0">
                                                <div className="top-right" style={{right: '-10px', top: '12px'}}>
                                                    <i className="fas fa-times bg-white color-red-blood p-1"></i>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-4">
                                                        <img className="w-100" style={{height: "5rem"}}
                                                             src={photo.src}
                                                             alt=""/>
                                                    </div>
                                                    <div className="col pl-2">
                                                        <div className="mb-0">{photo.name}</div>
                                                        <div>{photo.description}</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <TitleContent title={"Channels"} linkTitle={"Browse all channels"} linkTo={"/channels"}
                                      class={"d-flex justify-content-between align-items-end mb-2 h3"}
                                      linkClass={"text-gold h6 mb-0"}
                        />

                        <div className="border-top border-bottom my-2 py-3">

                            <div className="row no-gutters">
                                {
                                    photos.map(photo => {
                                        return (
                                            <div className="col-6 py-1 pr-2 container-hover">
                                                <img className="img-fluid w-100 image" style={{height: "9rem"}}
                                                     src={photo.src}
                                                     alt={photo.name}/>
                                                <div className="top-right">
                                                    <i className="fas fa-plus-circle"></i>
                                                </div>
                                                <div className="bottom-left">
                                                    {photo.name}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    );
}


export default Content;
