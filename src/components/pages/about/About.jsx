// import React from 'react'
// import HeroSection from '../home/HeroSection'




// const About = () => {
//   // using props  passing data 
//   const data = {
//     name: "Coder Ravi",
//     image: "./images/about.svg",
//   };

//   return <HeroSection {...data} />;
// }

// export default About





import React ,{useEffect} from "react";
import { useGlobalContext } from "../../context/context";
import HeroSection from "../home/HeroSection";

const About = () => {
  
  const {updateAboutPage} = useGlobalContext();

 useEffect(() => updateAboutPage(),[]);

  return <HeroSection/>;
};

export default About;