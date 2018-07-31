import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddText from '../components/AddText';
import { addMessage } from '../actions/action_add_message';
import { withRouter } from 'react-router-dom';
import { fetchChannels } from '../actions/action_fetch_data';
import { getChannels } from '../reducers/index';

class AddMessage extends Component{
    componentDidMount(){
        console.log('add message current state:');
        console.log(this.props.channels);
        if (!this.props.channels.length){
            console.log('No addmessage found - fetching channels');
            this.props.fetchChannels();
        } else{
            console.log('add message is using the state');
        }
    }

    render(){
        return <AddText {...this.props} />
    }
}

const mapStateToProps = (state, { match }) => {
    let currentChannel = state.channels[match.params.channel];
    return {
        placeholder: currentChannel ? currentChannel.name : "",
        user : state.user,
        channels : getChannels(state)
    }
};

const mapDispatchToProps = (dispatch, { match }) => ({
    fetchChannels,
    addMessage(text){
        dispatch(addMessage(text.trim(), new Date().toJSON(), match.params.channel))
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddMessage));