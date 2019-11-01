import React from "react";
// import Front from "../components/Front";
import Loginform from "../components/Loginform";
//trying inport css 

const Login = () => {
  return (
      <div className="logincontainer">>
       {/* <Front backgroundImage="https://www.whirlpool.com/is/image/content/dam/business-unit/whirlpool/en-us/marketing-content/site-assets/page-content/refrigerator-sclp/Images/featuresassets/French_Doors_WRF992FIFM_Full.png?fit=constrain&fmt=jpg&utc=2018-08-23T21:29:06Z&wid=1246"> */}
        <h1>Wonder Kitch</h1>
        <p>You no longer need to spend hours staring at the items in your fridge trying to figure out what you can make with them. Just input the items that you already have in your fridge and we will help you come up with meal ideas!</p>
      {/* </Front> */}
      <Loginform />
    </div>
  );
};

export default Login;


