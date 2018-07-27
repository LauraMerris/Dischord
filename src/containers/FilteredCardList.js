import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { deleteMessage } from '../actions/action_delete_message';
import { filterMessagesByChannel } from '../reducers/index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, {match}) => ({
    messages : filterMessagesByChannel(state, match.params.channel),
    user : state.user
});

/*
NOTE: using mapDispatchToProps shorthand in connect
const mapDispatchToProps = (dispatch) => ({
    onDeleteClick(id){
        dispatch(deleteMessage(id))
    } 
});
*/
export default withRouter(connect(mapStateToProps, {onDeleteClick : deleteMessage})(CardList));