// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cards from '../components/Cards';
// import Actions from '../actions/project';

export function mapStateToProps(state) {
  return { ...state.project };
}

export default connect(mapStateToProps)(Cards);
