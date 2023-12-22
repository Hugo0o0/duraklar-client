import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    if (window.scrollY === 0) {
      setScroll(0);
    } else {
      setScroll(1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scroll;
};
