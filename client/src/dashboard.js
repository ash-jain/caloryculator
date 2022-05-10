import { React, useState, useEffect } from 'react';

import Statistics from './components/statistics.js';
import Schedule from './components/schedule.js';
import Suggestions from './components/suggestions.js';
import './css/dashboard.css';

function Dashboard() {

  const [workouts, setWorkouts] = useState({});
  const [isWorkoutsLoaded, setWorkoutLoaded] = useState(false);
  const [errorLoadingWorkouts, setErrorLoadingWorkouts] = useState(false);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/workouts/`)
    .then( response => response.json() )
    .then( responseJson => {
      setWorkouts(responseJson);
    })
    .catch( error => {
      console.log("Error fetching data: ", error);
      setErrorLoadingWorkouts(error);
    })
    .finally(() => {
      setWorkoutLoaded(true);
    })
  }, []);

  return (
    <div className='dashboard'>
      <Statistics schedule={schedule} />
      <Schedule schedule={schedule} setSchedule={setSchedule} />
      <Suggestions schedule={schedule} setSchedule={setSchedule} workouts={workouts} isWorkoutsLoaded={isWorkoutsLoaded} errorLoadingWorkouts={errorLoadingWorkouts}/>
  </div>
  );
}

export default Dashboard;
