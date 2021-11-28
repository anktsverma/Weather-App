import Card from "./components/card"
import './App.css'
import Navbar from "./components/nav";
import Footer from "./components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import background from './assets/backgroundcover.jpg'
const App = () => {
  return ( 
    <div className="container"  style={{backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
      <Navbar/>
      <Card/>
      <Footer/>
    </div>
   );
}
 
export default App;