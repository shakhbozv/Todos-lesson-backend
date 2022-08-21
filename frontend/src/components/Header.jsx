import React, {useEffect, useState} from 'react';
import {DAYS,MONTHS} from "../utils/date";

function Header() {
    const [time, setTime]= useState('afternoon')
    const date = new Date()
    const hours = date.getHours()

    useEffect(() => {
        if (hours > 19 || hours < 7) {
            setTime('night')
        } else setTime('afternoon')
    }, [hours])




    return (
        <div className={"header " + time}>
            <h1>{DAYS[date.getDay()]}</h1>
            <span>{MONTHS[date.getMonth()]}, {date.getDate()}</span>

        </div>
    );
}

export default Header;