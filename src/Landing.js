import React from "react"


function Landing() {
    return( <div>
        <div className="homepage-banner">
            <p>Une equipe derriere chaque consultant</p>
            <p>Voici un petit descriptif du service</p>            
        </div>
        <div className="card-container d-flex flex-wrap text-center d-grid">
            <p>
                Ce que vous pouvez faire avec Coop Interface              
            </p>
            <div className="service-card">
                <img src={"nlbnlj"}/>
                <p>carte 1</p>
            </div>
            <div className="service-card">
                <img src={"ndfdsl" }/>
                <p>carte 1</p>
            </div>
            <div className="service-card">
                <img src={"dfdsf"}/>
                <p>carte 1</p>
            </div>
            <div className="service-card">
                <img src={"fqef"}/>
                <p>carte 1</p>
            </div>
            <div className="service-card">
                <img src={"efzef"}/>
                <p>carte 1</p>
            </div>
            <div className="service-card">
                <img src={"fsvgqsdg"}/>
                <p>carte 1</p>
            </div>
            <div className="service-card">
                <img src={"fqvgqds"}/>
                <p>carte 1</p>
            </div>
        </div>
        <div className="homepage-banner">
            <div>
                <img src={"nlbnlj"}/>
                <p>carte 2</p>
            </div>
            <div>
                <img src={"ndfdsl" }/>
                <p>carte 1</p>
            </div>
            <div>
                <img src={"dfdsf"}/>
                <p>carte 2</p>
            </div>
            <div>
                <img src={"fqef"}/>
                <p>carte 2</p>
            </div>
        </div>
    </div>)
}

export default Landing