import './App.css';

import rindo from './imagens/rindo.jpg';
import alegre from './imagens/alegre.jpg';
import bailarina from './imagens/bailarina.jpg';
import coracao from './imagens/coracao.jpg';

function App(){
    return(
      <div className="App">
        <h1>Hello, world!</h1>
        <img src={rindo} alt='Sorrindo' title='Sorrindo' height='200px' hidth='200px'/>
        <p>Clique no emoji para exibir o nome dele!</p>
        <img src={alegre} alt='Alegre' title='Alegre' height='50px' hidth='50px' hspace='10'/>
        <img src={bailarina} alt='Bailarina' title='Bailarina' height='50px' hidth='50px' hspace='10'/>
        <img src={coracao} alt='coração' title='Coração' height='50px' hidth='50px' hspace='10'/>
      </div>
    )
  }
  
  export default App;

//Tentando tornar clicável (em andamento):
  // function App(){
//   const[exibirTitulo, setExibirTitulo]=useState(false);

//   const handleClick=() => {
//     setExibirTitulo(!exibirTitulo);
//   };
//   return(
//     <div className="App">
//       <h1>Hello, world!</h1>
//       <img src={rindo} alt='Sorrindo' height='200px' hidth='200px'
//       onClick={handleClick}
//       style={{ cursor: 'pointer' }}/>
//       {exibirTitulo && <p>Sorrindo</p>}

//       <p>Clique no emoji para exibir o nome dele!</p>
      
//       <img src={alegre} alt='Alegre' height='50px' hidth='50px' hspace='10'
//       onClick={handleClick}
//       style={{ cursor: 'pointer' }}/>
//       {exibirTitulo && <p>Alegre</p>}

//       <img src={bailarina} alt='Bailarina' height='50px' hidth='50px' hspace='10'
//       onClick={handleClick}
//       style={{ cursor: 'pointer' }}/>
//       {exibirTitulo && <p>Bailarina</p>}

//       <img src={coracao} alt='Coração' height='50px' hidth='50px' hspace='10'
//       onClick={handleClick}
//       style={{ cursor: 'pointer' }}/>
//       {exibirTitulo && <p>Coração</p>}
//     </div>
//   )
// }

// export default App;

