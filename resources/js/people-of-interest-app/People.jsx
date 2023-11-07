import { useEffect, useState } from "react";
import React from "react";
import StatusFilter from "./StatusFilter";

export default function People() {
    const [peopleData, setPeopleData] = useState([]);
    const [personId, setPersonId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");

    const loadSearch = async () => {
        const response = await fetch(
            "/api/people" +
                (selectedStatus !== ""
                    ? "?status=" + encodeURIComponent(selectedStatus)
                    : "")
        );
        const data = await response.json();
        console.log(data);
        setPeopleData(data);
    };

    useEffect(() => {
        loadSearch();
    }, [selectedStatus]);

    const handleItemClick = (id) => {
        setPersonId(id);
    };

    return (
        <>
            <StatusFilter
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />
            <div className="people_list_box">
                <h2>People of Interest</h2>
                {peopleData.map((person) => (
                    <div className="people_list" key={person.id}>
                        <h2 onClick={() => handleItemClick(person.id)}>
                            Name: {person.name}
                            {/* Status: {person.status} */}
                        </h2>
                        <p>Occupation {person.occupation}</p>
                        <p>Selected Person's Id {personId}</p>
                        {/* <p>Alias {person.alias}</p> */}
                    </div>
                ))}
            </div>
        </>
    );
}
