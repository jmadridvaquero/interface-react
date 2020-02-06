import React, {useState, useEffect} from "react"

function Consultant(props) {
    const [state, setState] = useState({loading: true})
    
    useEffect(() => {
        fetch("https://api.airtable.com/v0/appmGkj4JSgjTAE3K/Consultants?api_key=keyymnrx7vCKyPaSr")
            .then((resp) => resp.json())
            .then(data => { setState({ consultants: data.records, loading: false })});
        }, [])
        console.log(state, "state")
    return(<div>
        <p>{state.loading ? null : state.consultants[props.match.params.id].fields.Name}</p>
        <p>{state.loading ? null : state.consultants[props.match.params.id].fields.description}</p>
        <p>{state.loading ? null : state.consultants[props.match.params.id].fields.expertises}</p>
    </div> )
}

export default Consultant