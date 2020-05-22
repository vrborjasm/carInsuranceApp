import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  const [ summary, setSummary ] = useState({
    result: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [ load, setLoad ] = useState(false);

  const {result, data} = summary;

  return (
    <Container>
      <Header 
        title='Cotizador de Seguro'
      />
      <ContainerForm>
        <Form 
          setSummary={setSummary} 
          setLoad={setLoad}
        />

      { load ? <Spinner /> : null}

        <Summary 
          data={data} 
        />

        { !load ? 
        <Result 
        result={result}
        />
        : null}
        
      </ContainerForm>
    </Container>
  );
}

export default App;
