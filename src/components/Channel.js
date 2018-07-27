import React from 'react';
import { Link } from 'react-router-dom';

const Channel = ({id, name, active}) => (
      
    <Link to={id} className="channel" data-current={active}>#{name}</Link>      
)

export default Channel;

//<a data-current={active} className="channel" data-channel={id} href="#" onClick={onClick}>#{name}</a> 