import React from "react";
import "../css/DetailTopsBottomsShoes.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailTops(props){

    let history = useHistory();
    let {id} = useParams();
    let item = props.tops.find((elem)=>{
        return elem.id === parseInt(id);
    })
    let idx = props.tops.findIndex((elem)=>{
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
                        let copyTops = [...props.tops];
                        if(copyTops[idx].order>copyTops[idx].stock-1) {
                            alert("재고 수량이 부족합니다.");
                            return;
                        }
                        copyTops[idx].order++;
                        props.setTops(copyTops);
                    }}>+
                    </button>
                    <button onClick={()=>{
                         let copyTops = [...props.tops];
                         if(copyTops[idx].order<=0) {
                             return;
                         }
                         copyTops[idx].order--;
                         props.setTops(copyTops);
                    }}>-
                    </button>
                </div>
                <div>주문수량: {props.tops[idx].order} </div>
                <div>주문가격: {props.tops[idx].price*props.tops[idx].order}</div>
            </div>
            <div className="container2">
                <button onClick={()=>{
                    if(props.money<props.tops[idx].price*props.tops[idx].order){
                        alert("보유하신 금액이 부족합니다");
                        let copyTops = [...props.tops];
                        copyTops[idx].order = 0;
                        props.setTops(copyTops);
                        return;
                    }
                    if(props.tops[idx].order<=0){
                        alert("1개 이상 주문해주세요.")
                        return;
                    }
                    if(props.tops[idx].cart<=0){
                        let copyTops = [...props.tops];
                        copyTops[idx].cart = copyTops[idx].order;
                        copyTops[idx].order = 0;
                        copyTops[idx].stock -= copyTops[idx].cart;
                        props.setTops(copyTops);
                        history.push("/cart"); 
                    } else {
                        let copyTops = [...props.tops];
                        copyTops[idx].stock -= copyTops[idx].order;
                        copyTops[idx].cart += copyTops[idx].order; 
                        copyTops[idx].order = 0;
                        props.setTops(copyTops);
                        history.push("/cart"); 
                    }
                }}>장바구니추가
                </button>
                <button onClick={()=>{
                    let copyTops = [...props.tops];
                    copyTops[idx].order = 0;
                    props.setTops(copyTops);
                    history.goBack();
                }}>뒤로가기
                </button>
            </div>
        </>
    )
}