import React from "react";

const Stats = ({valor, nombre}) => {
  return (
    <>
      <div>
        <meter
          min="0"
          max="120"
          value={valor}
          low="25"
          high="100"
          optimum="120"
        />
        <p>
          {nombre} ------ <span>{valor}</span>
        </p>
      </div>
    </>
  );
};

export default Stats;
