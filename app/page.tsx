import React from "react";
import Landpage from "./components/new/landpage";
import Navbary from "./components/new/nav";
import Selectedworks from "./components/new/selectedworks";
import Mail from "./components/mail";

function Home() {
  return (
    <>
      <Navbary />
      <Landpage />
      <div className="md:px-16 px-3 py-10 flex flex-col">
        <Selectedworks />
        <Mail />
      </div>
    </>
  );
}

export default Home;
