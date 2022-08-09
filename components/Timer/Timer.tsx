import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box } from '@mui/material'
import ProgressProvider from '../../services/ProgressProvider/ProgressProvider';
import PlayButton from '../PlayButton/PlayButton';
import PauseButton from '../PauseButton/PauseButton';
import { useState, useEffect, useCallback, useRef } from 'react';
import TimerHandler from '../../services/TimerHandler/TimerHandler';

export default function Timer({ data }: { data: any }) {

    // const [isPaused, setIsPaused] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const secondsLeftRef = useRef(secondsLeft);

    const [timerPosition, setTimerPosition] = useState(0)

    const initTimer = useCallback(() => {
        setSecondsLeft(data.exercises[timerPosition].duration)
    }, [])

    const tick = useCallback(() => {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }, [])

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (secondsLeftRef.current === 0) {
                let timing = data.exercises[timerPosition].duration;
                setTimerPosition(timerPosition + 1)
                setSecondsLeft(timing)
            }
            tick()
        }, 1000);

        return () => clearInterval(interval);
    }, [initTimer, tick])

    return (
        <Box width={200}>
            <CircularProgressbar value={secondsLeft} text={`${secondsLeft} s`} />
            <PlayButton />

        </Box>
    )
}