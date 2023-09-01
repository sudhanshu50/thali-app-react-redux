import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import routes from ".././routes/routes.json";
import Navigation from "../components/Navigation/Navigation";


const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <h1>
        Order Thali
      </h1>
      <img style={{borderRadius:"10px"}} src="https://5.imimg.com/data5/WX/BQ/MY-64410820/indian-food-500x500.jpg"/><br/>
      <Button style={{margin:"10px"}} onClick={() => navigate(routes.MENU)} variant="primary">Order Here</Button>
      
    </>
  )
}

export default Home;