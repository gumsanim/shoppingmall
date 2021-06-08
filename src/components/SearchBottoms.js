import React, {useEffect} from "react";
import "../css/SearchBottoms.css";

export default function SearchBottoms(props){

    let originalBottoms = [
        {
            id: 0,
            name: "청바지",
            price: 32000,
            stock: 3,
            img: "img/bottoms0.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 1,
            name: "슬랙스",
            price: 35000,
            stock: 13,
            img: "img/bottoms1.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 2,
            name: "반바지",
            price: 19000,
            stock: 10,
            img: "img/bottoms2.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 3,
            name: "카고바지",
            price: 31000,
            stock: 18,
            img: "img/bottoms3.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
        ]

    useEffect(()=>{
        return ()=>{
            props.setBottoms(originalBottoms);
        }
    },[])

    
    let searchBottoms = [];

    return(
        <div className="search">
            <input type="text" placeholder="무엇을 찾으시나요?" onInput={(e)=>{
                for(let i = 0; i<originalBottoms.length; i++){
                    if(originalBottoms[i].name.includes(e.target.value.trim())){
                        searchBottoms.push(originalBottoms[i]);
                        props.setBottoms(searchBottoms);
                    } 
                }
                console.log(props.bottoms);
            }}/>
        </div>
    )
}