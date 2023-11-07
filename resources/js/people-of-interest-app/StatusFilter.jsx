import React, { useEffect } from "react";
import { useState } from "react";

export default function StatusFilter() {
    const [statuses,setStatuses]= useState([]);
     const loadStatuses = async () => {
     const response = await fetch('/api/statuses');
     const data = await response.json();
     setStatuses(data);

     }
     useEffect(() => {
        loadStatuses();
     }, []);
    return (
        <>
            <div className="status-filter">
                {statuses.map((status)=>(
                    <div key={status.id}
                    className={ 'status-filter__status' }
                    >
                        { status.name }
                    </div>
                )
                )
                }
                </div>
        </>
    );
}
