"use client";
import React, { useEffect, useState } from "react";
import CardsportH from "./cardsportH";

function Selectedworks() {
  const [scrollLocation, setScrollLocation] = useState(0);
  const [prevScrollLocation, setPrevScrollLocation] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollLocation = window.scrollY;
      setScrollLocation(currentScrollLocation);

      // Check if scrollLocation is decreasing
      if (currentScrollLocation < prevScrollLocation) {
        // Scroll location is decreasing
        setScrollDirection("up");
      } else if (currentScrollLocation > prevScrollLocation) {
        // Scroll location is increasing
        setScrollDirection("down");
      }

      // Update prevScrollLocation with currentScrollLocation
      setPrevScrollLocation(currentScrollLocation);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollLocation]);

  return (
    <>
      <div className="w-full flex flex-col gap-3 ">
        <div className="grid grid-cols-1 gap-7 ">
          <div className="h-[55vh] w-full flex gap-7 sticky top-0 ">
            <CardsportH
              image="https://cdna.artstation.com/p/assets/images/images/072/923/394/large/dafazan-keyrender1ex.jpg?1708517799"
              title="Morning, Writers!"
              type="3D ILLUSTRATION"
            />
            <CardsportH
              image="https://cdna.artstation.com/p/assets/images/images/053/506/046/large/dafazan-6.jpg?1662385090"
              title="Honda Civic"
              type="3D ASSETS"
            />
          </div>
          <div className="h-[55vh] w-full flex gap-7 sticky top-0 ">
            <CardsportH
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02323.JPG?alt=media&token=f4cf98e2-70e1-4ab3-aecf-c0ddc492c5c2"
              title="TELKOM INFRA INVENTORY"
              type="UI/UX REDESIGN"
            />
            <CardsportH
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02324.JPG?alt=media&token=b1ba1a42-b263-4b84-83fb-a0f9f506315a"
              title="CBL ERP MANUFATURE"
              type="UI/UX DESIGN"
            />
          </div>
          <div className="h-[55vh] w-full flex gap-7 sticky top-0 ">
            <CardsportH
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02322.JPG?alt=media&token=80ac0f15-e023-40e0-adc3-46a2cceaac5b"
              title="WWTP SIM"
              type="3D VISUALIZER"
            />
            <CardsportH
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
              title="VESPA AR 3D"
              type="UNITY DEV"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Selectedworks;
