import axios from 'axios'
import { data } from 'react-router-dom'
import { exp } from 'three/tsl'


export  async function getAllProduct(){
    const response = await axios.get('https://dummyjson.com/products')
     const Data = response.data.products
   
     return Data
    
}
  

  export  async function getRandomProduct(){
    const response = await axios.get('https://dummyjson.com/products')
     const Data = response.data.products
  const num = Math.floor(Math.random()*Data.length)
       
     return Data[num]
}


export async function  getCategory() {
  
    const response = await axios.get('https://dummyjson.com/products/categories')
     const Data = response.data
   
      return [Data[0],Data[1],Data[2],Data[3]]

    
}

 export async function getProductByCategory(category){
    const response = await axios.get(`https://dummyjson.com/products/category/${category}`)
     const Data = response.data.products    
      return Data
    }