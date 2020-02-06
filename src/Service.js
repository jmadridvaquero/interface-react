import React, {useState, useEffect} from "react"


function Service(props) {
    const [state, setState] = useState({loading: true})
    
    useEffect(() => {
        fetch("https://api.airtable.com/v0/appmGkj4JSgjTAE3K/Services?api_key=keyymnrx7vCKyPaSr")
            .then((resp) => resp.json())
            .then(data => { setState({ services: data.records, loading: false })});
        }, [])
        console.log(state, "state")
    

    return( <div>
                <p>{state.loading ? null : state.services[props.match.params.id].fields.Name}</p>
                <p>{state.loading ? null : state.services[props.match.params.id].fields.phrase}</p>
                <p>{state.loading ? null : state.services[props.match.params.id].fields.description}</p>
            </div> )

}


export default Service