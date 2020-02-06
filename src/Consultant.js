import React, {useState, useEffect} from "react"

function Consultant() {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetch("https://api.airtable.com/v0/appmGkj4JSgjTAE3K/Consultants?api_key=keyymnrx7vCKyPaSr")
            .then((resp) => resp.json())
            .then(data => { setState({ consultants: data.records })});
        }, [])
        console.log(state, "state")
    return(<p>consultant</p> )
}

export default Consultant