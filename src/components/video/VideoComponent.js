import React from "react";
import VideoCover from "react-video-cover";

import cursor from "../../images/play.cur"



export default class VideoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }




    componentDidMount() {
        document.getElementById("div-video").children[0].setAttribute("playsinline", "")
        document.getElementById("div-video").children[0].setAttribute("muted", "")
    }

    render() {



        const videoOptions = {
            src: `${process.env.PUBLIC_URL}/background-video.mp4`,

            ref: videoRef => {
                this.videoRef = videoRef;
            },
            autoPlay: true,
            loop: true,
            muted : true, 
            onClick: () => {
                if (this.videoRef && this.videoRef.paused) {
                    this.videoRef.play();
                } else if (this.videoRef) {
                    this.videoRef.pause();
                }
            },
        };
        return (
            <div id="div-video" style={{
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
                zIndex: 1,
                cursor: "pointer" //`url(${cursor}), default)`
            }} onClick={this.handleClick}>
                <VideoCover

                    ref={input => this.inputElement = input}
                    videoOptions={videoOptions}
                >

                </VideoCover>
            </div>
        );

    }
}
