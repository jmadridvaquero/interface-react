import React, {useState, useEffect} from "react"


function Service() {
    const [state, setState] = useState({loading: true})
    
    useEffect(() => {
        fetch("https://api.airtable.com/v0/appmGkj4JSgjTAE3K/Services?api_key=keyymnrx7vCKyPaSr")
            .then((resp) => resp.json())
            .then(data => { setState({ services: data.records, loading: false })});
        }, [])
        console.log(state, "state")
    

    return( <p>{state.loading ? null : state.services[0].fields.Name}</p> )

}


export default Service