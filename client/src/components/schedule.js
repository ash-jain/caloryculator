import { useState } from 'react';
import { MdDeleteOutline as BinIcon, MdRemoveCircleOutline as MinusIcon, MdOutlineAddCircleOutline as PlusIcon } from 'react-icons/md';

import formatString from '../lib/formatString';
import '../css/schedule.css';

function Schedule(props) {

  const ScheduleItem = (props) => {
    let item = props.item;

    let reps = item['default-amount'].split(' ');
    let [amount, setAmount] = useState(reps[0]);
    item['amount'] = amount;
    item['setAmount'] = setAmount;

    const increment = () => { item.setAmount(++amount); }
    const decrement = () => { (item.amount > 1) ? item.setAmount(--amount) : removeScheduleItem(item._id); }

    return <div className='schedule-list-item' key={item._id}>
            <span className='schedule-list-title'>{ formatString(item.title) }</span>
            <span className='schedule-list-quantity'>
              <i onClick={ () => decrement() }><MinusIcon /></i>
              <span className='amount'>{ amount } { reps[1] }</span>
              <i onClick={ () => increment() }><PlusIcon /></i>
            </span>
            <i onClick={ () => removeScheduleItem(item._id) }><BinIcon /></i>
          </div>
  }

  const removeScheduleItem = (id) => {
    props.setSchedule(props.schedule.filter(item => item._id !== id)); 
  }

  return (
    <div className='schedule'>
      <div className="schedule-title">Your Routine</div>
      <div className="schedule-list">
        { 
          props.schedule &&
          props.schedule.map( item => <ScheduleItem item={item} /> )
        }
      </div>
    </div>
  )
}

export default Schedule;
