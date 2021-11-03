import './App.css';
import axios from 'axios'
import FileDownload from "js-file-download"

function App() {
    const onClickButton = async() => {
        try{
            const response = await axios.post("http://localhost:4000/xlsx",{},{
                responseType: 'blob'
            })
            console.log(response)

            FileDownload(response.data, "output.xlsx")
            // console.log(response.data)
            // console.log(response.headers['content-disposition'])
            // const url = window.URL.createObjectURL(new Blob([response.data]));
            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute('download', 'file.pdf'); //or any other extension
            // document.body.appendChild(link);
            // link.click();

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
