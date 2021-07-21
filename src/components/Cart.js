import React from "react";
import {useHistory} from "react-router";
import styled from "styled-components"

export default function Cart(props){

    let history = useHistory();
    
    let topsCart = [];
    props.tops.forEach((elem)=>{
        if(elem.cart>0){
            topsCart.push(elem);
        }
    })

    let bottomsCart = [];
    props.bottoms.forEach((elem)=>{
        if(elem.cart>0){
            bottomsCart.push(elem);
        }
    })
    
    let shoesCart = [];
    props.shoes.forEach((elem)=>{
        if(elem.cart>0){
            shoesCart.push(elem);
        }
    })

    let topsSum = ()=>{
        let sum = 0;
        topsCart.forEach((elem,id)=>{
            if(elem.cart>0){
                sum+=elem.cart*elem.price;
            }
        })
        return sum;
    }   

    let bottomsSum = ()=>{
        let sum = 0;
        bottomsCart.forEach((elem,id)=>{
            if(elem.cart>0){
                sum+=elem.cart*elem.price;
            }
        })
        return sum;
    }   

    let shoesSum = ()=>{
        let sum = 0;
        shoesCart.forEach((elem,id)=>{
            if(elem.cart>0){
                sum+=elem.cart*elem.price;
            }
        })
        return sum;
    }   

    let Align = styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        align-items:center;
        margin: 20px 0;
    `

    let Container = styled.div`
        width:300px;
        height:300px;
        border:1px solid black;
        display:flex;
        flex-direction: column;
        margin: 20px 0;
        border-radius: 30px;
    `

    let Title = styled.div`
        font-size: 23px;
        font-weight: bold;
        flex:1;
    `

    let Content = styled.div`
        font-size:16px;
        font-weight:normal;
        flex:1;
    `

    let Sum = styled.div`
        font-size: 23px;
        font-weight: bold;
        flex:1;
    `

    return(
        <>
            <h1>장바구니</h1>
            <Align>
                <Container>
                    <Title>상의
                        {
                            topsCart.map((elem)=>{
                                return (
                                    <Content>
                                        {elem.name} / {elem.cart}개 / {elem.cart*elem.price}원
                                    </Content>
                                )
                            })
                        }
                    </Title>
                    <h3>금액: {topsSum()}원</h3>
                </Container>
                <Container>
                    <Title>하의
                        {
                            bottomsCart.map((elem)=>{
                                return (
                                    <Content>
                                        {elem.name} / {elem.cart}개 / {elem.cart*elem.price}원
                                    </Content>
                                )
                            })
                        }
                    </Title>
                    <h3>금액: {bottomsSum()}원</h3>
                </Container>
                <Container>
                    <Title>신발
                        {
                            shoesCart.map((elem)=>{
                                return (
                                    <Content>
                                        {elem.name} / {elem.cart}개 / {elem.cart*elem.price}원
                                    </Content>
                                )
                            })
                        }
                    </Title>
                    <h3>금액: {shoesSum()}원</h3>
                </Container>
            </Align>
            <Sum>총금액:{topsSum()+bottomsSum()+shoesSum()}원</Sum>
            <button onClick={()=>{
                props.setMoney(props.money-(topsSum()+bottomsSum()+shoesSum()))
                let copyTops = [...props.tops];
                copyTops.forEach((elem)=>{
                    if(elem.cart>0){
                        elem.purchase += elem.cart;
                        elem.cart = 0;
                    }        
                })
                props.setTops(copyTops);
                let copyBottoms = [...props.bottoms];
                copyBottoms.forEach((elem)=>{
                    if(elem.cart>0){
                        elem.purchase += elem.cart;
                        elem.cart = 0;
                    } 
                })
                props.setBottoms(copyBottoms);
                let copyShoes = [...props.shoes];
                copyShoes.forEach((elem)=>{
                    if(elem.cart>0){
                        elem.purchase += elem.cart;
                        elem.cart = 0;
                    } 
                })
                props.setShoes(copyShoes);
                alert("주문완료!!!");
                history.push("/order")
            }}>주문하기
            </button>
            <button onClick={()=>{
                let copyTops = [...props.tops];
                copyTops.forEach((elem)=>{
                    if(elem.cart>0){
                        elem.stock+=elem.cart;
                        elem.cart=0;
                    }
                })
                props.setTops([...copyTops]);
                let copyBottoms = [...props.bottoms];
                copyBottoms.forEach((elem)=>{
                    if(elem.cart>0){
                        elem.stock+=elem.cart;
                        elem.cart=0;
                    }
                })
                props.setBottoms([...copyBottoms]);
                let copyShoes = [...props.shoes];
                copyShoes.forEach((elem)=>{
                    if(elem.cart>0){
                        elem.stock+=elem.cart;
                        elem.cart=0;
                    }
                })
                props.setShoes([...copyShoes]);
            }}>비우기
            </button>
        </>

    )
}