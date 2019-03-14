import React, { Component } from 'react';


// 无状态组件函数式组建
class Headers extends Component {
  render() {
    return (
     <nav className='nav'>
         <ul>
             <li><a href="#">首页</a></li>
             <li><a href="#">页面2</a></li>
             <li><a href="#">页面3</a></li>
             <li><a href="#">{this.props. homeLink}</a></li>

         </ul>
     </nav>
    );
  }
}

export default Headers;
