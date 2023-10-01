import logo from './logo.svg';
import './App.css';

import {products} from "./products.js"

function App() {
  
  const productslist = products.map ( (product)=>{
    return (
      <div className='design1 '>
        <img  className= "imgdesign"src ={product.img}/>
        <h5> {product.order}</h5>
       <h5> {product.price}</h5> 
      </div>
    )
  } )
  return (
    <div className="App" >
      <h1> TEA SHOP</h1>
      <h3> The finest tea taste is here </h3>
      <img className="imgdesigntitle"src='https://media.gettyimages.com/id/182418478/photo/teabag-in-hot-water.jpg?s=612x612&w=gi&k=20&c=A5cvYWF_QCz5bqZOl_K5fryDBaiIUXiNPT6fkgPDsnY=' />  
   <div className='productcard'>
   {productslist} 
    </div>
    </div>

  );


}

export default App;
