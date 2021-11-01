import './App.css';
import axios from 'axios'


function App() {
    const onClickButton = async() => {
        try{
            const result = await axios.post("http://localhost:4000/xlsx",{},{
                "Content-Type":"application/json"
            })
        }catch(err){
            console.error(err.message)
        }
    }
  return (
    <div className="App">
      <button onClick={onClickButton}>asdf</button>
    </div>
  );
}

export default App;
