// import React from 'react'
// import HeroSection from './HeroSection'



// const Home = () => {
//   // using props  passing data

//   const data = {
//     name: "Ravindra Kurhade",
//     image: "./images/hero.svg",
//   };
//   return (
//     <div>
//       <HeroSection {...data} />
//     </div>
//   );
// }

// export default Home




// import React,{useContext} from "react";
// import HeroSection from "./HeroSection";

// const Home = () => {


//   // using props  passing data

//   const data = {
//     name: "Ravindra Kurhade",
//     image: "./images/hero.svg",
//   };
//   return (
//     <div>
//       <HeroSection {...data} />
//     </div>
//   );
// };

// export default Home;


// reducer use and context



import React,{useEffect} from "react";
import { useGlobalContext } from "../../context/context";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import HeroSection from "./HeroSection";

const Home = () => {

const {updateHomePage} = useGlobalContext();


useEffect (() => updateHomePage(), []);
  return (
    <>

      <HeroSection />
      <Services/>
      <Contact/>
    </>
  );
};

export default Home;