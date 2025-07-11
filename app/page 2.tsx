import React from "react";
import Landpage from "./components/new/landpage";
import Navbary from "./components/new/nav";
import Selectedworks from "./components/new/selectedworks";
import Mail from "./components/mail";
import { LampDemo } from "./components/acertenity/lamp";
import { HeroParallax } from "./components/acertenity/hero-parallax";

function Home() {
  const products = [
    {
      title: "SAPTALOKA WEB",
      link: "FULLSTACK DEV",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02315.JPG?alt=media&token=4273e535-eb2b-4ab7-81b0-371d8244af96",
    },
    {
      title: "QUNFILMS WEB",
      link: "FRONTEND DEV",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02310.JPG?alt=media&token=7099400e-f172-4249-ab14-b52ebfd41583",
    },
    {
      title: "IBADAHKU WEB",
      link: "FRONTEND DEV",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02320.JPG?alt=media&token=641bfca6-36bb-49f2-86bd-c2ba7e7fbffa",
    },
    {
      title: "INVENTORY MANAGEMENT",
      link: "UI/UX REDESIGN",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02323.JPG?alt=media&token=f4cf98e2-70e1-4ab3-aecf-c0ddc492c5c2",
    },
    {
      title: "WWTP SIM",
      link: "VISUAL DESIGNER",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02322.JPG?alt=media&token=80ac0f15-e023-40e0-adc3-46a2cceaac5b",
    },
    {
      title: "Morning, Writers!",
      link: "3D ILLUSTRATION",
      thumbnail:
        "https://cdna.artstation.com/p/assets/images/images/072/923/394/large/dafazan-keyrender1ex.jpg?1708517799",
    },
    {
      title: "Honda Civic",
      link: "3D MODELLING",
      thumbnail:
        "https://cdna.artstation.com/p/assets/images/images/053/506/046/large/dafazan-6.jpg?1662385090",
    },
    {
      title: "Hill Of Past",
      link: "3D ILLUSTRATION",
      thumbnail:
        "https://cdnb.artstation.com/p/assets/images/images/072/935/135/large/dafazan-grassdesk-01.jpg?1708537199",
    },
    {
      title: "Electric Piano",
      link: "3D MODELLING",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/epiano.png?alt=media&token=a5be5f87-0922-4b84-9b9c-115c2a1f946d",
    },
    {
      title: "The Bridge",
      link: "ISOMETRIC",
      thumbnail:
        "https://cdna.artstation.com/p/assets/images/images/039/971/138/large/dafazan-comp.jpg?1627478459",
    },
    {
      title: "Camera",
      link: "3D Modelling",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/cam.png?alt=media&token=3cab29b7-4fbb-4ec9-9a10-e14fdfcb4b4d",
    },
    {
      title: "The Class",
      link: "ISOMETRIC",
      thumbnail:
        "https://cdnb.artstation.com/p/assets/images/images/072/934/797/large/dafazan-cls1.jpg?1708536626",
    },
    {
      title: "Table Design",
      link: "FURNITURE DESIGN",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/3upload.png?alt=media&token=8c1fa092-a5a1-499f-bfdf-edda33bc59d3",
    },
  ];
  return (
    <>
      <Navbary />
      <div className="w-full relative">
        <div className="w-full flex flex-col absolute z-30">
          <HeroParallax products={products} />
        </div>
        <div className="w-full ">
          <Landpage />
        </div>
      </div>
      <div className="md:px-16 px-3 mt-[1200px] z-40">
        <Mail />
      </div>
      {/* <div className="md:px-16 px-3 py-10 flex flex-col">
        <Selectedworks />
      </div> */}
    </>
  );
}

export default Home;
