import React from "react";
import VideoCover from "react-video-cover";

import cursor from "../../images/play.cur"

export default class VideoComponent extends React.Component {
    state = {
        animate: false
    };

    render() {


        const videoOptions = {
            // src: 'https://gcs-vimeo.akamaized.net/exp=1563303566~acl=%2A%2F1294263193.mp4%2A~hmac=8b51ca4a8fb340c658ecaa980cb37a05be63485634d8d83d17eac1d864213584/vimeo-prod-skyfire-std-us/01/955/13/329779326/1294263193.mp4',
            src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',

            autoPlay: true,
            ref: videoRef => {
                this.videoRef = videoRef;
                this.videoRef.play()
            },
            loop: true,
            onClick: () => {
                if (this.videoRef && this.videoRef.paused) {
                    this.videoRef.play();
                } else if (this.videoRef) {
                    this.videoRef.pause();
                }
            },
            // title: 'click to play/pause',
        };
        return (
            <div style={{
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
                zIndex: 1,
                cursor: "pointer" //`url(${cursor}), default)`
            }}>
                <VideoCover
                    videoOptions={videoOptions}
                >

                </VideoCover>
            </div>
        );

    }
}
