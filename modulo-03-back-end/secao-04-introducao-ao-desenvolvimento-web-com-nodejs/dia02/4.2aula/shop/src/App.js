import React, { useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = React.useState([]);
  const [name, setName] = React.useState();
  const [apiIsWorking, setApiIsWorking] = React.useState(false);

  const fetchUsers = useCallback(async function() {
    const response = await fetch('http://localhost:3001/users');
    const data = await response.json();
    setUsers(data);
    setApiIsWorking(true);
  }, [])

  useEffect(() => {
    fetchUsers()
      .catch(err => {
        console.error(err.message)
        setApiIsWorking(false);
      })
  }, [fetchUsers])

  const createNewUser = async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name })
    })
    if (response.ok) {
      fetchUsers();
      setName('')
    }
    setApiIsWorking(true);
    } catch (err) {
      setApiIsWorking(false);
    }
  }

  const inputHandleChange = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    setName(value);
  }

  const renderUsers = () => {
    return (
      users.map((user) =>  
         (
          <div key={user.id}>
            { user.name }
          </div>
        )
      )
    )
  }

  return apiIsWorking ? (
    <div className="App" style={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <div style={{ marginLeft: 40, marginRight: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', gap: 20}}>
        { renderUsers() }
      </div>
      <div>
        <input type="text" value={name} onChange={inputHandleChange} placeholder='Nome...' />
        <button onClick={createNewUser}>Add +</button>
      </div>
    </div>
  ) : <div>Backend API is not working properly... is it currently running?</div>
}

export default App;