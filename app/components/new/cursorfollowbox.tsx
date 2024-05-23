// components/CursorFollowBox.js
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const CursorFollowBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollLocation, setScrollLocation] = useState(0);
  const [prevScrollLocation, setPrevScrollLocation] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleScroll = () => {
      const currentScrollLocation = window.scrollY;
      setScrollLocation(currentScrollLocation);

      if (currentScrollLocation < prevScrollLocation) {
        setScrollDirection("up");
      } else if (currentScrollLocation > prevScrollLocation) {
        setScrollDirection("down");
      }

      setPrevScrollLocation(currentScrollLocation);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Conditionally add/remove mousemove event listener based on scroll location
    if (scrollLocation < 650) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      setIsVisible(false); // Ensure the box is hidden when not following the cursor
    }

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [scrollLocation, prevScrollLocation]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          {isMobile ? (
            <></>
          ) : (
            <>
              <div
                className={`fixed z-50 w-16 h-16 border border-[#e0c49c] shadow-lg rounded-full pointer-events-none transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: `${position.x - 32}px`,
                  top: `${position.y - 32}px`,
                }}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default CursorFollowBox;
