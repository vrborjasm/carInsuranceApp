import React from 'react';
import {capitalize} from '../helpers';
import styled from '@emotion/styled';

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFFFFF;
    margin-top: 1rem;
`;

const Summary = ({data}) => {
    
    const {brand, year, plan} = data;

    if(brand === '' || year === '' || plan === '') return null;

    return ( 
        <SummaryContainer>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {capitalize(brand)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Ano: {year}</li>
            </ul>
        </SummaryContainer>
        
     );
}
 
export default Summary;