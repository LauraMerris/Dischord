import { connect } from 'react-redux';
import AccountBar from '../components/AccountBar';

const mapStateToProps = (state) =>({
    user : state.user
});

export default connect(mapStateToProps)(AccountBar);