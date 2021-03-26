const { useLocation } = require("react-router-dom");

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default useQuery;
