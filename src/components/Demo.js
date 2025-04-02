import { useRef } from "react";

function Demo() {
  let f1 = useRef();
  let f2 = useRef();
  let f3 = useRef();
  let f4 = useRef();
  let f5 = useRef();
  let f6 = useRef();

  function funAdd() {
    let selectedGender = f1.current.checked
      ? f1.current.value
      : f2.current.checked
      ? f2.current.value
      : "Not selected";

    console.log(
      "Gender:",
      selectedGender,
      "\nMaths:",
      f3.current.checked,
      "\nBio:",
      f4.current.checked,
      "\nMarathi:",
      f5.current.checked,
      "\nEnglish:",
      f6.current.checked
    );
  }

  return (
    <div>
      <h3>Gender</h3>
      Female:
      <input type="radio" value="Female" name="gender" ref={f1} />
      Male:
      <input type="radio" value="Male" name="gender" ref={f2} />
      <br />
      <br />
      <h3>Subject</h3>
      Maths:
      <input type="checkbox" ref={f3} />
      <br />
      Bio:
      <input type="checkbox" ref={f4} />
      <br />
      Marathi:
      <input type="checkbox" ref={f5} />
      <br />
      English:
      <input type="checkbox" ref={f6} />
      <br />
      <br />
      <input type="button" value="Add Value" onClick={funAdd} />
    </div>
  );
}

export default Demo;
