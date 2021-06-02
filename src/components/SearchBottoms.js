import React from "react";
import "../css/SearchBottoms.css";

export default function SearchBottoms(props){

    let searchBottoms = [];

    return(
        <div className="search">
            <input type="text" placeholder="무엇을 찾으시나요?" onInput={(e)=>{
                for(let i = 0; i<props.bottoms.length; i++){
                    if(props.bottoms[i].name.includes(e.target.value)){
                        searchBottoms.push(props.bottoms[i]);
                        props.setBottoms(searchBottoms);
                    } 
                }
            }}/>
        </div>
    )
}