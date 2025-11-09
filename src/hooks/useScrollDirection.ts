import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScroll = () => {
      const newScrollY = window.scrollY;
      if (newScrollY > lastScrollY && newScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = newScrollY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
