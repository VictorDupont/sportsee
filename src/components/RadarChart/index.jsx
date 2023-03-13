import React from 'react'
import { PropTypes } from 'prop-types'
import useFetch from '../../hooks/useFetch'
import './style.scss'

import PerformanceFactory from '../../factories/PerformanceFactory'
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart as RChart, ResponsiveContainer } from 'recharts'

const RadarChart = ({ userId }) => {

    const [performanceData, isLoaded, error] = useFetch("API", PerformanceFactory, `http://localhost:3000/user/${userId}/performance`, 1000, false);
    
    if (error) {
        return <div>Erreur : l'API est indisponible, impossible de charger le composant.</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else 
    {
        return (
    <ResponsiveContainer width="100%" height="100%">
        <RChart className="radar-chart" width="100%" height="100%" data={performanceData.performance}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" fontSize={14} tickLine={false} />
            <Radar dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.5} legendType="none" />
            <Legend />
        </RChart>
    </ResponsiveContainer>
  )
}
}

RadarChart.propTypes = {
    userId: PropTypes.number
}

export default RadarChart