import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter({ operation: "add" });

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
