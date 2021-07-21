import React from "react";
import "../css/DetailTopsBottomsShoes.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailShoes(props){

    let history = useHistory();
    let {id} = useParams();
    let item = props.shoes.find((elem)=>{
        return elem.id === parseInt(id);
    })
    let idx = props.shoes.findIndex((elem)=>{
        return elem.id === parseInt(id);
    })

    return (
        <>
            <div className="container">
                <div className="item">
                    <img src={process.env.PUBLIC_URL+"/"+item.img} alt={item.id}/>
                </div>
                <p>{item.name}</p>
                <p>{item.price}원</p>
                <p>{item.stock}개</p>
                <div>
                    <button onClick={()=>{
                        let copyShoes = [...props.shoes];
                        if(copyShoes[idx].order>copyShoes[idx].stock-1) {
                            alert("재고 수량이 부족합니다.");
                            return;
                        }
                        copyShoes[idx].order++;
                        props.setShoes([...copyShoes]);
                    }}>+
                    </button>
                    <button onClick={()=>{
                       let copyShoes = [...props.shoes];
                       if(copyShoes[idx].order<=0) {
                           return;
                       }
                       copyShoes[idx].order--;
                       props.setShoes([...copyShoes]);
                    }}>-
                    </button>
                </div>
                <div>주문수량: {props.shoes[idx].order}</div>
                <div>주문가격: {props.shoes[idx].price*props.shoes[idx].order}</div>
            </div>
            <div className="container2">
                <button onClick={()=>{
                    if(props.money<props.shoes[idx].price*props.shoes[idx].order){
                        alert("보유하신 금액이 부족합니다");
                        let copyShoes = [...props.shoes];
                        copyShoes[idx].order = 0;
                        props.setShoes(copyShoes);
                        return;
                    } 
                    if(props.shoes[idx].order<=0){
                        alert("1개 이상 주문해주세요.")
                        return;
                    }
                    if(props.shoes[idx].cart<=0){
                        let copyShoes = [...props.shoes];
                        copyShoes[idx].cart = copyShoes[idx].order;
                        copyShoes[idx].order = 0;
                        copyShoes[idx].stock -= copyShoes[idx].cart;
                        props.setShoes([...copyShoes]);
                        history.push("/cart"); 
                    } else {
                        let copyShoes = [...props.shoes];
                        copyShoes[idx].stock -= copyShoes[idx].order;
                        copyShoes[idx].cart += copyShoes[idx].order; 
                        copyShoes[idx].order = 0;
                        props.setShoes([...copyShoes]);
                        history.push("/cart"); 
                    }
                   
                }}>장바구니추가
                </button>
                    <button onClick={()=>{
                        let copyShoes = [...props.shoes];
                        copyShoes[idx].order = 0;
                        props.setShoes(copyShoes);
                        history.goBack();
                }}>뒤로가기
                </button>
            </div>
        </>
    )
}