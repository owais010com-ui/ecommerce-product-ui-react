import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ApiCard from './component/ApiCard'
import Header from './component/Header'
import "./App.css"

export const App = () => {

  const [productData, setproductData] = useState([]);


  const getData = async () => {
    try {
      const apiData = await axios.get("https://dummyjson.com/products");
      setproductData(apiData.data.products);

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <Header />
      <div className='showData'>
        {productData.map((apiProducts) => {
          console.log(apiProducts);
          return (
            <ApiCard key={apiProducts.id} product={apiProducts} />
          )

        })}

      </div>x 
    </>
  )
}

export default App;
