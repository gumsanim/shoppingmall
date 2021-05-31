import React from "react";
import "../css/DetailTops.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailTops(props){

    let history = useHistory();
    let {id} = useParams();

    let item = props.tops.find((elem)=>{
        return elem.id == id;
    })

    return (
        <>
            <div className="container">
                <ul>       
                    <li>
                        <div className="item"><img src="" alt=""/></div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.stock}</p>
                    </li>              
                </ul>
            </div>
            <div className="container2">
            <button onClick={()=>{
                    
            }}>주문하기</button>
            <button onClick={()=>{
                history.goBack();
            }}>뒤로가기</button>
            </div>
        </>
    )
}