import React from "react";
import styled from "styled-components";

export default function Order(props){

    let topsPurchase = []
    props.tops.forEach((elem)=>{
        if(elem.purchase>0){
            topsPurchase.push(elem);
        }
    })

    let bottomsPurchase = []
    props.bottoms.forEach((elem)=>{
        if(elem.purchase>0){
            bottomsPurchase.push(elem);
        }
    })
    
    let shoesPurchase = []
    props.shoes.forEach((elem)=>{
        if(elem.purchase>0){
            shoesPurchase.push(elem);
        }
    })

    let topsSum = ()=>{
           
            let sum = 0;
            topsPurchase.forEach((elem,id)=>{
                if(elem.purchase>0){
                    sum+=elem.purchase*elem.price;
                }
            })
            return sum;
    }   

    let bottomsSum = ()=>{
           
        let sum = 0;
        bottomsPurchase.forEach((elem,id)=>{
            if(elem.purchase>0){
                sum+=elem.purchase*elem.price;
            }
        })
        return sum;
    }   

    let shoesSum = ()=>{
            
        let sum = 0;
        shoesPurchase.forEach((elem,id)=>{
            if(elem.purchase>0){
                sum+=elem.purchase*elem.price;
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

    let OrderList = styled.div`
        font-size: 23px;
        font-weight: bold;
        flex:1;
    `

    let OrderListItem = styled.div`
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

            <h1>주문내역</h1>
            <Align>
                <Container>
                    <OrderList>상의
                        {
                            topsPurchase.map((elem,id)=>{
                                return <OrderListItem>{elem.name} / {elem.purchase}개 / {elem.price}원</OrderListItem>
                            })
                        }    
                    </OrderList>
                    <h3>금액:  
                        {
                            topsSum()
                        }원
                    </h3>
                </Container>
                
                <Container>
                    <OrderList>하의
                        {
                            bottomsPurchase.map((elem,id)=>{
                                return (
                                <OrderListItem>{elem.name} / {elem.purchase}개 / {elem.price}원</OrderListItem>
                                )
                            })
                        }  
                    </OrderList>
                    <h3>금액:  
                        {
                            bottomsSum()
                        }원
                    </h3>
                </Container>
                <Container>
                    <OrderList>신발
                        {
                            shoesPurchase.map((elem,id)=>{
                                return <OrderListItem>{elem.name} / {elem.purchase}개 / {elem.price}원</OrderListItem>
                            })
                        } 
                    </OrderList>
                    <h3>금액:  
                        {
                            shoesSum()
                        }원
                    </h3>
                </Container> 
            </Align>
            <Sum>총금액:{topsSum()+bottomsSum()+shoesSum()}원</Sum> 
        </>
    )
}