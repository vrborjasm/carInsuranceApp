import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultText = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const ResultContainer = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`; 

const Result = ({result}) => {



    return ( 
        (result === 0) ? <Message>Elige marca, ano y tipo de seguro</Message> 
        : (
            <ResultContainer>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={result}
                        timeout={{ enter: 500, exit: 500}}
                    >
                        <ResultText>El total es: $ {result}</ResultText>
                    </CSSTransition>
                </TransitionGroup>
            </ResultContainer>
        )
     )
}
 
export default Result;