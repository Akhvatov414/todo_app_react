import React, { useState } from 'react';
//import PropTypes from 'prop-types';

const NewTaskForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const resetForm = () => {
    setDescription('');
    setMinutes('');
    setSeconds('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(description, minutes, seconds);

    resetForm();
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          required
          type="number"
          min={0}
          max={1000}
          step={1}
          onChange={(e) => {
            setMinutes(e.target.value);
          }}
          value={minutes}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          required
          type="number"
          min={0}
          max={59}
          step={1}
          onChange={(e) => {
            setSeconds(e.target.value);
          }}
          value={seconds}
        />
        <button type="submit" style={{ display: 'none' }}>
          Send
        </button>
      </form>
    </header>
  );
};

export default NewTaskForm;

// export default class newTaskForm extends Component {
//   state = {
//     description: '',
//     minValue: '',
//     secValue: '',
//   };

//   static defaultProps = {
//     onAdd: () => {
//       console.log('item added');
//     },
//   };

//   static propTypes = {
//     onAdd: PropTypes.func,
//   };

//   onChangeHandler = (property, e) => {
//     this.setState({
//       [property]: e.target.value,
//     });
//   };

//   resetForm = () => {
//     this.setState({
//       description: '',
//       minValue: '',
//       secValue: '',
//     });
//   };

//   onSubmit = (e) => {
//     const { description, minValue, secValue } = this.state;
//     e.preventDefault();
//     this.props.onAdd(description, minValue, secValue);

//     this.resetForm();
//   };

//   render() {
//     return (
//       <header className="header">
//         <h1>todos</h1>
//         <form onSubmit={this.onSubmit} className="new-todo-form">
//           <input
//             className="new-todo"
//             placeholder="Task"
//             onChange={(e) => {
//               this.onChangeHandler('description', e);
//             }}
//             value={this.state.description}
//             autoFocus
//           />
//           <input
//             className="new-todo-form__timer"
//             placeholder="Min"
//             required
//             type="number"
//             min={0}
//             max={1000}
//             step={1}
//             onChange={(e) => {
//               this.onChangeHandler('minValue', e);
//             }}
//             value={this.state.minValue}
//           />
//           <input
//             className="new-todo-form__timer"
//             placeholder="Sec"
//             required
//             type="number"
//             min={0}
//             max={59}
//             step={1}
//             onChange={(e) => {
//               this.onChangeHandler('secValue', e);
//             }}
//             value={this.state.secValue}
//           />
//           <button type="submit" style={{ display: 'none' }}>
//             Send
//           </button>
//         </form>
//       </header>
//     );
//   }
// }
