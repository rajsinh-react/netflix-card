import { Netflix } from './netflix.tsx';
import './App.css';
import './index.css';
import './component/CardHeading.css';

function App() {
  return <section className='container'>
    <h1 className='card-heading'> Netflix best movie</h1>
  <Netflix />
  </section>
}

export default App;



/* ------ condition can add by foure way 
1) if else condision on full module
2)turnery operetor
3)make a function
4) overwrite */