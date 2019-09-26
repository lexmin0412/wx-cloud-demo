import React from 'react';
import logo from './logo.svg';
import './App.css';

var tcb = require('tcb-js-sdk')
tcb.init({
    env: 'cellerchan-cloud-163fe7'  //环境ID
})
console.log('初始化完成');

window.app = tcb


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  debug = (str, debugObj) => {
    console.log(str, debugObj);
  }

  loginAuth = () => {
    this.debug('loginAuth')
    var auth = window.app.auth()
    auth.weixinAuthProvider({
        appid: 'wx3d7325a4178a5125',  //微信应用appid
        scope: 'snsapi_userinfo'     // snsapi_type 为网页授权类型，可选值为 snsapi_base（公众平台，只获取用户的 openid）、snsapi_userinfo（公众平台，获取用户的基本信息）和 snsapi_login（开放平台网页授权）。
    }).signIn().then(() => {
      // 登录成功
    }).catch(() => {
      // 登录失败
    })
  }
  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <button onClick={this.loginAuth.bind(this)}>登录授权</button>
      </div>
    );
  }
}

export default App;
