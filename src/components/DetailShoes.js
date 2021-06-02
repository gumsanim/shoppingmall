import React from "react";
import "../css/DetailTopsBottomsShoes.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailShoes(props){

    let history = useHistory();
    let {id} = useParams();
    let item = props.shoes.find((elem)=>{
        return elem.id == id;
    })

    return (
        <>
            <div className="container">
                <div className="item"><img src={item.img} alt={item.id}/></div>
                <p>{item.name}</p>
                <p>{item.price}원</p>
                <p>{item.stock}개</p>
                <div>
                    <button onClick={()=>{
                        if(props.shoesOrder[item.id]>item.stock-1){
                            alert("수량이 부족합니다");
                            return;
                        }
                        let copyShoesOrder = [...props.shoesOrder];
                        copyShoesOrder[item.id]++;
                        props.setShoesOrder(copyShoesOrder);
                        }}>+</button>
                    <button onClick={()=>{
                            
                    }}>-</button>
                </div>
                <span>주문수량:{props.shoesOrder[item.id]}</span>
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