import React from "react";

function VideoComponent() {
  return (
    <>
      <video width="640" height="360" controls loop>
        <source src="assets/Vedio.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default VideoComponent;
