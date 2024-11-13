import React from "react";
import CardService from "../(service)/cardService";
import Darurat from "../(service)/darurat";
import Jemput from "../(service)/jemput";
import Jadwal from "../(service)/jadwal";

const Service = () => {
  return (
    <>
      <CardService />
      <Jemput />
      <Jadwal />
      <Darurat />
    </>
  );
};

export default Service;
