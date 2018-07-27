import React from 'react';
import Channel from './Channel';

const Channels = ({channels, currentChannel}) => {
        const allChannels = channels.map(
            channel => (
                <Channel key={channel.id} active={currentChannel === channel.id} {...channel} />
            )
        );

        return (
            <section className="channels">
                <h1>Channels</h1>
                {allChannels}
            </section>
        );
}

export default Channels