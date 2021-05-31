import React from "react";
import "../css/Shoes.css";
import {useHistory} from "react-router-dom";

export default function Shoes(props){

    let history = useHistory();

    return(
        <section className="section1">
            <article className="article1">
                <ul>
                {
                    props.shoes.map((elem,idx)=>{
                        return (
                        <li key={idx} onClick={()=>{
                            history.push("/shoes/detail/"+elem.id)
                        }}>
                            <div className="item"><img src="" alt={elem.id}/></div>
                            <p>제품명: {elem.name}</p>
                            <p>가격: {elem.price}원</p>
                            <p>수량: {elem.stock}개</p>
                        </li>
                        )
                    })
                }
                </ul>
            </article>
        </section>
    )
}