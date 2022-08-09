import { LayoutsType } from '../components/layout/Layout/types';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import ExerciseItem from '../components/ExerciseItem/ExerciseItem';
import Timer from '../components/Timer/Timer';

const link = 'https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2'

const Home = ({ result }: { result: any }) => {
  const { data: { questions } } = result

  return (
    <Box>
      {questions && questions.map((item: { muscle_group: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }; }, index: any) => {
        return (<ExerciseItem data={item} key={index} />)
      })}
    </Box>
  )
}

export const getServerSideProps = async () => {
  const result = await axios.get(link);

  return {
    props: { layout: LayoutsType.MainLayout, result: result.data }
  }
}

export default Home
