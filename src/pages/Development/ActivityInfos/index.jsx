import React from 'react'
import { useParams } from 'react-router-dom';
import ActivityFactory from '../../../factories/ActivityFactory';
import useFetch from '../../../hooks/useFetch';

const DevActivity = () => {

    let { id } = useParams();
    const [activityData, isLoaded, error] = useFetch("API", ActivityFactory, `http://localhost:3000/user/${id}/activity`, 1000, false);
  return (
    <div>{JSON.stringify(activityData)}</div>
  )
}

export default DevActivity