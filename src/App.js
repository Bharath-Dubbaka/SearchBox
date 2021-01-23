import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';
import ListItem from './ListItem'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className="App">
        <div>
          <input 
            onChange={(e) => {
              setSearchTerm(e.target.value)
              }}
            type="text" 
            placeholder='Search users by names'
          />
            {JSONDATA.filter((val) => {
              if (searchTerm == '') {
                return null
              } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
              
            }).map((val, key) => {
              console.log(val)
              return (
                <ListItem val={val} key={key}/>
                )
              
          })}
        </div>
    </div>
  );
}

export default App;
