import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout';
import Timer from '../components/Timer/Timer';
import { LayoutsType } from '../components/layout/Layout/types';

const Home: NextPage = () => {
  return (
    <>
      <Timer/>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: { layout: LayoutsType.MainLayout },
  }
}

export default Home
