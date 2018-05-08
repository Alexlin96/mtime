import React,{Component} from "react";
import "./index.css";

class Mine extends Component{

	render(){
		return(
			<div id='mine'>
				{
					//登录
				}
				{/* <div className='userlogin' >
					<ul className='loginbox' >
						<li>
							<div className='table_v_c'>
								<i className='iconfont icon-denglu' ></i>
								<input name="loginname" type="text" className="td" placeholder="登录邮箱/手机号码"  />
								<a data-selector="clearloginname" className="i_search_clear" id="toggleClearBtn" ></a>
							</div>	
						</li>
						<li>
							<div className='table_v_c' >
								<i className='iconfont icon-icon-'></i>
								<input name="password" type="password" className="td" placeholder="密码" />
								<a className="i_showpass" href="javascript:void(0);" data-selector="tooglePassword"><span>显示密码</span></a>
							</div>
						</li>
					</ul>
					<a href="javascript:void(0);" data-selector="submit" className="m_btn_orange m_btn_blue"><span>登录</span></a>
					<div className="loing table"><p className="td1"><a href="javascript:void(0);" data-selector="signup">免费注册</a></p><p className="td"><a href="#!/member/retrievepassword">找回密码</a></p></div>
					<dl className="otherlogin"><dt><span>使用第三方登录</span></dt><dd><ul className="table_vh_c"><li><a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo" title="新浪" className="o_sina"></a></li><li><a href="https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=qq" title="QQ" className="o_qq"></a></li></ul></dd></dl>
				</div> */}
				
				{
					//注册
				}
				<div className='regist' >
					<section className='box_bg_white' >
						<ul className='regist_list' >
							<li>
								<div className='txtbox' >
									<label>手机号: </label>
									<input type="tel" name="mobile" placeholder="请输入手机号"/> 
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
								<input type="password" name="password" placeholder="请输入密码" maxLength="20" /> 
								</div>
							</li>
						</ul>
					</section>
					<p className='agree'>
						<i id='agree' className='i_check i_check_curr' ></i>
						<label className="c_36">&nbsp;我已阅读并同意</label>
						<a href="#!/help/policy" className="c_green"><span className="c_green">《Mtime时光网服务条款》</span></a>
					</p>
					<a  href="javascript:void(0);" data-selector="submit" className="btn_orange">注册</a>
				</div>
			</div>
		)
	}
}

export default Mine