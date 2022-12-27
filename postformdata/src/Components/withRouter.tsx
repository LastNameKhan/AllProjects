import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();

    return <Component navigate={navigate} location={location} {...props} />;
  };
  return Wrapper;
};

export default withRouter;

// import { useLocation, useNavigate, useParams } from "react-router-dom";

// export const withRouter = (Component: any) =>  {
//     function ComponentWithRouterProp(props: any) {
//       let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//         <Component
//           {...props}
//           location={location}
//           navigate={navigate}
//           params={params}
//         />
//       );
//     }
//     return ComponentWithRouterProp;
//   }
