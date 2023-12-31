import { useCallback, useState } from "react";

const useFetch = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendReq = useCallback(async (requestConfig, transformationLogic) => {
    console.log("🚀 ~ file: use-fetch.js:33 ~ sendReq ~ sendReq:");

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        // 'https://test-e3fd5-default-rtdb.firebaseio.com/tasks.json'
        requestConfig.url,
        {
          method: requestConfig.method || "GET",
          body: JSON.stringify(requestConfig.body) || null,
          headers: requestConfig.headers || {},
          
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      transformationLogic({...data , ...requestConfig.body});
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { sendReq, isLoading, error };
};

export default useFetch;
