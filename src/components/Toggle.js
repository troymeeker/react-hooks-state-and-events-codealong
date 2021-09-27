import React, { useState }  from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  //set initial value to false, bc the button should be off when page is first loaded

 function handleClick(){
   setIsOn((isOn)=>!isOn);
 }
 const color = isOn ? "green" : "red";
  return <button style={{background: color}}onClick={handleClick }>{isOn ? "ON" : "OFF"}</button>;
  //use the state variable in the text of the component using conditional rendering
}

export default Toggle;
