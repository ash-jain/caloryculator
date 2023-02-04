import { MdDeleteOutline as BinIcon, MdRemoveCircleOutline as MinusIcon, MdOutlineAddCircleOutline as PlusIcon } from 'react-icons/md';

import formatString from '../lib/formatString';
import '../css/schedule.css';

function Schedule(props) {

  const ScheduleItem = (props) => {
    let item = props.item;

    const increment = () => {
      let amount = props.schedule[item._id].amount + 1;
      props.setSchedule({...props.schedule, [item._id]: { ...item, amount}});
    }
    const decrement = () => {
      if (item.amount > 1) {
        let amount = props.schedule[item._id].amount - 1;
        props.setSchedule({...props.schedule, [item._id]: { ...item, amount}});
        }
      else
        removeScheduleItem(item._id); 
    }

    return <div className='schedule-list-item' key={item._id}>
            <span className='schedule-list-title'>{ formatString(item.title) }</span>
            <span className='schedule-list-item-quantity'>
              <i onClick={ () => decrement() }><MinusIcon /></i>
              <span className='amount'>{ item.amount } { (item.measure === 'duration') ? 'mins' : 'reps' }</span>
              <i onClick={ () => increment() }><PlusIcon /></i>
            </span>
            <i onClick={ () => removeScheduleItem(item._id) }><BinIcon /></i>
          </div>
  }

  const removeScheduleItem = (id) => {
    let {[id]: _, ...newState} = props.schedule;
    props.setSchedule(newState);
  }

  return (
    <div className='schedule'>
      <div className="schedule-title">Your Routine</div>

      <div className="schedule-list">
        {
          props.schedule &&
          Object.keys(props.schedule).map( key =>
            <ScheduleItem item={props.schedule[key]} schedule={props.schedule} setSchedule={props.setSchedule} /> )
        }
      </div>
    </div>
  )
}

export default Schedule;
