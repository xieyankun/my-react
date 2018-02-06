import React from 'react';

// class Square extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       // <button className="square" onClick={() => this.setState({value: 'X'})}>
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

// 函数式组件
export default props =>  (
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>
)