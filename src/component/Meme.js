import {useState} from 'react'
import memesData from './memesData';

export default function Meme() {

const [memeImage, setMemeImage] = useState("")

  let url;
    function getMemeImage() {
      const memesArray = memesData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      //console.log(randomNumber)
     setMemeImage(memesArray[randomNumber].url)
      console.log(url);
    }

  return (
    <main>
      <p>{url}</p>
    <div className='form'>
        <input  className="form-input" type="text" placeholder='Top text'/>  
        <input  className="form-input" type="text" placeholder='Bottom text'/>
        <button onClick={getMemeImage} className='form-btn'>Get a new image</button>
    </div>
    <img src={memeImage} alt="" className='meme-img'/>
    </main>
  )
}
