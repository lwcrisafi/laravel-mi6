import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MissionEditForm({ missionId, setMissionId }) {
    const [mission, setMission] = useState(null);
    const [message, setMessage] = useState(null);

    const loadMission = async () => {
        try {
            const response = await axios("api/missions/" + missionId);
            setMission(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const sendData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "api/missions/" + missionId + "/store",
                mission
            );
            setMessage(response.data["message"]);
        } catch (error) {
            console.log(error);
            setMessage(error.message);
            // switch here
        }
    };

    const handleChange = (e) => {
        setMission((previousValues) => {
            return { ...previousValues, [e.target.name]: e.target.value };
        });
    };

    useEffect(() => {
        loadMission();
    }, []);

    return (
        <>
            <div className="mission-edit-form_main">
                <div className="mission-edit-form">
                    <h1>mission edit form for #{missionId} </h1>
                    <button
                        className="back_to_list_button"
                        onClick={() => setMissionId(null)}
                    >
                        Back to list
                    </button>
                </div>
                {mission ? (
                    <div className="missions-list__form-container">
                        {message ? <span>{message}</span> : ""}
                        <form action="" onSubmit={sendData}>
                            <label htmlFor="name">Name</label>
                            <br />
                            <input
                                name="name"
                                type="text"
                                value={mission.name}
                                className="missions-list__form-input"
                                onChange={handleChange}
                            ></input>
                            <br />
                            <label htmlFor="year">Year</label>
                            <br />
                            <input
                                name="year"
                                type="number"
                                value={mission.year}
                                className="missions-list__form-input"
                                onChange={handleChange}
                            ></input>
                            <br />
                            <label htmlFor="outcome">Outcome</label>
                            <br />
                            <select
                                name="outcome"
                                className="missions-list__form-input"
                                value={mission.outcome}
                                onChange={handleChange}
                            >
                                <option value="">Unknown</option>
                                <option value={1}>Successful</option>
                                <option value={0}>Failed</option>
                            </select>
                            <button type="submit">update</button>
                        </form>
                    </div>
                ) : (
                    "loading..."
                )}
            </div>
        </>
    );
}
