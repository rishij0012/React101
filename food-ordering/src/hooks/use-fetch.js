import { useCallback, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const useFetchHandler = useCallback(async (requestConfig, transformLogic) => {
    setIsLoading(true);

    try {
      const requestUtils = {
        method: requestConfig.method || "GET",
      };
      if (requestUtils.method !== "GET") {
        requestUtils["body"] = requestConfig.body || "";
      }

      const response = await fetch(requestConfig.url, requestUtils);

      if (!response.ok) {
        throw new Error("Unable to fetch Meals"); // instead of return
      }

      const data = await response.json();

      transformLogic(data);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    isError,
    useFetchHandler,
  };
};

export default useFetch;
