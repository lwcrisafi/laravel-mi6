import React, { useState, useEffect } from "react";
import MissionEditForm from "./MissionEditForm";

export default function Missions() {
    const[missionId, setMissionId] = useState(null);
    const [missions, setMissions] = useState([]);


    const loadMissions = async () => {
        const response = await fetch(
            "/api/missions"
            +
                (missionId !== ""
                    ? "?mission=" + encodeURIComponent(missionId)
                    : "")
        );
        const data = await response.json();
        console.log(data);
        setMissions(data);
    };

    useEffect(() => {
        loadMissions();
    }, [missionId]);

    return (
        <>
            {!missionId ? (
                <>
                    <div className="missions_list">
                        {missions.map((mission) => (
                            <div
                                className="missions__mission_data"
                                key={mission.id}
                            >
                                <h2
                                    onClick={() => {
                                        setMissionId(mission.id);
                                    }}
                                >
                                    Mission name: {mission.name}
                                </h2>
                                <p>Mission year: {mission.year}</p>
                                <p>Mission ID: {mission.id}</p>
                            </div>
                        ))}
                    </div>{" "}
                </>
            ) : (
                <MissionEditForm
                    missionId={missionId}
                    setMissionId={setMissionId}
                />
            )}
        </>
    );
}
