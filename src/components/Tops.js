import React from "react";
import "../css/Tops.css";
import {useHistory} from "react-router-dom";

export default function Tops(props){

    let history = useHistory();

   return (
        <section className="section1">
            <article className="article1">
                <ul>
                    {
                        props.tops.map((elem,idx)=>{
                            return (
                            <li key={idx} onClick={()=>{
                                history.push("/tops/detail/"+elem.id)
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