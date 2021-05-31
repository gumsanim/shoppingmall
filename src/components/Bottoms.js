import React from "react";
import "../css/Bottoms.css";
import {useHistory} from "react-router-dom";

export default function Bottoms(props){

    let history = useHistory();

    return(
        <section className="section1">
            <article className="article1">
                <ul>
                {
                    props.bottoms.map((elem,idx)=>{
                        return (
                        <li key={idx}  onClick={()=>{
                            history.push("/bottoms/detail/"+elem.id)
                        }}>
                            <div className="item"><img src="" alt={elem.id}/></div>
                            <p>{elem.name}</p>
                            <p>{elem.price}</p>
                            <p>{elem.stock}</p>
                        </li>
                        )
                    })
                }
                </ul>
            </article>
      </section>
    )
}