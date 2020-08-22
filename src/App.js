import React, { useState, useEffect } from 'react';
 
import './App.css';

function App() {
  const friends = ['karim', 'rahim', 'jamil', 'shuvo']
 const products = [
           {name: 'Alu', weight: '5kg'},
           {name: 'Morich', weight: '1kg'},
           {name: 'Tomato', weight: '4kg'}
         ]
return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p> 
         <Counter></Counter>
         <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
        {
            products.map(product =>  <Product product={product}></Product>)
          }
        </header>
    </div>
  );
}
function Users (){
  const [users, setUsers] = useState([]);
  
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>  setUsers(data));
 }, [])
  return(
<div>
  <h3>Dynamic Users:{users.length}</h3>
 <ul>
   {
     users.map(user => <li>{user.email}</li>)
   }
 </ul>
</div>
  )
}

function Counter (){
  const [count, setCount]= useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick = {handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
 

function Product (props){
  const productStyle={
    border: '1px solid gray',
    borderRedius:'10px',
    backgroundColor:'lightgray',
    height:'200px',
    width: '200px',
    float: 'left',
    margin: '5px',
    color: 'black',
    padding:'38px'

  }
  const{name, weight} = props.product;
  console.log(name, weight)
  return (
    <div style ={productStyle}>
      <h3>{ name}</h3>
      <h5>{ weight}</h5>
      <button>Buy now</button>
    </div>
  )
}
 
 
export default App;
