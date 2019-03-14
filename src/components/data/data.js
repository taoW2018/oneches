import React, { Component } from 'react';
import PropTypes from 'prop-types' //静态传参判断类型

class Mydata extends Component {
    constructor(props){  //创建这个类的时先创建该方法 this.props要传递过来
        super(props);//作为固定搭配的，super()是执行函数父类的构造方法。
       this.age=this.props.age;     //this.props的值是不能修改的
        this.state={  //控制ui的数据
            agedata:props.initdata,
            homelink:'打开changLink'
        }
    }
    onaddage(){   //注意绑定this
        // this.age +=3;
        // console.log(this.age)
        this.setState({
           agedata:this.state.agedata+3
        })
    }
    handleGreet(){
        this.props.greet(this.state.agedata);
      }
      onchangLink(){
          this.props.changLinke(this.state.homelink)
      }
      change(event){
          console.log(event.target.value)
        this.setState({
            homelink:event.target.value
        })
      }
  render() {
      console.log(this.props)
    return (
    <section className='main'>
        <ul>
            <li>{this.props.name}</li>
            <li>{this.props.tit}</li>
            <li>{this.props.age}</li>
            <li>{this.state.agedata}</li>
            {/* <li>{this.props.user}</li> */}
        </ul>
        <div>
            {/* 将子元素传给子元素 */}
            <button onClick={()=>{this.onaddage()}}>点击触发</button> 
        </div>
        <div className='center'>
            {this.props.children}
        </div>
        <div>
            <label>
                <input type="text" name="测试基于react的双向绑定" defaultValue={this.props.initname}  value ={this.state.initname} onChange={(event)=>{this.change(event)}}/>
            </label>
        </div>
            <button  onClick={this.handleGreet.bind(this)}>点击子组建调用父组件函数</button>
        <ul className='myname'>
            {this.props.user.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
        <button onClick={this.onchangLink.bind(this)}>点击测试组件间的传递</button>
    </section>
    );
  }
}
export default Mydata;
Mydata.propTypes ={
    name:PropTypes.string,
    children:PropTypes.element.isRequired,
    age:PropTypes.number,
    greet:PropTypes.func,
    initname:PropTypes.string
}
// Mydata.PropTypes={
//     name:PropTypes.string,
// };

