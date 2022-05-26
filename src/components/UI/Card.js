import React from 'react';

import classes from './Card.module.css';

const Card = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;

/// 8 - props.children : Provides content which has passed between the openeing and closing tags of the card component
/// 7 - Apply 2 CSS classes, one coming from card module CSS file and one coming from outside, from other props.
