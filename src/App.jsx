import React, { createContext, useState } from 'react';
import Card from './Components/Card';

export const mycontext = createContext('')
const App = () => {
 const products= [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvtuC0-NUexY_WB1sjc4uzoK7gFZf2qkS7w&s",

            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WARvK_sRHtkrgA5rBZu9H7mKJEbHuYLEnA&s",

            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "data:image/jpeg;base64,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"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHm74uKAjp_UY-QPZJVRz8J7DrkmoGXVyTvg&s",

            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzginDBPZBWdMjhNNSwBP_mKuO3UIY_OQBVg&s",

            ]
        }
    ]
    const [data,setdata]=useState(products)
  return (
    <div>
      <mycontext.Provider value={[data,setdata]}>
         <Card />
      </mycontext.Provider>
    </div>
  );
};

export default App;