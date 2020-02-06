import React, {useState, useEffect} from "react"


function Service() {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetch("https://api.airtable.com/v0/appmGkj4JSgjTAE3K/Services?api_key=keyymnrx7vCKyPaSr")
            .then((resp) => resp.json())
            .then(data => { setState({ services: data.records })});
        }, [])
        console.log(state, "state")
    

    return( <p>Service</p> )

}


export default Service