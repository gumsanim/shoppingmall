import React, {useState} from "react";
import styled from "styled-components";

let Container = styled.div`
    margin-top:20px;
`;

let H1 = styled.h1`
    text-align:center;
`
let Input = styled.input`
    width: 200px;
    height:30px;
`

let Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

let Button = styled.button`
    height:40px;
`

export default function Topup(props){

    const [inputMoney, setInputMoney] = useState("");
    const topup = function(){
        if(inputMoney<10000){
            alert("10000원 이상 입력해주세요");
            setInputMoney("");
            return;
        } 
        props.setMoney(props.money+inputMoney);
        alert(inputMoney+"원 충전완료!!!");
        setInputMoney("");
    }

    return(
        <>
            <Container>
                <H1>충전할 금액을 입력하세요</H1>
                <Div>
                    <Input value={inputMoney} onChange={(e)=>{
                        setInputMoney(Number(e.target.value));
                    }}/>
                    <Button onClick={
                        topup
                    }>확인
                    </Button>
                    <Button onClick={()=>{
                        setInputMoney("");
                    }}>초기화
                    </Button>
                </Div>
            </Container>
        </>
    )
}