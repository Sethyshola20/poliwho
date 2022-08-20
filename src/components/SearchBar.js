import React, {useState} from "react";

export default function SearchBar(props) {
    const [mp, setMp] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!mp) {
          alert('Tapez')
          return
        }
    
        setMp('')
    }
    return(
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Nom du  député' value={mp} onChange={(e) => setMp(e.target.value)} autoFocus />
        </form>
    )
}