import axios from 'axios';
import { useEffect, useRef, useState } from "react";

const useAxios = (webpage: string, method: any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };
  var url =  "https://devcademy.herokuapp.com/api/"+webpage

  useEffect(() => {
    
    (async () => {
      try {
        const response = await axios.request({
          signal: controllerRef.current.signal,
          method,
          url,
        });

        setData(response.data);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { cancel, data, error, loaded };
};

export default useAxios;
