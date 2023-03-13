import { PropTypes } from "prop-types";
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from "recharts";
import ActivityFactory from "../../factories/ActivityFactory";
import "./style.scss";

import useFetch from "../../hooks/useFetch";

const ActivityChart = ({ userId }) => {

    const [data, isLoaded, error] = useFetch("API", ActivityFactory, `http://localhost:3000/user/${userId}/activity`, 1000, false);
    
    const TooltipFormated = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="intro">{`Poids : ${payload[0].payload.kilogram}kg`}</p>
                    <p className="intro">{`Calories brûlées : ${payload[0].payload.calorie}kCal`}</p>
                </div>
            );
        }
        return null;
    };
    
    if (error) {
        return <div>Erreur : l'API est indisponible, impossible de charger le composant.</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }

  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart className="activity-chart" margin={{ top: 25 }} width="100%" height="100%" data={data.sessions}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}  />
            <text  x="32" y="27" fontWeight="500" fontSize={15} color="#20253A">Activité quotidienne</text>

            <XAxis dataKey="index" tickLine={false} axisLine={false} />
            <XAxis dataKey="calorie" type="number" tickLine={false} axisLine={false} />
            
            <YAxis dataKey="kilogram" type="number" tickLine={false} orientation="right" axisLine={false} domain={["dataMin - 1", "dataMax + 1"]} />
            <YAxis dataKey="calorie" type="number" yAxisId="calorie" hide />
            <Tooltip content={<TooltipFormated />} wrapperStyle={{ outline: "none" }} />
            <Legend verticalAlign="top" align="right" iconSize={7} iconType="circle" wrapperStyle={{marginTop: "-15px", paddingBottom: "30px"}} />
            <Bar name="Poids (kg)" dataKey="kilogram" barSize={7} radius={[10, 10, 0, 0]} fill="#282D37" />
            <Bar name="Calories brûlées (kCal)" dataKey="calorie" barSize={7} radius={[10, 10, 0, 0]} yAxisId="calorie" fill="#E60000" />
        </BarChart>
    </ResponsiveContainer>

  )
}

ActivityChart.propTypes = {
    userId: PropTypes.number
}

export default ActivityChart