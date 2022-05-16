import { useEffect, useState } from 'react';
import { MdMale, MdFemale } from 'react-icons/md';

import '../css/statistics.css';

function Statistics(props) {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('M');

  // EAT - Exercise Activity Thermogenesis.
  const [EAT, setEAT] = useState(0);
  // BMR - Basic Metabolic Rate.
  const [BMR, setBMR] = useState(0);
  // TEE - Total Energy Expenditure.
  const [TEE, setTEE] = useState(0);

  useEffect( () => {
    let result = 0;

    for (let key in props.schedule) {
      let item = props.schedule[key];
      if (item['measure'] === 'repetitions') {
        result += (item['amount'] * 3 / 60) * item.MET * 3.5 * weight / 200;
      }
      else
        result += item['amount'] * item.MET * 3.5 * weight / 200;
    }

    setEAT(result);
  }, [props.schedule, weight, height]);

  useEffect( () => {
    let genderFactor = (gender === 'F') ? -161 : 5;
    setBMR(10 * weight + 6.25 * height - 5 * age + genderFactor);
  }, [height, weight, age, gender]);

  useEffect( () => {
    if (height !== 0 && weight !== 0 && age !== 0) {
      setTEE(BMR * (1.25 + (EAT / 1000)) + EAT);
    }
  }, [EAT, BMR]);

  return (
    <div id='statistics'>
      <div className="statistics-input-container">
        <div className="statistics-container-title">Inputs: </div>
        <span>
          <label for='statistics-input-weight'>Weight (kgs) :</label>
          <input id='statistics-input-weight' type='number' onChange={(e) => setWeight(e.target.value)} />
        </span>
        <span>
          <label for='statistics-input-height'>Height (cms) :</label>
          <input id='statistics-input-height' type='number' onChange={(e) => setHeight(e.target.value)} />
        </span>
        <span>
          <label for='statistic-input-age'>Age (years) :</label>
          <input id='statistics-input-age' type='number' onChange={(e) => setAge(e.target.value)} />
        </span>
        <span className='statistics-input-gender-container'>
          <label for='statistics-input-gender'>Gender :</label>
          <span className='statistics-input-gender-icons-container'>
            <i onClick={() => setGender('M') }
              id={gender === 'M' ?'statistics-input-gender-icon-activated' : ''}
              className='statistics-input-gender-icon'><MdMale /></i>
            <i onClick={() => setGender('F') }
              id={gender === 'F' ?'statistics-input-gender-icon-activated' : ''}
              className='statistics-input-gender-icon'><MdFemale /></i>
          </span>
        </span>
      </div>

      <div className='statistics-calorymeter'>
      <div className="statistics-container-title">Calorymeter: </div>
      <span className="statistics-output-EAT">
        <span className='statistics-output-title'> Calory Expenditure from Exercise: </span>
        <span className="statistics-output"> { (EAT > 0) ? Math.round(EAT) + ' calories.' : '--' } </span>
      </span>
      <span className='statistics-output-TEE'>
        <span className='statistics-output-title'> Total Daily Energy Expenditure: </span>
        <span className='statistics-output'> { (TEE > 0) ? Math.round(TEE) + ' calories.' : '--' } </span>
      </span>
      </div>

     { /* TODO: Graph. */ }
    </div>
  )
};

export default Statistics;
