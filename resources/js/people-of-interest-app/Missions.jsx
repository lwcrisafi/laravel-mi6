import React, { useState, useEffect } from "react";

export default function Missions() {
    const [missions, setMissions] = useState([]);
    const loadMissions = async () => {
        const response = await fetch(
            "/api/missions"
            // +
            //     (selectedStatus !== ""
            //         ? "?status=" + encodeURIComponent(selectedStatus)
            //         : "")
        );
        const data = await response.json();
        console.log(data);
        setMissions(data);
    };

    useEffect(() => {
        loadMissions();
    }, []);

    return (
        <>
            <div className="missions_list">
                {missions.map((mission) => (
                    <div className="missions__mission_data" key={mission.id}>
                        <h2>Mission name: {mission.name}</h2>
                        <p>Mission year: {mission.year}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
