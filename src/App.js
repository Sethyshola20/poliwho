import './assets/App.scss';
import Representative from './components/Representative';
import SearchBar from './components/SearchBar'
import React, {useState, useEffect} from 'react';

function App() {

  const [representative, setRepresentative] = useState()
  const [searchValue, setSearchValue] = useState('')

  const fetchRepresentative = async() => {
    await fetch('https://www.nosdeputes.fr/deputes/json')
    .then(res => res.json())
    .then(data => setRepresentative(data))
    .then(console.log(representative.deputes))
  }

  useEffect(() => {
    fetchRepresentative()
  }, [])


  return (
    <>
      <SearchBar searchValue={searchValue} />
      <Representative representative={representative}/>
    </>
  );
}

export default App;
