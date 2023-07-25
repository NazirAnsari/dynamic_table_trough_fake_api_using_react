import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Table from './table';
function App() {
  const [apifetch, setApiFetch] = useState([]);

  useEffect(() => {
    try{
    axios.get('https://dummyjson.com/products').then((response) =>{
    const productsArray = Object.values(response.data.products);
      setApiFetch(productsArray)})
    }catch(err){
        console.log("error in fetch api",err)
      }
  }, [])

  if (!apifetch) return null;

  const handleDelete = (index) => {
    const updatedProducts = [...apifetch];
    updatedProducts.splice(index, 1);
    setApiFetch(updatedProducts);
  };

  return (
    <div className='dummySize'>
    
          <Table apifetch={apifetch} handleDelete={handleDelete}/>
    
    </div>
  );
}

export default App;
