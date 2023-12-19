"use client";

import Image from "next/image";

const BackgroundVideo = () => {
  return (
    <Image
      width={100}
      height={100}
      alt="Picture of the Istanbul"
      src="/bg-dark.jpg"
      style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        objectFit: "cover",
        height: "100vh",
        objectPosition: "center",
      }}
    />
  );
};

export default BackgroundVideo;
