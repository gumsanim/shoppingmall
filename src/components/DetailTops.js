import React from "react";
import "../css/DetailTops.css";
import {useHistory, useParams} from "react-router-dom";

export default function DetailTops(props){

    let history = useHistory();
    let {id} = useParams();
    let item = props.tops.find((elem)=>{
        return elem.id == id
    })

    return (
        <>
            <div className="container">
                <ul>       
                    <li>
                        <div className="item"><img src="" alt=""/></div>
                        <p>제품명: {item.name}</p>
                        <p>가격: {item.price}원</p>
                        <p>수량: {item.stock}개</p>
                        <div>주문수량
                            <button onClick={()=>{
                                if(props.topsOrder[item.id]>item.stock-1){
                                    alert("수량이 부족합니다");
                                    return;
                                }
                                let copyTopsOrder = [...props.topsOrder];
                                copyTopsOrder[item.id]++;
                                props.setTopsOrder(copyTopsOrder);
                            }}>+</button>
                            <button onClick={()=>{
                                if(props.topsOrder[item.id]<=0){
                                    return;
                                }
                                let copyTopsOrder = [...props.topsOrder];
                                copyTopsOrder[item.id]--;
                                props.setTopsOrder(copyTopsOrder);
                            }}>-</button>
                        </div>
                        <div>주문수량: {props.topsOrder[item.id]}</div>
                        <div>주문가격: {props.topsOrder[item.id]*props.tops[item.id].price}</div>
                    </li>              
                </ul>
            </div>
            <div className="container2">
            <button onClick={()=>{

                let copyTops = [...props.tops];
                copyTops[item.id].stock -= props.topsOrder[item.id];
                props.setTops(...copyTops);
                let copyTopsOrder = [...props.topsOrder];
                copyTopsOrder[item.id] = 0;
                props.setTopsOrder(...copyTopsOrder);
                alert("주문완료!!!");
                console.log(props.tops);
                console.log(item);

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