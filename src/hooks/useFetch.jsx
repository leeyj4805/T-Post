import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useFetch = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  if (!opts.url) {
    return;
  }

  const fetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (trigger !== 0) {
      axiosInstance(opts)
        .then((data) => {
          setState({
            ...state,
            loading: false,
            data,
          });
        })
        .catch((error) => {
          setState({
            ...state,
            loading: false,
            error,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return { ...state, fetch };
};

export default useFetch;
