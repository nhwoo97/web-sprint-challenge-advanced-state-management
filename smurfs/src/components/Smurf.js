import React from "react";

const Smurf = (props) => {
  const { details } = props;

  return (
    <div>
      <p>~~~~~~~~~~</p>
      <p>Name:{details.name}</p>
      <p>Height:{details.height}</p>
      <p>Age:{details.age}</p>
      <p>~~~~~~~~~</p>
    </div>
  );
};

export default Smurf;
