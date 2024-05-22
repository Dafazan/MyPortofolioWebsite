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
          image="https://cdnb.artstation.com/p/assets/images/images/072/935/135/large/dafazan-grassdesk-01.jpg?1708537199"
          title="Hill Of Past"
          type="3D ILLUSTRATION"
        />
        <Cardsport
          image="https://cdnb.artstation.com/p/assets/images/images/040/695/679/large/dafazan-wood-clean.jpg?1629639957"
          title="Just Another Sunset"
          type="3D ILLUSTRATION"
        />
        <Cardsport
          image="https://cdnb.artstation.com/p/assets/images/images/072/934/887/large/dafazan-blackhole-c1.jpg?1708536780"
          title="Gargantuan"
          type="3D ILLUSTRATION"
        />
        <Cardsport
          image="https://cdnb.artstation.com/p/assets/images/images/072/934/797/large/dafazan-cls1.jpg?1708536626"
          title="The Class"
          type="3D ISOMETRIC"
        />
        <Cardsport
          image="https://cdna.artstation.com/p/assets/images/images/039/971/138/large/dafazan-comp.jpg?1627478459"
          title="The Bridge"
          type="3D ISOMETRIC"
        />
      </div>
    </div>
  );
}

export default Selectedworks;
