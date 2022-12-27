import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();

    return <Component navigate={navigate} location={location} {...props} />;
  };

  return Wrapper;
};

export default withRouter;
