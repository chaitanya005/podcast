import React, { useState, useEffect } from "react";
import { read } from "./apiCore";
import Card from "./Card";
import { useParams } from "react-router-dom";
import Ama from "../AMA";

const AMA = () => {
  const [ama, setAma] = useState({});
  const [error, setError] = useState(false);
  let params = useParams();

  const loadSingleAma = (routeName) => {
    read(routeName).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAma(data);
      }
    });
  };

  useEffect(() => {
    const routeName = params.routeName;
    loadSingleAma(routeName);
  }, []);

  return (
    <div>
      <div>{ama._id && <Card ama={ama} />}</div>
    </div>
  );
};

export default AMA;
