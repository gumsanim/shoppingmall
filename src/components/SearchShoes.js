import React from "react";
import "../css/SearchShoes.css";

export default function SearchShoes(props){

    let searchShoes= [];

    return(
        <div className="search">
            <input type="text" placeholder="무엇을 찾으시나요?" onInput={(e)=>{
                for(let i = 0; i<props.shoes.length; i++){
                    if(props.shoes[i].name.includes(e.target.value)){
                        searchShoes.push(props.shoes[i]);
                        props.setShoes(searchShoes);
                    } 
                }
            }}/>
        </div>
    )
}