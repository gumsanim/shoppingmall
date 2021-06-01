import React from "react";
import "../css/DetailBottoms.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailBottoms(props){

    let history = useHistory();
    let {id} = useParams();
    let item = props.bottoms.find((elem)=>{
        return elem.id == id;
    })

    return (
        <>
            <div className="container">
                <ul>       
                    <li>
                        <div className="item"><img src="" alt=""/></div>
                        <p>제품명: {item.name}</p>
                        <p>가격: {item.price}</p>
                        <p>수량: {item.stock}</p>
                        <div>주문수량
                            <button onClick={()=>{
                               if(props.bottomsOrder[item.id]>item.stock-1){
                                alert("수량이 부족합니다");
                                return;
                                }
                                let copyBottomsOrder = [...props.bottomsOrder];
                                copyBottomsOrder[item.id]++;
                                props.setBottomsOrder(copyBottomsOrder);
                        }}>+</button>
                            <button onClick={()=>{
                                if(props.bottomsOrder[item.id]==0){
                                    return;
                                }
                                let copyBottomsOrder = [...props.bottomsOrder];
                                copyBottomsOrder[item.id]--;
                                props.setBottomsOrder(copyBottomsOrder);
                        }}>-</button></div>
                        <span>주문수량:{props.bottomsOrder[item.id]}</span>
                    </li>              
                </ul>
            </div>
            <div className="container2">
            <button onClick={()=>{
                history.push("/cart"); 
            }}>주문하기</button>
            <button onClick={()=>{
                history.goBack();
            }}>뒤로가기</button>
            </div>
        </>
    )
}