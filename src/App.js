import React, { Component } from 'react';

import Headers from './components/header/Header'
import Mydata from './components/data/data'
import Event from './components/event/event'
class App extends Component {
  // 执行过程
  // 1.constructor(props)
  //  
  
  constructor(){ //挂载类执行过程 第一步
    super();
    this.state={
      homelink:'homes'
    }
  }
  componentWillMount(){  //挂载前调用  第二步

  }
  onGreat(agedata){
    alert(agedata)
  }
  onchangelink(newname){
    this.setState({
      homelink:newname
    })
  }
  render() {          //第三步执行渲染
    let datas= `传递的数据 `
    let user =['小明','张三']
    return (
      <div className="App">
        <header className="App-header">
          <Headers homeLink={this.state.homelink}></Headers>
        </header>
        <aside className='aside'>
            侧边栏
        </aside>
        <main className='main'>
            <Mydata tit={datas}
             name={'名称'} 
             age={18}
              user={user} 
               initdata={2} 
               greet={this.onGreat}
               changLinke={this.onchangelink.bind(this)}
               initname={this.state.homelink}
               >
            {/* 准备传节点 */}
            <div>
                父元素传的节点 
            </div>
            </Mydata>
            <Event>

            </Event>
        </main>
        <footer className='footer'>
          尾部
        </footer>
      </div>
    );
  }
  componentDidMount(){  //第四步创建DOM完成后可以在这发起请求

  }
  componentWillReceiveProps(){  //在组件接收到一个props的时候调用，pS在render时不会被调用

  }
  shouldComponentUpdate(){ //  返回一个布尔值fasle表示这个组件不被更新，可解决部分性能问题 ，可阻止component更新。在组件收到新的props或者state时被调用。
    //初始化时不被调用，或者使用foreUpdata不调用；
  }
  componentDidUpdate(){ //与 componentDidMount类似，表示这个组建在更新之前调用

  }
  componentWillUpdate(){ //表示组建更新完成后掉用

  }
  componentWillUnmount(){ //组件移出时带调用的方法

  }
}

export default App;
