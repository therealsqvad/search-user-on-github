import { connect } from 'react-redux';
import Cards from '../components/Cards';

export function mapStateToProps(state) {
  return { ...state.project };
}

export default connect(mapStateToProps)(Cards);
