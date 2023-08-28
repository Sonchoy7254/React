import React from "react";
var Clock = new Date().getMinutes();
function LTime () {
 return (
  <h4> The Time is Now {Clock}</h4>
 );
}





export default LTime;