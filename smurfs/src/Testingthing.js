import React from "react";
import axios from "axios";

function Testingthing() {
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div>This is the testing thing</div>;
}

export default Testingthing;
