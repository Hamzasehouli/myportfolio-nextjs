const ProductsList = function (props) {
  return (
    <ul>
      {props.data.map((d) => {
        return <li>{d.title}</li>;
      })}
    </ul>
  );
};

export default ProductsList;
