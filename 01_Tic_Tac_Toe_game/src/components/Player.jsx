import { useState } from "react"


export default function Player({name, symbol,isActive}) {
    const [isName,setisName]=useState(name);
    const [isEditing,setIsEditing]=useState(false);

    function handleChange(e){
        setisName(e.target.value);
    }

    function handleEditClick(){
        setIsEditing(editing=> !editing);
    }
    let playerName =<span className="player-name">{isName}</span>

    if(isEditing){
        playerName= (<input type="text" required value={isName} onChange={handleChange}/>);//two way binding //value get out as well as in
    };
    return(
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {playerName}
            <span className="player-sympol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing? "Save": "Edit"}</button>
    </li>
    )
}