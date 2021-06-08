import React, {useEffect} from "react";
import "../css/SearchShoes.css";

export default function SearchShoes(props){

    let originalShoes = [
        {
            id: 0,
            name: "컨버스",
            price: 59000,
            stock: 16,
            img: "img/shoes0.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 1,
            name: "슈퍼스타",
            price: 88000,
            stock: 6,
            img: "img/shoes1.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 2,
            name: "에어포스",
            price: 120000,
            stock: 11,
            img: "img/shoes2.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
          {
            id: 3,
            name: "올드스쿨",
            price: 76000,
            stock: 2,
            img: "img/shoes3.jpg",
            order: 0,
            cart: 0,
            purchase:0
          },
    ]


    useEffect(()=>{
        return ()=>{
            props.setShoes(originalShoes);
        }
    },[])

    let searchShoes = [];

    return(
        <div className="search">
            <input type="text" placeholder="무엇을 찾으시나요?" onInput={(e)=>{
                for(let i = 0; i<originalShoes.length; i++){
                    if(originalShoes[i].name.includes(e.target.value.trim())){
                        searchShoes.push(originalShoes[i]);
                        props.setShoes(searchShoes);
                    } 
                }
            }}/>
        </div>
    )
}