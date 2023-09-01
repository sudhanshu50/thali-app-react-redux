/* eslint-disable react/prop-types */
import { Figure } from "react-bootstrap";
import { useState } from "react";
import styles from "../Product/Product.module.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/slice";

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const add = (data) => {
    data = JSON.parse(JSON.stringify(data))
    data.quantity = quantity;
    data.totalPrice = Number(data.quantity) * Number(data.price);
    dispatch(addItem(data));
    console.log(data);
  }

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className={styles.container}>
      <Figure>
        <Figure.Image
          width={200}
          height={100}
          alt="171x180"
          src={data.image}
        />
        <Figure.Caption>
          {data.name}
        </Figure.Caption>
        <p>Price: {data.price}</p>
        <Button onClick={() => { add((data)) }} variant="primary">Add to Thali</Button>
        <div className="input-group mt-3">
          <span className="input-group-btn">
            <button type="button" className="quantity-left-minus btn btn-danger btn-number"
              onClick={decrement} >
              <span className="glyphicon glyphicon-minus">-</span>
            </button>
          </span>
          <input style={{width:"100px", textAlign:"center"}} type="text" readOnly id="quantity" name="quantity" className="form-control input-number"
            value={quantity} min="1" max="40" />
          <span className="input-group-btn">
            <button type="button" className="quantity-right-plus btn btn-success btn-number"
              onClick={increment}>
              <span className="glyphicon glyphicon-plus">+</span>
            </button>
          </span>
        </div>
      </Figure>
    </div>
  );
};

export default Product;