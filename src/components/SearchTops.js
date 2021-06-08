import React, {useEffect} from "react";
import "../css/SearchTops.css";

export default function SearchTops(props){


    let originalTops =[
        {
            id: 0,
            name: "후드티",
            price: 25000,
            stock: 9,
            img: "img/tops0.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 1,
            name: "니트",
            price: 23000,
            stock: 8,
            img: "img/tops1.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 2,
            name: "셔츠",
            price: 20000,
            stock: 12,
            img: "img/tops2.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 3,
            name: "가디건",
            price: 30000,
            stock: 10,
            img: "img/tops3.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 4,
            name: "티셔츠",
            price: 9000,
            stock: 20,
            img: "img/tops4.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
    ]
    useEffect(()=>{
        return ()=>{
            props.setTops(originalTops);
        }
    },[])
    
    let searchTops = [];
   

    return(
        <div className="search">
            <input type="text" placeholder="무엇을 찾으시나요?" onChange={(e)=>{
                for(let i = 0; i<originalTops.length; i++){
                    if(originalTops[i].name.includes(e.target.value.trim())){
                        searchTops.push(originalTops[i]);
                        props.setTops(searchTops);
                    } 
                } 
            }}/>
        </div>
    )
}