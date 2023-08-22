import { useEffect, useState } from "react";

const useCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const { operation } = props;

  useEffect(() => {
    console.log("check123123");
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (operation === "add") return prevCounter + 1;
        if (operation === "sub") return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [operation]);

  return counter;
};

export default useCounter;
