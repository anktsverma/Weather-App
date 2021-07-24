import Card from "./components/card"
import './App.css'
import Navbar from "./components/nav";
import Footer from "./components/footer";

const App = () => {
  return ( 
    <div className="container">
      <Navbar/>
      <Card/>
      <Footer/>
    </div>
   );
}
 
export default App;