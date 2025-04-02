function Card(props) {
  let arr = props.arr;

  function getTotal() {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
      total = total + parseInt(arr[i].prodPrice);
    }
    return total;
  }

  function removeData() {}
  return (
    <div>
      <h5>Cards Datails</h5>
      <ul>
        {arr.map((x) => {
          return (
            <li>
              {x.prodName}*{x.prodPrice}
              
            </li>
          );
        })}
      </ul>
      <p>total:{getTotal()}</p>
    </div>
  );
}

export default Card;
