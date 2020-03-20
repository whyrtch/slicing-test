import React, {Component, Fragment} from 'react';

const Video = (props) => {
    const videos = props.videos;
    return(
        <Fragment>
            <div className="row no-gutters">
                {
                    videos !== undefined ?
                    videos.map((video) => {
                        return (
                            <div className="col-4 px-2">
                                <img className="img-fluid w-100" src={video.link} alt={video.name}/>
                            </div>
                        )
                    }) : "Tidak ada video"
                }
            </div>
        </Fragment>
    )
}
export default Video;