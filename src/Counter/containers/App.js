import { connect } from 'react-redux'
import Counter from '../components/Counter'
import {increment, decrement} from '../actions/index';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	return {
		counter: state.counter
	}
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	
	return {
		increment: (...args) => dispatch(increment(...args)),
		decrement: (...args) => dispatch(decrement(...args))
	}
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default VisibleCounter