import React from 'react'
import { useParams } from 'react-router-dom';
import UserFactory from '../../../factories/UserFactory';
import useFetch from '../../../hooks/useFetch';

const DevUser = () => {

    let { id } = useParams();
    const [userData, isLoaded, error] = useFetch("API", UserFactory, `http://localhost:3000/user/${id}`, 1000, false);
  return (
    <div>{JSON.stringify(userData)}</div>
  )
}

export default DevUser