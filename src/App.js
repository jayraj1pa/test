import './App.css';
import Analytics from './Components/Analytics';
import Animati from './Components/Animati';
import Blogs from './Components/Blogs';
import Brands from './Components/Brands';
import Customers from './Components/Customers';
import Footer from './Components/Footer';
import Header from './Components/Header';
import InfraStructure from './Components/InfraStructure';
import Petran from './Components/Petran';
import Products from './Components/Products';
import Provider from './Components/Provider';
import Testi from './Components/Testi';
import Visual from './Components/Visual';


function App() {
  return (
    <div className="App">
      <Header/>
      <Animati/>
      <Provider/>
      <InfraStructure/>
      <Visual/>
      <Analytics/>
      <Petran/>
      <Products/>
      <Customers/>
      <Testi/>
      <Brands/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
