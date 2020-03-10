import React from "react";
import Alignment from "alignment.js";
import CD2 from "./data/fasta.js";

function Viz() {
  return <Alignment fasta={CD2} />;
}

export default Viz;
