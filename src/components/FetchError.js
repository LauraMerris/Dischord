import React from 'react';

const FetchError = ({message}) => (
    <div>
        <p>Could not fetch messages. {message}</p>
    </div>
);

export default FetchError;