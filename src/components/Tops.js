import React, {useState, useEffect} from "react";
import "../css/TopsBottomsShoes.css";
import {useHistory} from "react-router-dom";

export default function Tops(props){

    let history = useHistory();

    const [noticeDisplay, setNoticeDisplay] = useState(true);

    useEffect(()=>{
        let show = setTimeout(()=>{
            setNoticeDisplay(false);
        },3000)
        return ()=>{
            clearTimeout(show);
        }
    },[])

   return (
        <section className="section1">
            <article className="article1">

                {
                    noticeDisplay?<h1>세일중입니다!!!</h1>:null
                }
                
                <ul>
                    {
                        props.tops.map((elem,idx)=>{
                            return (
                            <li key={idx} onClick={()=>{
                                history.push("/tops/detail/"+elem.id)
                            }}>
                                <div className="item"><img src={elem.img} alt={elem.id}/></div>
                                <p>{elem.name}</p>
                                <p>{elem.price}원</p>
                                <p>{elem.stock}개</p>
                            </li>
                            )
                        })
                    }
                </ul>
                <button>더보기</button>
            </article>
        </section>
   )
}