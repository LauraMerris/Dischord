import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { deleteMessage } from '../actions/action_delete_message';
import { fetchMessages } from '../actions/action_fetch_data';
import { filterMessagesByChannel } from '../reducers/index';
import { withRouter } from 'react-router-dom';
import { getIsFetching, getErrorMessage } from '../reducers/index';
import FetchError  from '../components/FetchError';

class FilteredCardList extends Component{
    componentDidMount(){
        this.getAllMessages(this.props.channel);
    }

    componentDidUpdate(prevProps){
        if (this.props.channel !== prevProps.channel){
            //we would fetch messages here if we wanted additional data when we changed channel
            this.getAllMessages(this.props.channel);
        }
    }

    getAllMessages(channel){
        // this calls action creator fetchmessages which calls the api and resolves to the receive messages action
        this.props.fetchMessages(channel).then(console.log('fetched the messages'))
    }

    render(){
        if (this.props.isFetching && !this.props.messages.length){
            // need a way to determine isFetching here
            return <div>Loading ...</div>;
        }
        console.log('not fetching - carry on');
        console.log(this.props.errorMessage);
        if (this.props.errorMessage && !this.props.messages.length){
            return (
                <FetchError message={this.props.errorMessage} />
            )
        }
        return <CardList {...this.props} />;
    }
}

const mapStateToProps = (state, {match}) => {
    const filter = match.params.channel;    
    return {
        messages : filterMessagesByChannel(state, filter),
        errorMessage : getErrorMessage(state, filter),
        user : state.user,
        channel : filter,
        isFetching : getIsFetching(state)
    }
};

/*

// mapDispatchToProps is a function that takes store.dispatch as an argument
// it returns an object with properties that will be available on this.props
// the properties are functions that - when called - dispatch an action
// the action to be dispatched is determined by calling the action creator function

/* 
// long form to show what is happening

function mapDispatchToProps(dispatch){
    return {
        onDeleteClick : function(id){
            dispatch(deleteMessage(id));
        }
    }
}
*/

/*
// ES6 syntax and writing the prop object method 'onDeleteClick' as a function

const mapDispatchToProps = (dispatch) => ({
    onDeleteClick(id){
        dispatch(deleteMessage(id))
    } 
});
*/

// when the argument of the function and the action creator are the same,
// we can move the whole function into connect() as shorthand 



export default withRouter(connect(mapStateToProps, {onDeleteClick : deleteMessage, fetchMessages})(FilteredCardList));
