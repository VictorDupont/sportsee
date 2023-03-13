import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import ActivityChart from '../../components/ActivityChart'
import ScoreChart from '../../components/ScoreChart'
import SpecCard from '../../components/SpecCard'
import UserFactory from '../../factories/UserFactory'

import useFetch from '../../hooks/useFetch'
import './style.scss'
import AverageChart from '../../components/AverageChart'
import RadarChart from '../../components/RadarChart'

const Home = () => {

  let { id } = useParams();
  id = Number(id);
  const [userData, isLoaded] = useFetch("API", UserFactory, `/data/mocked/user.json`, 1000, false);
  let specCardValue = userData.length === 0 ? "[Erreur] " : userData.keyData;

  function numberWithCommas(x) {
    if(x === undefined) return ("[Erreur] ");
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

    if(isLoaded) return (
    <>
      <Header />

    <main>
        <div className="presentation">
          <h1>Bonjour <span className="redName">{userData?.userInfos?.firstName || specCardValue}</span></h1>
          <p className="congratsText">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        
        <div className="container-dashboard">
          <div className="container-charts">
            <div className="container-big-chart">
                  <ActivityChart userId={userData?.id} />
            </div>
            
            <div className="container-small-charts">
              <div className="container-small-chart">
                <AverageChart userId={userData?.id} />
              </div>
              <div className="container-small-chart">
                <RadarChart userId={userData?.id} />
              </div>
              <div className="container-small-chart">
                  <ScoreChart userId={userData?.id} />
              </div>
            </div>
         </div>
        <div className="container-cards">
          <SpecCard icon="apple" title="Calories" value={numberWithCommas(userData?.keyData?.calorieCount) || specCardValue} unit="kCal" />
          <SpecCard icon="cheeseburger" title="Protéines" value={numberWithCommas(userData?.keyData?.proteinCount) || specCardValue} unit="g" />
          <SpecCard icon="chicken" title="Glucides" value={numberWithCommas(userData?.keyData?.carbohydrateCount) || specCardValue} unit="g" />
          <SpecCard icon="energy" title="Lipides" value={numberWithCommas(userData?.keyData?.lipidCount) || specCardValue} unit="g" />
        </div>
      </div>
    </main>

    <Footer />
    </>
  )
}

export default Home