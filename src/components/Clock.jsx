import React from "react";

var ConditionalGreetings = new Date().getHours();

var CustoemrStyle = {
  color: ""
};

var greetings;

if (ConditionalGreetings < 12) {
  greetings = "Mornign";
  CustoemrStyle.color = "Green";
} else if (ConditionalGreetings < 18) {
  greetings = "Afternoon";
  CustoemrStyle.color = "Blue";
} else {
  greetings = "Evening";
  CustoemrStyle.color = "Red";
}

function Clock() {
  return <h2 style={CustoemrStyle}> It's {greetings} </h2>;
}

export default Clock;
