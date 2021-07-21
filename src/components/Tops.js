import React, {useState, useEffect} from "react";
import "../css/TopsBottomsShoes.css";
import {useHistory} from "react-router-dom";
import {additionalTops} from "../db/data"

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

    const [count,setCount] = useState(0);

   return (
        <section className="section1">
            <article className="article1">
                <div className="sort">
                    <button onClick={()=>{
                        let copyTops = [...props.tops];
                        copyTops.sort(function(a,b){
                            return a.id - b.id;
                        })
                        props.setTops(copyTops);
                    }}>기본정렬
                    </button>
                    <button onClick={()=>{
                        let copyTops = [...props.tops];
                        copyTops.sort(function(a,b){
                            if(a.name<b.name) return -1;
                            else if (a.name===b.name) return 0;
                            else return 1;
                        })
                        props.setTops(copyTops);
                    }}>가나다정렬
                    </button>
                    <button onClick={()=>{
                        let copyTops = [...props.tops];
                        copyTops.sort(function(a,b){
                            return a.price - b.price;
                        })
                        props.setTops(copyTops);
                    }}>낮은가격순정렬
                    </button>
                    <button onClick={()=>{
                        let copyTops = [...props.tops];
                        copyTops.sort(function(a,b){
                            return b.price - a.price;
                        })
                        props.setTops(copyTops);
                    }}>높은가격순정렬
                    </button>
                </div>

                {
                    noticeDisplay?<div className="banner">빅세일!!!</div>:null
                }
                
                <ul>
                    {
                        props.tops.map((elem,idx)=>{
                            return (
                            <li key={elem.id} onClick={()=>{
                                history.push("/tops/detail/"+elem.id)
                            }}>
                                <div className="item">
                                    <img src={process.env.PUBLIC_URL+"/"+elem.img} alt={elem.id}/>
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
                    let copyTops = [...props.tops];
                        for(i = count; i<count+4; i++){
                            if(!additionalTops[i]) break;
                            copyTops.push(additionalTops[i]);
                        }
                        props.setTops(copyTops);
                        setCount(count+4);
                }}>더보기
                </button>
            </article>
        </section>
   )
}