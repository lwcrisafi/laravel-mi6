import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function StatusFilter({ selectedStatus, setSelectedStatus}) {
    const [statuses, setStatuses] = useState([]);
    const loadStatuses = async () => {
        const response = await fetch(
            "/api/statuses"
        );
        const data = await response.json();
        setStatuses(data);
    };
    
    useEffect(() => {
        loadStatuses();
    }, []);

    const handleStatusClick = (id) => {
        setSelectedStatus(id);
    };

    return (
        <>
            <div className="status-filter">
                {statuses.map((status) => (
                    <div
                        key={status.id}
                        className={"status-filter__status" + (status.id == selectedStatus ? " status-filter__status_selected" : '')}
                        onClick={ () => handleStatusClick(status.id)}
                    >
                        {status.name}
                    </div>
                ))}
            </div>
        </>
    );
}
