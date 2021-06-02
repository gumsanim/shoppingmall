import React from "react";
import {Link} from "react-router-dom";
import "../css/Home.css";


export default function Home(props){

    const style={
        "textDecoration":"none",
        "color":"black"
    }

    return (
        <>  
            <div className="shop"><Link to="/" style={style}>재호잡화점</Link></div>
            <div className="status">
                <div className="money">💰현재보유금액:{props.money}원</div>
                <div className="cart"><Link to="/cart" style={style}>🛒장바구니</Link></div>
                <div className="cart"><Link to="/order" style={style}>📃주문내역</Link></div>
                <div className="topup"><Link to="/topup" style={style}>💸금액충전</Link></div>
            </div>
            <nav>
                <ul className="nav">
                    <li><Link to="/tops" style={style}>상의</Link></li>
                    <li><Link to="/bottoms" style={style}>하의</Link></li>
                    <li><Link to="/shoes" style={style}>신발</Link></li>
                </ul>
            </nav>
        </>
    )
}
