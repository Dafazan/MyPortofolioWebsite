import React from "react";
import Cardsport from "./cardsport";

function Selectedworks() {
  return (
    <div className="w-full flex flex-col gap-3 mt-10">
      <h2 className="font-thin text-3xl">Selected Works</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
        <Cardsport
          image="https://cdna.artstation.com/p/assets/images/images/072/923/394/large/dafazan-keyrender1ex.jpg?1708517799"
          title="Morning, Writers!"
          type="3D ILLUSTRATION"
        />
        <Cardsport
          image="https://cdna.artstation.com/p/assets/images/images/053/506/046/large/dafazan-6.jpg?1662385090"
          title="Honda Civic"
          type="3D ASSETS"
        />
        <Cardsport
          image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02315.JPG?alt=media&token=4273e535-eb2b-4ab7-81b0-371d8244af96"
          title="SAPTALOKA WEB"
          type="UI/UX & FULLSTACK DEV"
        />
        <Cardsport
          image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02310.JPG?alt=media&token=7099400e-f172-4249-ab14-b52ebfd41583"
          title="QUNFILMS WEB"
          type="FRONTEND DEV"
        />
        <Cardsport
          image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02323.JPG?alt=media&token=f4cf98e2-70e1-4ab3-aecf-c0ddc492c5c2"
          title="TELKOM INFRA INVENTORY"
          type="UI/UX REDESIGN"
        />
        <Cardsport
          image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02324.JPG?alt=media&token=b1ba1a42-b263-4b84-83fb-a0f9f506315a"
          title="CBL ERP MANUFATURE"
          type="UI/UX DESIGN"
        />
        <Cardsport
          image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02322.JPG?alt=media&token=80ac0f15-e023-40e0-adc3-46a2cceaac5b"
          title="WWTP SIM"
          type="3D VISUALIZER"
        />
        <Cardsport
          image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
          title="VESPA AR 3D"
          type="UNITY DEV"
        />
      </div>
    </div>
  );
}

export default Selectedworks;
