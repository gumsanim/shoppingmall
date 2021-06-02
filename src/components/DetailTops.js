import React, {useEffect} from "react";
import "../css/DetailTopsBottomsShoes.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailTops(props){

    useEffect(()=>{
        return ()=>{
            props.setTopsOrder([0,0,0,0,0])
        }
    },[])
    let history = useHistory();
    let {id} = useParams();
    let item = props.tops.find((elem)=>{
        return elem.id == id
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
                        if(props.topsOrder[item.id]>item.stock-1){
                             alert("수량이 부족합니다");
                             return;
                        }
                        let copyTopsOrder = [...props.topsOrder];
                        copyTopsOrder[item.id]++;
                        props.setTopsOrder([...copyTopsOrder]);
                        }}>+</button>
                    <button onClick={()=>{
                        if(props.topsOrder[item.id]<=0){
                            return;
                        }
                        let copyTopsOrder = [...props.topsOrder];
                        copyTopsOrder[item.id]--;
                        props.setTopsOrder([...copyTopsOrder]);
                    }}>-</button>
                </div>
                <div>주문수량: {props.topsOrder[item.id]}</div>
                <div>주문가격: {props.topsOrder[item.id]*item.price}</div>
            </div>
            <div className="container2">
            <button onClick={()=>{
                if(props.topsOrder[item.id]==0){
                    alert("수량을 입력하세요.");
                    return;
                }
                if(props.money<props.topsOrder[item.id]*item.price){
                    alert("보유금액이 부족합니다.")
                    let copyTopsOrder = [...props.topsOrder];
                    copyTopsOrder[item.id] = 0;
                    props.setTopsOrder([...copyTopsOrder]);
                    return;
                }
                let copyTops = [...props.tops];
                item.stock -= props.topsOrder[item.id];
                props.setTops([...copyTops]);
                let copyTopsOrder = [...props.topsOrder];
                copyTopsOrder[item.id] = 0;
                props.setTopsOrder([...copyTopsOrder]);
                alert("주문완료!!!");
                props.setMoney(props.money-(item.price*props.topsOrder[item.id]))                
            }}>주문하기</button>
            <button onClick={()=>{
                let copyTopsOrder = [...props.topsOrder];
                copyTopsOrder[item.id] = 0;
                props.setTopsOrder(copyTopsOrder);
                history.goBack();
            }}>뒤로가기</button>
            </div>
        </>
    )
}