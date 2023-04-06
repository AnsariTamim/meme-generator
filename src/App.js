
import './App.css';
import {useState} from 'react';
import Header from './component/Header';
import Meme from './component/Meme';
import SignUp from './component/SignUp'


function App() {
//   const [isGoingOut, setIsGoingOut] = useState(false)

//   //  let answer = isGoingOut === true ? "Yes" : "No"
//   // console.log(answer)
  
// function changeMind(){
//   setIsGoingOut(prevState => !prevState)
// }

  return (
    <div>
   {/* < div className='state'>
       <div className="state-value" onClick={changeMind} >
        <h1>{isGoingOut === true? "Yes" : "No"}</h1>
       </div>
       <h1 className='state-title'>Do I feel like going out tonight?</h1>
       </div> */}
      <Header/>
      <Meme/>
      <SignUp/>
   
  </div>
  );
}

export default App;
