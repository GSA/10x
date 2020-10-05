import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.ga("send", "pageview");
  }, [pathname]);

  return null;
};
