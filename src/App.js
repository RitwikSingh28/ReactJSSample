import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import './style.css';

function App() {
  const [person, setPerson] = useState({name: "", age: 0});
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.name && person.age){
      setPeople([...people, person]);
      setPerson({name: "", age: 0});
    }
  };

  return (
    <>
      <main>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-div">
            <label htmlFor="userName">Add Name:</label>
            <input 
              type="text" 
              name='userName' 
              id='userName' 
              value={person.name} 
              onChange={(e) => setPerson({...person, name: e.target.value})}/>
          </div>
          <div className="form-div">
            <label htmlFor="age">Add Age:</label>
            <input 
              type="text" 
              name='age' 
              id='age' 
              value={person.age} 
              onChange={(e) => setPerson({...person, age: e.target.value})}/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
        <section>
          {
            people.map((person) => {
              return <div className="person" key={uuidv4()}>
                <h1>{person.name}</h1>
                <h2>{person.age}</h2>
              </div>;
            })
          }
        </section>
    </>
  );
}

export default App;
