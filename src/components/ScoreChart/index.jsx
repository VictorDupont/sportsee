import UserFactory from "../../factories/UserFactory";
import { PropTypes } from "prop-types";
import "./index.scss"

import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from "recharts";

import useFetch from "../../hooks/useFetch";

const ScoreChart = ({ userId }) => {
    const [data, isLoaded, error] = useFetch("API", UserFactory, `http://localhost:3000/user/${userId}`, 1000, false);

    const Score = (payload) => {
        return (
            <div className="score-content">
                <span className="score">
                    {payload.payload[1].payload.newTodayScore}%
                </span>
                <p>de votre</p>
                <p>objectif</p>
            </div>
        )
    }

    let adaptedData = [
        {
            newTodayScore: 100,
            fill: "#FFFFFF"
        },
        {
            newTodayScore: data.todayScore * 100,
            fill: "#E60000"
        }
    ];

    if (error) {
        return <div>Erreur : l'API est indisponible, impossible de charger le composant.</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }

  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart className="score-chart" startAngle={90} endAngle={470} cx="50%" cy="50%" innerRadius="100" outerRadius="130" data={adaptedData}>
            <RadialBar dataKey='newTodayScore' cornerRadius="100%" />
            <text x="30" y="20" textAnchor="middle" dominantBaseline="middle" className="score-text">Score</text>
            <Legend verticalAlign='middle' align="right" content={<Score />} />
        </RadialBarChart>
    </ResponsiveContainer>

  )
}

ScoreChart.propTypes = {
    userId: PropTypes.number
}

export default ScoreChart