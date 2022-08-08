import { useEffect, useState, useRef, useCallback } from 'react';

const TimerHandler = (timeLeft: number, isPaused: boolean) => {
    const [secondsLeft, setSecondsLeft] = useState(0);
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused)

    const initTimer = useCallback(() => {
        setSecondsLeft(timeLeft)
    }, [timeLeft])

    const tick = useCallback(() => {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }, [])

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                setSecondsLeft(timeLeft)
            }
            tick()
        }, 1000);

        return () => clearInterval(interval);
    }, [initTimer, tick, timeLeft])


    return initTimer;
}

export default TimerHandler