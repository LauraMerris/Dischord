import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddText from '../components/AddText';
import { addMessage } from '../actions/action_add_message';
import { withRouter } from 'react-router-dom';
import { fetchChannels } from '../actions/action_fetch_data';
import { getChannels } from '../reducers';

class AddMessage extends Component{
    componentDidMount(){
        console.log(this.props.placeholder);
        if (this.props.placeholder === "foo"){
            console.log('no placeholder available - fetching channels');
            //this.props.fetchChannels();
        }
    }

    render(){
        return <AddText {...this.props} />
    }
}

const mapStateToProps = (state, { match }) => {
    let currentChannel = state.channels[match.params.channel];
    return {
        placeholder: currentChannel ? currentChannel.name : "foo",
        user : state.user
    }
};

const mapDispatchToProps = (dispatch, { match }) => ({
    fetchChannels,
    addMessage(text){
        dispatch(addMessage(text.trim(), new Date().toJSON(), match.params.channel))
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddMessage));