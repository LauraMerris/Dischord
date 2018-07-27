import { connect } from 'react-redux';
import { selectChannel } from '../actions/action_select_channel';
import Channels from '../components/Channels';
import { getChannels } from '../reducers/index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { match }) => ({
    channels : getChannels(state),
    currentChannel : match.params.channel
});

export default withRouter(connect(mapStateToProps)(Channels));

