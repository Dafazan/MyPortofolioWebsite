import React from "react";
import Landpage from "./components/new/landpage";
import Navbary from "./components/new/nav";
import Selectedworks from "./components/new/selectedworks";

function Home() {
  return (
    <>
      <Navbary />
      <Landpage />
      <div className="md:px-16 px-3 py-10">
        <Selectedworks />
      </div>
    </>
  );
}

export default Home;
