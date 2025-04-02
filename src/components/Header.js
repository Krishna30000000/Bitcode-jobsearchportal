function Header() {
  // Demo 1
  let fName = "Bitcode!!";
  let dt = new Date().toDateString();

  // Demo 2
  let colors = ["red", "green", "blue"];

  // Demo 3
  let stud = [
    { rollno: 1, name: "aaa", marks: 10 },
    { rollno: 2, name: "bbb", marks: 10 },
    { rollno: 3, name: "aaa", marks: 10 },
  ];

  // Demo 3
  function funClick(x) {
    alert(x.rollno + x.name + x.marks);
    console.log(x.rollno + x.name + x.marks);
  }

  return (
    <div>
      {/* Demo 1 */}
      <h1>Hello</h1>
      <h5>{dt}</h5>
      <h6>{new Date().toDateString()}</h6>

      {/* Demo 2 */}
      <ul>
        {colors.map((x, i) => {
          return (
            <li>
              {x}*{i}
            </li>
          );
        })}
      </ul>

      {/* Demo 3 */}
      <table border="2">
        <thead>
          <tr>
            <td>Index </td>
            <td>value </td>
          </tr>
        </thead>
        <tbody>
          {colors.map((x, i) => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{x}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Demo 3 */}
      <table border="2">
        <tr>
          <td>RollNo</td>
          <td>Name</td>
          <td>Marks</td>
        </tr>

        {stud.map((x) => {
          return (
            <tr
              key={x.rollno}
              onClick={() => {
                funClick(x);
              }}
            >
              <td>{x.rollno}</td>
              <td>{x.name}</td>
              <td>{x.marks}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Header;
