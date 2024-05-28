"use client";
import Image from "next/image";
import { OrbitalCanvas } from "../../app/components/canvas/orbital";
import React, { useState } from "react";

export default function about() {
  const numero = {
    total: 50,
    available: 35,
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [number, setNumber] = useState(0);

  // Function to increase the number
  const increaseNumber = () => {
    setNumber(number + 1);
  };

  // Function to decrease the number
  const decreaseNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const availability = (number / numero.total) * 100 + "%";
  return (
    <main className="text-white">
      <div>h</div>
    </main>
  );
}
