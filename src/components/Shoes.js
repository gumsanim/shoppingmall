import React,{useState, useEffect} from "react";
import "../css/TopsBottomsShoes.css";
import {useHistory} from "react-router-dom";
import { additionalShoes } from "../db/data";

export default function Shoes(props){

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
                        let copyShoes = [...props.shoes];
                        copyShoes.sort(function(a,b){
                            return a.id - b.id;
                        })
                        props.setShoes(copyShoes);
                    }}>기본정렬
                    </button>
                    <button onClick={()=>{
                        let copyShoes = [...props.shoes];
                        copyShoes.sort(function(a,b){
                            if(a.name<b.name) return -1;
                            else if (a.name===b.name) return 0;
                            else return 1;
                        })
                        props.setShoes(copyShoes);
                    }}>가나다정렬
                    </button>
                    <button onClick={()=>{
                        let copyShoes = [...props.shoes];
                        copyShoes.sort(function(a,b){
                            return a.price - b.price;
                        })
                        props.setShoes(copyShoes);
                    }}>낮은가격순정렬
                    </button>
                    <button onClick={()=>{
                        let copyShoes = [...props.shoes];
                        copyShoes.sort(function(a,b){
                            return b.price - a.price;
                        })
                        props.setShoes(copyShoes);
                    }}>높은가격순정렬
                    </button>
                </div>

                {
                    noticeDisplay?<div className="banner">빅세일!!!</div>:null
                }

                <ul>
                {
                    props.shoes.map((elem,idx)=>{
                        return (
                        <li key={elem.id} onClick={()=>{
                            history.push("/shoes/detail/"+elem.id)
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
                        let copyShoes = [...props.shoes];
                            for(i = count; i<count+4; i++){
                                if(!additionalShoes[i]) break;
                                copyShoes.push(additionalShoes[i]);
                            }
                            props.setShoes(copyShoes);
                            setCount(count+4);
                    }}>더보기
                </button>
            </article>
        </section>
    )
}