import React from 'react'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { styles } from './styles';
import Timer from '../Timer/Timer';
import { useState } from 'react';

export default function ExerciseItem({ data }: { data: any }) {
	// console.log(data);



	return (
		<Box sx={styles.container}>

			{
				data && <Timer data={data} />
			}

			<Box>{data.title}</Box>
			{
				data.exercises.map((exercise: any, index: React.Key | null | undefined) => {
					return (
						<Box sx={styles.exerciseSection} key={index}>
							<Box key={index} sx={styles.exercise}>
								<Typography>
									{exercise.title}
								</Typography>
								<Typography>
									Duration: {exercise.duration}
								</Typography>
							</Box>
							{/* <Image blurDataURL="/assets/placeholder.png" placeholder="blur" src={exercise.photo} alt='photo' width='360px' height='360px' /> */}
						</Box>
					)
				})
			}
			<Box>{data.muscle_group.name}</Box>
		</Box>
	)
}
