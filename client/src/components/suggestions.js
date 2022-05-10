import { useEffect, useState } from 'react';

import formatString from '../lib/formatString';
import '../css/suggestions.css';

function Suggestions(props) {

  const [ suggestions, setSuggestions ] = useState(props.workouts);
  const [ isFiltered, setFiltered ] = useState(false);

  useEffect( () => {
    setSuggestions(props.workouts);
  }, [props.workouts])

  const practices = ['calisthenics', 'strength-training', 'cardio'];

  const addWorkout = (workout) => {
    if (!props.schedule.includes(workout)) {
      props.setSchedule(props.schedule.concat(workout));
    }
  }

  const filterPractice = (practice) => {
    if (isFiltered === practice) {
      setSuggestions(props.workouts);
      setFiltered(false);
    }
    else {
      setSuggestions(props.workouts.filter( x => x.practice === practice));
      setFiltered(practice);
    }
  }

  return (
    <div id='suggestions'>
      <div className='suggestions-title'>Suggestions</div>

      <div className="suggestions-practices">
      { 
        practices.map( (practice, index) => 
          <button className='suggestions-practices-btn' onClick={ () => filterPractice(practice) } key={ index }>
            { formatString(practice) }
          </button> )
      }
      </div>

      <div className="suggestions-menu">
      { props.isWorkoutsLoaded && 
        suggestions.map( item => 
          <span className='suggestions-menu-cmp' onClick={ () => addWorkout(item) } key={ item.id } >
            { formatString(item.title) }
          </span> )
      }
      </div>
    </div>
  )
}

export default Suggestions;
