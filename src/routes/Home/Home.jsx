import { Outlet } from "react-router-dom";
import Directory from "../../compoonents/Directory/Directory"

const Home = () => {
    return (
    <>
    <Outlet/>
   <Directory />  
    </>
 
   
      
    );
  }
  
  export default Home;