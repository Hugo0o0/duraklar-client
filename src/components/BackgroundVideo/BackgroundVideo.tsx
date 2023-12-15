"use client";

const BackgroundVideo = () => {
  return (
    <video
      src="video2.mp4"
      loop
      autoPlay
      muted
      style={{
        objectFit: "cover",
        objectPosition: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -2,
      }}
    />
  );
};

export default BackgroundVideo;
