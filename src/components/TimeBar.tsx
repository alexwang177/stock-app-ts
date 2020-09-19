import React, { useState } from 'react'

export default function TimeBar() {

    // state that holds current date
    const [date] = useState({varDate: new Date()})

    // function that checks if market is open
    const isMarketOpen = () => {

        const day = date.varDate.getDay()

        if(day === 0 || day === 6) return false

        const hour = date.varDate.getHours();
        const min = date.varDate.getMinutes();

        // market is open from 9:30 am to 4:00 pm EST
        // market is open from 9:30 to 16:00 

        if(hour < 9 || hour >= 16) return false

        if(hour === 9) return min >= 30

        return true
    }

    return (
        <div>
            <h3>{`Current Time EST: ${date.varDate.toLocaleString("en-US", {timeZone: "America/New_York"})} `}</h3>
            <h3>{isMarketOpen() ? "Open" : "Closed"}</h3>
        </div>
    )
}
