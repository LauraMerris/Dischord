import React from 'react';
import logo from '../logo.svg';

const options = {  
    weekday: "short", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
}; 

const Card = ({message, user, onDeleteClick}) => {

    // show placeholder image if user has no avatar
    const image = !message.user.avatar ? <i className="fas fa-user"></i> : <img alt="" src={logo} />;
    const messageBelongsToCurrentUser = (message.user.id === user.id);

    return (
        <div className="card">

            {/* shows the delete icon if the message belongs to the current user */}
            { messageBelongsToCurrentUser &&
            <a href="#" className="icon-delete has-tooltip tooltip-bottom" onClick={onDeleteClick}><i className="fas fa-minus-circle"></i>              
                <span className="tooltip">delete post</span>
            </a>
            }
            
            <span className="avatar">{image}</span>
            <span className="user-name">{message.user.name}</span>
            <span className="message-date">{new Date(message.created).toLocaleTimeString('en-us', options)}</span>
            <p className="message">{message.message}</p>
        </div>
    )

}

export default Card;