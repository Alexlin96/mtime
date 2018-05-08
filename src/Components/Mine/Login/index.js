import React,{Component} from "react";
import "./index.css";
import axios from 'axios'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
const alert = Modal.alert;

class Login extends Component{	
	render(){
		return(
				<div id='login'>
					<div className='userlogin' >
						<ul className='loginbox' >
							<li>
								<div className='table_v_c'>
									<i className='iconfont icon-denglu' ></i>
									<input name="loginname" type="text" className="td" placeholder="登录邮箱/手机号码" ref='myphone' />
									<a data-selector="clearloginname" className="i_search_clear" id="toggleClearBtn" ></a>
								</div>	
							</li>
							<li>
								<div className='table_v_c' >
									<i className='iconfont icon-icon-'></i>
									<input name="password" type="password" className="td" placeholder="密码" ref='mypassword' />
									<a className="i_showpass" href="javascript:void(0);" data-selector="tooglePassword"><span>显示密码</span></a>
								</div>
							</li>
						</ul>
						<a href="javascript:void(0);" data-selector="submit" className="m_btn_orange m_btn_blue " onClick={this.login.bind(this)} ><span>登录</span></a>
						<div className="loing table"><p className="td1" onClick={()=>{
							this.props.history.push('/mine/register')
						}} ><a >免费注册</a></p><p className="td"><a href="##">找回密码</a></p></div>
						<dl className="otherlogin"><dt><span>使用第三方登录</span></dt><dd><ul className="table_vh_c"><li><a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo" title="新浪" className="o_sina"></a></li><li><a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=qq" title="QQ" className="o_qq"></a></li></ul></dd></dl>
					</div>							
				</div>					
		)
		
	}
	login(){
		var myPhone = this.refs.myphone.value;
		var myPassword = this.refs.mypassword.value;
		function erralert(title,message){
			alert(title, message, [
				{ text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
				{ text: 'OK', onPress: () => console.log('ok') },
			  ]);
		}
		if(!myPhone){
			erralert('登录失败','请输入手机号');
			return;
		}else if(!myPassword){
			erralert('登录失败','请输入密码');
			return;
		}else{
			console.log('验证成功');
			axios.post('/login',{
				myPhone,
				myPassword
			}).then(res=>{
				if (res.data.islogin==1) {
					console.log("登录成功");
					 this.props.history.push('/home')
				 }else{
					console.log("登录失败");
					erralert('登录失败','用户不存在或者密码错误');				 					 
				 }
			})
		}
		
		
	}

}




export default Login