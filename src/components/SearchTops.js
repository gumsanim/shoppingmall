import React from "react";
import "../css/SearchTops.css";

export default function SearchTops(props){

    let searchTops = [];
    let originalTops = [...props.tops];

    return(
        <div className="search">
            <input type="text" placeholder="무엇을 찾으시나요?" onInput={(e)=>{
                for(let i = 0; i<props.tops.length; i++){
                    if(props.tops[i].name.includes(e.target.value)){
                        searchTops.push(props.tops[i]);
                        props.setTops(searchTops);
                    } 
                }
            }}/>
        </div>
    )
}