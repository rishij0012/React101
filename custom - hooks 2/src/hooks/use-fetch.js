import { useCallback, useState } from "react";

const useFetch = function (requestConfig, transformationLogic) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendReq = useCallback(async () => {
    console.log("🚀 ~ file: use-fetch.js:33 ~ sendReq ~ sendReq:");

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        // 'https://test-e3fd5-default-rtdb.firebaseio.com/tasks.json'
        requestConfig.url,
        {
          method: requestConfig.method || "GET",
          body: JSON.stringify(requestConfig.data) || null,
          headers: requestConfig.headers || {},
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      transformationLogic(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [requestConfig, transformationLogic]);

  return { sendReq, isLoading, error };
};

export default useFetch;
