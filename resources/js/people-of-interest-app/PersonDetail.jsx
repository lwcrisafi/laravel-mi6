import React from "react";

export default function PersonDetail({ personId }) {
    return (
        <>
            <div className="person-detail">
                <h3>ID: {personId.id}</h3>
                <p>Name: {personId.name}</p>

                {/* <ul>
                    // <li>Name: {person.name}</li>
                    // <li>Status: {person.status_text || "Classified"}</li>
                    // <li>Title: {person.title || "Classified"}</li>
                    // <li>Occupation: {person.occupation || "Classified"}</li>
                    // <li>Alias: {person.aliases[0].alias}</li>
                    // <li>Nationality: {person.nationality}</li>
                    // <li>Died: {person.died || "Still alive"}</li>
                    // <li>Eye color: {person.eye_color}</li>
                    // <li>Hair color: {person.hair_color}</li>
                  
                </ul> */}
            </div>
        </>
    );
}
