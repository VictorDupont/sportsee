import { PropTypes } from "prop-types";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import AverageSessionsFactory from "../../factories/AverageSessionsFactory";
import "./style.scss";

import useFetch from "../../hooks/useFetch";

const AverageChart = ({ userId }) => {
    const [averageSessionsData, isLoaded, error] = useFetch("API", AverageSessionsFactory, `http://localhost:3000/user/${userId}/average-sessions`, 1000, false);
    
    const TooltipFormated = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="average-tooltip">
                    <p className="intro">{`${payload[0].payload.sessionLength} min`}</p>
                </div>
            );
        }
        return null;
    };
    
    if (error) {
        return <div>Erreur : l'API est indisponible, impossible de charger le composant.</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
            className="average-chart"
            width="258px"
            height="263px"
            data={averageSessionsData.sessions}
            >
                <XAxis dataKey="day" stroke="#FFFFFF" opacity={0.5} tickLine={false} axisLine={false} />
                <YAxis padding={{ top: 70 }} stroke="#FFFFFF" opacity={0.5} tickLine={false} axisLine={false} />
                <Tooltip content={<TooltipFormated />} wrapperStyle={{outline: "none"}} />
                <Legend />
                <text x="32" y="27" fontWeight="500" fontSize={15} color="#FFFFFF" className="title-average">Durée moyenne des sessions</text>
                <Line type="basis" dataKey="sessionLength" stroke="#FFFFFF" dot={false} strokeWidth={2} legendType="none" />
            </LineChart>
    </ResponsiveContainer>
  )
}

AverageChart.propTypes = {
    userId: PropTypes.number
}

export default AverageChart