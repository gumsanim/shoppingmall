import React from "react";
import "../css/DetailTopsBottomsShoes.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailBottoms(props){

    let history = useHistory();
    let {id} = useParams();
    let item = props.bottoms.find((elem)=>{
        return elem.id == id;
    })
    let idx = props.bottoms.findIndex((elem)=>{
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
                       let copyBottoms = [...props.bottoms];
                       if(copyBottoms[idx].order>copyBottoms[idx].stock-1) {
                           alert("재고 수량이 부족합니다.");
                           return;
                       }
                       copyBottoms[idx].order++;
                       props.setBottoms([...copyBottoms]);
                       console.log(props.bottoms[idx].order);
                    }}>+</button>
                    <button onClick={()=>{
                        let copyBottoms = [...props.bottoms];
                        if(copyBottoms[idx].order<=0) {
                            return;
                        }
                        copyBottoms[idx].order--;
                        props.setBottoms([...copyBottoms]);
                        console.log(props.bottoms[idx].order);
                    }}>-</button>
                </div>
                <div>주문수량: {props.bottoms[idx].order}</div>
                <div>주문가격: {props.bottoms[idx].price*props.bottoms[idx].order}</div>
            </div>
            <div className="container2">
                <button onClick={()=>{
                    if(props.money<props.bottoms[idx].price*props.bottoms[idx].order){
                        alert("보유하신 금액이 부족합니다");
                        return;
                    } 
                    let copyBottoms = [...props.bottoms];
                    copyBottoms[idx].cart = copyBottoms[idx].order;
                    copyBottoms[idx].order = 0;
                    props.setBottoms([...copyBottoms]);
                    console.log(props.bottoms[idx].order, props.bottoms[idx].cart);
                    history.push("/cart"); 
                }}>주문하기</button>
                <button onClick={()=>{
                    let copyBottoms = [...props.bottoms];
                    copyBottoms[idx].order = 0;
                    props.setBottoms(copyBottoms);
                    console.log(props.bottoms[idx].order, props.bottoms[idx].cart);
                    history.goBack();
                }}>뒤로가기</button>
            </div>
        </>
    )
}