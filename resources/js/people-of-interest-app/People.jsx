import React from "react";
import { useEffect, useState } from "react";
import PersonDetail from "./PersonDetail";

export default function People() {
    const [people, setPeople] = useState([]);
    const [personId, setPersonId] = useState(2);
    const apiUrl = "/api/people";

    const loadPeople = async () => {
        const response = await fetch(apiUrl);

        const data = await response.json();
        console.log(data);

        setPeople(data);
    };

    useEffect(() => {
        loadPeople();
    }, []);

    return (
        <>
            <h2>Active agents component</h2>
            {personId ? (
                <PersonDetail personId={personId} />
            ) : (
                people.map((person, id) => (
                    <div className="people-list" key={id}>
                        <ul>
                            <li>
                                Name: {person.name} (ID: {person.id})
                            </li>
                        </ul>
                    </div>
                ))
            )}
        </>
    );
}

//onClick={() => setPersonId(person.id)
