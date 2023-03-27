import React from "react";
import { useState, useCallback } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [historique, setHistorique] = useState([]);

  const histoCounter = useCallback(
    (newCount) => {
      setHistorique([...historique, counter]);
      setCounter(newCount);
    },
    [historique, counter]
  );
  return (
    <div>
      <p>
        {counter} : le compteur est {counter % 2 ? "impaire" : "pair"}
      </p>
      <button
        className="btn btn-danger me-1"
        onClick={() => histoCounter(counter - 1)}
      >
        -
      </button>
      <button
        className="btn btn-success me-1"
        onClick={() => histoCounter(counter + 1)}
      >
        +
      </button>
      <br />
      {historique.map((histo, index) => (
        <div key={index}>
          Valeur {index} : {histo}
        </div>
      ))}
    </div>
  );
};

export default Counter;
