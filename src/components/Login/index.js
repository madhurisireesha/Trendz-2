import { Component } from "react";
import Cookies from 'js-cookie'
import './index.css'
class Login extends Component{
    state={
        username:'',
        password:'',
        showerror:false,
        errormsg:'',
    }
    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    renderUsername=()=>{
        const{username}=this.state
        return(
            <div className="usernamecontainer">
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" onChange={this.onChangeUsername} value={username}/>
            </div>
        )
    }
    renderPassword=()=>{
        const{password}=this.state
        return(
            <div className="passwordcontainer">
                <label htmlFor="username">Password</label><br/>
                <input type="text" id="username" onChange={this.onChangePassword} value={password}/>
            </div>
        )
    }
    submitForm=async(event)=>{
        event.preventDefault()
        const{username,password}=this.state
        const userDetails={username,password}
        const url="https://apis.ccbp.in/login"
        const options={
            method:'POST',
            body:JSON.stringify(userDetails)
        }
        const response=await fetch(url,options)
        const data=await response.json()
        
        if(response.ok===true)
        {
            this.onSubmitSuccess(data.jwt_token)
                
        }
        else{
            this.onSubmitFail(data.error_msg)
        }
    }
    onSubmitSuccess=(jwtToken)=>{
        
        Cookies.set('token',jwtToken,{expires:30})
        const{history}=this.props
        history.replace('/')
        
    }
    onSubmitFail=(errormsg)=>{
        this.setState({showerror:true,errormsg:errormsg})
    }
    render(){
        const{errormsg,showerror}=this.state
        return(
            <div className="logincontainer">
                <div className="login1">
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="loginimg" className="logimg"/>
                </div>
                <div className="login2">
                <form className="formcontainer" onSubmit={this.submitForm}>
                    <div>{this.renderUsername()}</div>
                    <div>{this.renderPassword()}</div>
                    {showerror&&<p>*{errormsg}</p>}
                    <button type="submit" className="loginbut">Login</button>

                </form>
                </div>
            </div>
        )
    }
}
export default Login