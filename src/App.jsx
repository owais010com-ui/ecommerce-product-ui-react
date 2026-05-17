import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ApiCard from './component/ApiCard'
import Header from './component/Header'
import "./App.css"

export const App = () => {

  const [productData, setproductData] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [selectItems, setSelectItems] = useState("");


  const getData = async () => {
    // https://dummyjson.com/products/category/smartphones
    try {
      let url = "https://dummyjson.com/products"
      if (selectItems) {
        url = `https://dummyjson.com/products/category/${selectItems}`
      }
      const apiData = await axios.get(url);
      setproductData(apiData.data.products);
    } catch (error) {
      console.log("error", error);
    }

  }

  const apiProduct = async () => {
    try {
      const itemList = await axios.get("https://dummyjson.com/products/category-list")
      setProductItems(itemList.data);
    } catch (error) {
      console.log("error", error)
    }

  };

  useEffect(() => {
    getData();
  }, [selectItems]);

  useEffect(() => {
    apiProduct();
  }, []);


  return (
    <>
      <Header
        selectItems={selectItems}
        setSelectItems={setSelectItems}
        productItems={productItems} />
      <div className='showData'>
        {productData.map((apiProducts) => {
          return (
            <ApiCard key={apiProducts.id} product={apiProducts} />
          )

        })}

      </div>
    </>
  );
}

export default App;
