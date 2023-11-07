import React from "react";
import { useEffect } from "react";

export default function MissionEditForm ({missionId, setMissionId}) {
   
    const loadMission = async () => {
        const response = await fetch(
            "/api/missions/" + missionId
           
        );
        const data = await response.json();
        console.log(data);
        setMissionId(data);
    };
    useEffect(() => {
        loadMission();
    }, []);

    return(
        <><div className="mission-edit-form">
        <h1>mission edit form for {missionId.id} </h1>
        <label htmlFor="name">Name</label>
        <br/>
        <input name="name"></input>
        <br/>
        <label htmlFor="year">year</label>
        <br/>
        <input name="year" label="year"></input>
        <br/>
        <button onClick={ ()=> setMissionId(null)}>&times;</button>
        </div>
       
        </>
    )
}