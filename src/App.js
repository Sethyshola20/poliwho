import './assets/App.scss';
import Representative from './components/Representatives';
import React, {useState, useEffect} from 'react';

function App() {

  const [representatives, setRepresentatives] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  

  const fetchRepresentative = async() => {
    const res = await fetch('https://www.nosdeputes.fr/deputes/json')
    const data = await res.json()
    console.log(data)
    
    if(data.deputes) {
      setRepresentatives(data.deputes)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepresentative()
  }, [])
  return (
    <>
      <form search={search} setSearch={setSearch} >
          <input className="search_input" type='text' placeholder='Nom, parti, departement...' onChange={(event)=> setSearch(event.target.value.toLowerCase())}/>
      </form>
        {loading ? <div>loading...</div> : <h1>Les députés de la 14e législature:</h1>}
      <Representative representatives={representatives} search={search} />
    </>
  );
}

export default App;
