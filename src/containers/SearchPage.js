import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions/project';
import SearchForm from '../components/SearchForm/SearchForm';

export function mapStateToProps(state) {
  return { ...state.project };
}

export function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
