import { useEffect, useState } from 'react';

import '../css/statistics.css';

function Statistics(props) {

  const [calories, setCalories] = useState(0);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect( () => {
    let result = 0;

    for (let item of props.schedule) {
      if (item['default-amount'].split(' ')[1] === 'reps') {
        result += (item['amount'] * 5 / 60) * item.MET * 3.5 * weight / 200;
      }
      else
        result += item['amount'] * 60 * item.MET * 3.5 * weight / 200;
    }

    setCalories(result);
  }, [props.schedule, weight, height])

  return (
    <div id='statistics'>
      <div className="statistics-title">Statistics</div>

      <div className='statistics-main'>
        { calories }
      </div>

      <div className="statistics-input">
        <span className='statistics-input-weight' >
          <span>Enter Your Weight (in Kgs)</span>
          <input type='number' onChange={(e) => setWeight(e.target.value)} />
        </span>
        <span className='statistics-input-height'>
          <span>Your Height (in cms)</span>
          <input type='number' onChange={(e) => setHeight(e.target.value)} />
        </span>
      </div>
    </div>
  )
};

export default Statistics;
