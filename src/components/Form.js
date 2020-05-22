import React, {useState} from 'react';
import {differenceBetweenYears, estimateByBrand, insureIncrement} from '../helpers';

import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #E1E1E1;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width:100%;
    padding: 1rem;
    color: #FFFFFF;
    text-tranform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div `
    background-color: red;
    color: white;
    padding: 1rem;
    witdh: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({setSummary, setLoad}) => {

    const [ data, setData ] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [ error, setError ] = useState(false);

    const { brand, year, plan } = data;

    const getData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        let result = 2000;

        const difference = differenceBetweenYears(year);
        
        result -= ((difference*3)*result)/100;
        
        result = estimateByBrand(brand)*result;
        
        result = parseFloat(insureIncrement(plan)*result).toFixed(2);

        setLoad(true);

        setTimeout(() => {

            setLoad(false);

            setSummary({
                result,
                data
            });

        }, 3000);

        setSummary({
            result,
            data
        });
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error>Todos los campos son necesarios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Ano</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option value="">--Seleccione--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={getData}
                /> Basic

                <InputRadio
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan === "full"}
                    onChange={getData}
                /> Full
            </Field>

            <Button type="submit">Cotizar</Button>

        </form>
     );
}
 
export default Form;