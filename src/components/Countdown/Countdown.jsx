import React, { useState, useEffect, useMemo } from 'react'

const getTimeLeft = targetDate => {
    const utcTargetDate = new Date(targetDate.toUTCString())
    const currentDate = new Date()
    return utcTargetDate - currentDate
}

const formatDiffTime = diff => {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return {
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    }
}

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(0)
    const formattedTimeleft = useMemo(() => {
        return formatDiffTime(timeLeft)
    }, [timeLeft])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate))
        }, 500)
        return () => clearInterval(intervalId)
    }, [targetDate])

    return <div>
        {timeLeft < 0
            ? 'The Time Has Come'
            : <span>{`${formattedTimeleft.days}days ${formattedTimeleft.hours}hrs ${formattedTimeleft.minutes}min ${formattedTimeleft.seconds}sec`}</span>
        }
    </div>
}

Countdown.displayName = 'Countdown'
export default Countdown
