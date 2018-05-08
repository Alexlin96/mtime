import React,{Component} from "react";
import "./index.css";
import axios from 'axios'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
const alert = Modal.alert;
class Register extends Component{	
	render(){
		return(
			<div id='register'>	
				<div className='regist' >
					<section className='box_bg_white' >
						<ul className='regist_list' >
							<li>
								<div className='txtbox' >
									<label>手机号: </label>
									<input type="tel" name="mobile" placeholder="请输入手机号" ref='myphone'  /> 
								</div>
							</li>
							<li>
								<div className='txtbox' >
									<label>验证码: </label>
									<input type="number" name="vcode"  placeholder="请输入验证码"/>
								</div>
							</li>
							<li>
								<div className='txtbox' >
								<label>密&nbsp;&nbsp;&nbsp;&nbsp;码: </label>
								<input type="password" name="password" placeholder="请输入密码" maxLength="20" ref='mypassword' /> 
								</div>
							</li>
						</ul>
					</section>
					<p className='agree'>
						<i id='agree' className='i_check i_check_curr' ></i>
						<label className="c_36">&nbsp;我已阅读并同意</label>
						<a href="#!/help/policy" className="c_green"><span className="c_green">《Mtime时光网服务条款》</span></a>
					</p>
					<a  href="javascript:void(0);" data-selector="submit" className="btn_orange" onClick={this.register.bind(this)} >注册</a>
				</div>
			</div>			
		)
	}
	register(){
		console.log(this.refs.myphone.value);
		var phones = /^1[34578]\d{9}$/;   //手机号正则
		var mimasl = /^[a-zA-Z0-9]{4,10}$/; //密码格式正则
		function erralert(title,message){
			alert(title, message, [
				{ text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
				{ text: 'OK', onPress: () => console.log('ok') },
			  ]);
		}
		if(!this.refs.myphone.value){
			erralert('注册失败','手机号不能为空');
			return;
		}else if(!this.refs.mypassword.value){
			erralert('注册失败','密码不能为空');
			return;
		}else if(!phones.test(this.refs.myphone.value)){
			erralert('注册失败','手机号格式不正确');
			return;
		}else if(!mimasl.test(this.refs.mypassword.value)){
			erralert('注册失败','密码格式不正确');
			return;
		}
		else{
			axios.post('/registerrequest',{
				myPhone:this.refs.myphone.value,
				myPassword:this.refs.mypassword.value
			}).then(res=>{
				console.log(res.data);
				if (res.data.isregister) {
					console.log("注册成功");
					this.props.history.push('/mine/login')
				  } else {
					console.log("注册失败");
					this.props.history.push("/mine/register");
				  }
			})
		}
	}
}
export default Register