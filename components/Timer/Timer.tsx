import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box } from '@mui/material'
import ProgressProvider from '../../services/ProgressProvider/ProgressProvider';
import PlayButton from '../PlayButton/PlayButton';
import PauseButton from '../PauseButton/PauseButton';
import { useState, useEffect } from 'react';
import TimerHandler from '../../services/TimerHandler/TimerHandler';

export default function Timer() {
    const [isPaused, setIsPaused] = useState(false);
    const [value, setValue] = useState(0)

    useEffect(() => {
        const value = TimerHandler(100, isPaused);

        setValue(100)

    }, [isPaused, value])

    return (
        <Box width={200}>
            {/* <ProgressProvider valueStart={0} valueEnd={70}>
                {(value) => <CircularProgressbar value={value} text={`${value} s`} />}
            </ProgressProvider> */}
            <CircularProgressbar value={value} text={`${value} s`} />
            {
                isPaused ? <PlayButton /> : <PauseButton />
            }
            <PlayButton />
        </Box>
    )
}