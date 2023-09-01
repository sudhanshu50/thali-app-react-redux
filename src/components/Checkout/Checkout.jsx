import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { removeItem } from "../../reducers/slice";
import Navigation from "../Navigation/Navigation";
import routes from "../../routes/routes.json";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.thali.thali);  
  console.log(cart);

  let totalAmount = cart.map((item) => item.totalPrice).reduce((pre, curr) => pre + curr, 0)
  console.log(totalAmount);

  const order = ()=>{
    if(cart.length<2){
      alert("Please order atleast 2 items")
    } else{
      alert("Order Successful. You will be redirected to Home page")
      navigate(routes.HOME)
    }
  };

  
  return (

    <div>
      <Navigation/>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin:"10px" }}>
        {cart.map((item, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Price: {item.price}
              </Card.Text>
              <Card.Text>
                Quantity:{item.quantity}
              </Card.Text>
              <Card.Text>
                Total Price: {item.totalPrice}
              </Card.Text>
              <Button onClick={() => dispatch(removeItem(index))} variant="primary">Remove</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <button style={{margin:"10px", borderRadius:"4px"}} onClick={() => navigate(routes.MENU)} >Menu</button>
      <div>
        <Button onClick={order} variant="success">Order Now</Button>
        <h3>Total Amount:{totalAmount} </h3>
      </div>
    </div>
  )
};

export default Checkout;