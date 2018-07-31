import React, { Component } from 'react';
import { fetchData} from './actions/actions'
import { connect } from 'react-redux'

class App extends Component {
  
  componentDidMount() {
    // 发送请求
    // 把这个请求的代码提到action，目的就是通用
    /*this.props.dispatch(function(dispatch){
      axios('https://www.easy-mock.com/mock/5b593e1b0629ac2a8ce31391/news/test')
        .then(({ data }) => {
          dispatch({
            type: 'getData',
            data: data.data
          })
        })
    })*/
    this.props.dispatch(fetchData({a:1})).then(() => {
      console.log('回来了')
    });
  }
  
  render() {
    console.log(this.props)
    return (
      <section className="todoapp">
       使用title: {this.props.title}
       
      </section>
    );
  }
}
function mapStateTopPros(state){
  return {
    title: state.title
  }
}
export default connect(mapStateTopPros)(App);
