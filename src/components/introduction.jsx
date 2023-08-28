import react from "react";

var Name = "Sonchoy";

function Intro() {
  return (
    <div>
      <h2> I'm {Name} </h2>
      <h3> My Fevourit Subjects Are - </h3>
      <ul>
      <li> Math </li>
      <li> Physics </li>
      <li> Chemistry </li>
    </ul>
    </div>
  );
}

export default Intro;
