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
    const [secondsLeft, setSecondsLeft] = useState(data.exercises[0].duration);
    const [timerPosition, setTimerPosition] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const timerPositionRef = useRef(timerPosition);

    const switchTimer = () => {
        timerPositionRef.current++
        setTimerPosition(timerPositionRef.current)
        let timing = data.exercises[timerPosition].duration;
        setSecondsLeft(timing);
    }

    const initTimer = useCallback(() => {
        setSecondsLeft(data.exercises[timerPosition].duration)
    }, [])

    const tick = useCallback(() => {
        console.log(secondsLeftRef.current);

        secondsLeftRef.current--;

        if (secondsLeftRef.current === 0) {
            switchTimer();
            return
        }
        setSecondsLeft(secondsLeftRef.current)
    }, [])

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
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