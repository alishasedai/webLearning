import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from '../src/component/Navbar';
import Footer from '../src/component/Footer'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function Counter(){
  const [count, setCount] = useState(20);
  return (
    <div className='App'>
      <Navbar/>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count-1)}> Click me</button>
      <Footer/>
    </div>
  )}

export default Counter;


