import classes from './Input.module.css';

const Input = props => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

/// {...props.input} : All key vaule pair in the input object are added to input as props
