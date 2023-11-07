import { useEffect, useState } from "react";
import React from "react";
export default function People() {
    const [peopleData, setPeopleData] = useState([]);
    const [personId, setPersonId] = useState(null);

    useEffect(() => {
        const loadSearch = async () => {
            const response = await fetch("/api/people");
            const data = await response.json();
            console.log(data);
            setPeopleData(data);
        };
        loadSearch();
    }, []);

    const handleItemClick = (id) => {
        setPersonId(id);
    };

    return (
        <div className="people_list_box">
            <h2>People of Interest</h2>
            {peopleData.map((person) => (
                <div className="people_list" key={person.id}>
                    <h2 onClick={() => handleItemClick(person.id)}>
                        Name: {person.name}
                    </h2>
                    <p>Occupation {person.occupation}</p>
                    <p>Selected Person's Id {personId}</p>
                    {/* <p>Alias {person.alias}</p> */}
                </div>
            ))}
        </div>
    );
}
