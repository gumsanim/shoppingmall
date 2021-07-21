import React, {useState, useEffect} from "react";
import "../css/TopsBottomsShoes.css";
import {useHistory} from "react-router-dom";
import { additionalBottoms} from "../db/data";

export default function Bottoms(props){

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

    const [count,setCount] = useState(0);

    return(
        <section className="section1">
            <article className="article1">
                <div className="sort">
                    <button onClick={()=>{
                        let copyBottoms = [...props.bottoms];
                        copyBottoms.sort(function(a,b){
                            return a.id - b.id;
                        })
                        props.setBottoms(copyBottoms);
                    }}>기본정렬
                    </button>
                    <button onClick={()=>{
                        let copyBottoms = [...props.bottoms];
                        copyBottoms.sort(function(a,b){
                            if(a.name<b.name) return -1;
                            else if (a.name===b.name) return 0;
                            else return 1;
                        })
                        props.setBottoms(copyBottoms);
                    }}>가나다정렬
                    </button>
                    <button onClick={()=>{
                        let copyBottoms = [...props.bottoms];
                        copyBottoms.sort(function(a,b){
                            return a.price - b.price;
                        })
                        props.setBottoms(copyBottoms);
                    }}>낮은가격순정렬
                    </button>
                    <button onClick={()=>{
                        let copyBottoms = [...props.bottoms];
                        copyBottoms.sort(function(a,b){
                            return b.price - a.price;
                        })
                        props.setBottoms(copyBottoms);
                    }}>높은가격순정렬
                    </button>
                </div>

                {
                    noticeDisplay?<div className="banner">빅세일!!!</div>:null
                }

                <ul>
                {
                    props.bottoms.map((elem,idx)=>{
                        return (
                            <li key={elem.id}  onClick={()=>{
                                history.push("/bottoms/detail/"+elem.id)
                            }}>
                                <div className="item">
                                    <img src={elem.img} alt={elem.id}/>
                                </div>
                                <p>{elem.name}</p>
                                <p>{elem.price}원</p>
                                <p>{elem.stock}개</p>
                            </li>
                        )
                    })
                }
                </ul>
                <button onClick={()=>{
                        let i;
                        let copyBottoms = [...props.bottoms];
                            for(i = count; i<count+4; i++){
                                if(!additionalBottoms[i]) break;
                                copyBottoms.push(additionalBottoms[i]);
                            }
                            props.setBottoms(copyBottoms);
                            setCount(count+4);
                    }}>더보기
                </button>
            </article>
      </section>
    )
}