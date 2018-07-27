import React from 'react';
import Card from './Card';

const CardList = ({messages, user, onDeleteClick}) => {
    return messages.map(message => (
        <Card key={message.id} message={message} user={user} onDeleteClick={() => onDeleteClick(message.id)} />
    ))
}

export default CardList;