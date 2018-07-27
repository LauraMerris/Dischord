import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddText from '../components/AddText';
import { addMessage } from '../actions/action_add_message';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { match }) => ({
    placeholder : state.channels[match.params.channel].name,
    user : state.user
});

const mapDispatchToProps = (dispatch, { match }) => ({
    addMessage(text){
        dispatch(addMessage(text.trim(), new Date().toJSON(), match.params.channel))
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddText));