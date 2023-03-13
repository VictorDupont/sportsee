import React from 'react'
import { useParams } from 'react-router-dom';
import AverageSessionsFactory from '../../../factories/AverageSessionsFactory';
import useFetch from '../../../hooks/useFetch';

const DevAverageSessions = () => {

    let { id } = useParams();
    const [averageSessionsData, isLoaded, error] = useFetch("API", AverageSessionsFactory, `http://localhost:3000/user/${id}/average-sessions`, 1000, false);
  return (
    <div>{JSON.stringify(averageSessionsData)}</div>
  )
}

export default DevAverageSessions