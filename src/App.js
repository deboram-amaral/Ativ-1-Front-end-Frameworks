import './App.css';
import React, { useState } from 'react';

import rindo from './imagens/rindo.jpg';
import alegre from './imagens/alegre.jpg';
import bailarina from './imagens/bailarina.jpg';
import coracao from './imagens/coracao.jpg';

  function App(){
  const[exibirTitulo, setExibirTitulo]=useState(false);

  const handleClick=() => {
    setExibirTitulo(!exibirTitulo);
  };

  return(
    <div className="App">
      <h1>Hello, world!</h1>

      <Botaoemoji
      titulo='sorrindo'
      imagem={rindo}
      grande={true}
      />

      <p>Clique no emoji para exibir o nome dele!</p>

      <Botaoemoji
      titulo='alegre'
      imagem={alegre}
      />

     <Botaoemoji
      titulo='bailarina'
      imagem={bailarina}
      />

     <Botaoemoji
      titulo='coração'
      imagem={coracao}
      />
      
    </div>
  )
}

function Botaoemoji (props) {
  const[exibirTitulo, setExibirTitulo]=useState(false);

  const handleClick=() => {
    setExibirTitulo(!exibirTitulo);}

  let width; 
  let hspace;

  if (props.grande) {
    width= '200px';
    hspace= '0'
  }
  else{
    width='50px';
    hspace='10'
  }
    
  return(
    <div style={{display:'inline-block'}}>
    <img src={props.imagem} alt='Sorrindo' width={width} hspace={hspace} display='inline-block'  margin='10px'
      onClick={handleClick}
      style={{ cursor: 'pointer' }}/>
    
      {exibirTitulo && <p>{props.titulo}</p>}
      </div>
  )
}

export default App;

