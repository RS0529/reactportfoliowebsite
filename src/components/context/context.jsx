// import React from 'react'

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   return <AppContext.Provider value="ravi">{children}</AppContext.Provider>;
// };

// export {AppContext, AppProvider};

// import React, { useContext } from "react";

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   return <AppContext.Provider value="ravi">{children}</AppContext.Provider>;
// };

// // global custom hook
// const useGlobalContext = () => {
//     return useContext(AppContext);
// }

// export { AppContext, AppProvider, useGlobalContext };

// import React, { useContext } from "react";

// const AppContext = React.createContext();

// // passing value
// const AppProvider = ({ children }) => {
//   return <AppContext.Provider value={{name:"Ravi", image:"./images/hero.svg"}}>{children}</AppContext.Provider>;
// };

// // global custom hook
// const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider, useGlobalContext };

// useReducer Hook

// import React, { useContext, useReducer } from "react";
// import reducer from "../reducer/reducer";

// const AppContext = React.createContext();

// const intialState = {
//   name: "",
//   image: "",
// };

// // passing value
// const AppProvider = ({ children }) => {
//   // using reducer

//   const [state, dispatch] = useReducer(reducer, intialState);

//   const updateHomePage = () => {
//     return dispatch({
//       type: "HOME_UPDATE",
//       payload: {
//         name: "Ravindra Kurhade",
//         image: "./images/hero.svg",
//       },
//     });
//   };

//   const updateAboutPage = () => {
//     return dispatch({
//       type: "ABOUT_UPDATE",
//       payload: {
//         name: "CODER RAVI",
//         image: "./images/about.svg",
//       },
//     });
//   };








//   return (
//     <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // global custom hook
// const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider, useGlobalContext };








import React, { useContext, useReducer,useEffect } from "react";
import reducer from "../reducer/reducer";

const AppContext = React.createContext();


const API = "https://ravidemoapi.herokuapp.com/service";


const intialState = {
  name: "",
  image: "",
  service: [],
};

// passing value
const AppProvider = ({ children }) => {
  // using reducer

  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Ravindra Kurhade",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "CODER RAVI",
        image: "./images/about.svg",
      },
    });
  };


  // api data get
//  const getServices = async (url) => {
//    try {
//      const res = await fetch(url);
//      const data = await res.json();
//      dispatch({ type: "GET_SERVICES", payload: data });
//    } catch (error) {
//      console.log(error);
//    }
//  };



 const getService = async (url) => {
   try {
    // const res = await axios.get((url))
    // res.data
    const res = await fetch(url);
    const data =  await res.json()
    dispatch({ type: "GET_SERVICE", payload: data });
   } catch (error) {
     console.log(error);
   }
 };



// api call

useEffect(() => {
 getService(API);
}, []);


  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

