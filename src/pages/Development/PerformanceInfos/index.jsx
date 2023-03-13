import React from 'react'
import { useParams } from 'react-router-dom';
import PerformanceFactory from '../../../factories/PerformanceFactory';
import useFetch from '../../../hooks/useFetch';

const DevPerformance = () => {

    let { id } = useParams();
    const [performanceData, isLoaded, error] = useFetch("API", PerformanceFactory, `http://localhost:3000/user/${id}/performance`, 1000, false);
  return (
    <div>{JSON.stringify(performanceData)}</div>
  )
}

export default DevPerformance