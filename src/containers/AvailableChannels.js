import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channels from '../components/Channels';
import { getChannels } from '../reducers/index';
import { withRouter } from 'react-router-dom';
import { fetchChannels } from '../actions/action_fetch_data';

class AvailableChannels extends Component{
    componentDidMount(){
        if (this.props.channels.length === 0){
            this.props.fetchChannels();
        }
    }

    render(){
        return <Channels {...this.props} />
    }
}

const mapStateToProps = (state, { match }) => ({
    channels : getChannels(state),
    currentChannel : match.params.channel
});


export default withRouter(connect(mapStateToProps, {fetchChannels})(AvailableChannels));

