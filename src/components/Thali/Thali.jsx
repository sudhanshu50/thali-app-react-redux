import { useSelector } from "react-redux";
import Product from "../Product/Product";
import styles from "../Thali/Thali.module.css";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import Navigation from "../Navigation/Navigation"
import routes from "../../routes/routes.json";

const Thali = () => {
  
  const navigate=useNavigate()

  const itemsData = useSelector((state) => state.thali.products);
  console.log(itemsData);

  const cartItem = useSelector((state)=>state.thali.thali);
  // console.log(cartItem);
  
  return (
    <>
      <Navigation/>
      <h1>Menu</h1>
    <div className={styles.container}>
      {itemsData.map((item, index) =>(
       <Product key={index} data={item} />)
      ) } 
    </div>
    <div>
      <Button className={styles.checkout} onClick={()=>navigate(routes.CHECKOUT)} variant="danger">Cart: {cartItem.length}</Button>
    </div>
    </>
  )
};

export default Thali;