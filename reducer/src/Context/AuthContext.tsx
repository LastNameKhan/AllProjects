import React, { useReducer } from "react";
import { createContext } from "react";

const initialState: any = {
  mobile: "",
  token: null,
  user: null,
};

const myReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "setMobile":
      return {
        ...state,
        mobile: action.payload,
      };
    case "setProfile":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const OtpContext = createContext({
  state: initialState,
  dispatch: myReducer,
});

export const AuthContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(myReducer, initialState);
  return (
    <div>
      <OtpContext.Provider value={{ state, dispatch }}>
        {children}
      </OtpContext.Provider>
    </div>
  );
};

export default AuthContext;

// import { createContext, useEffect, useReducer, useState } from "react";

// const initialState: any = {
//   mobile: '',
//   token: null,
//   user: null,
//   products: []
// }

// const myReducer: any = (state: typeof initialState, action: any) => {
//   switch (action.type) {
//     case 'setMobile':
//       return {
//         ...state,
//         mobile: action.payload
//       }
//     case 'setProfile':
//       return {
//         ...state,
//         token: action.payload.token,
//         user: action.payload,
//       }
//     case 'deketeProducts':
//       return {
//         ...state,
//         products: state.products.filter((i: any) => i.id !== action.payload.id)
//       }
//     case 'logout':
//       return initialState
//     default:
//       return state
//   }
// }

// export const ProductContext = createContext({state: initialState, dispatch: myReducer});

// export const ProductContextProvide = ({ children }: any) => {
//   const [state, dispatch] = useReducer(myReducer, initialState)

//   return (
//     <ProductContext.Provider
//       value={{ state, dispatch }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };
