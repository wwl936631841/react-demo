import React ,{Component} from 'react'
import Logo from '../../components/logo/logo'
import { 
    NavBar , 
    Button , 
    WhiteSpace , 
    WingBlank , 
    Radio , 
    List ,
    InputItem
} from 'antd-mobile'

const ListItem = List.Item

export default class Login extends Component{
    state = {
        userName:'',
        passWord:'',
        passWordConfirm:'',
        type:'dashen'
    }

    handChange = (name,val) =>{
        this.setState({
            [name]:val
        })
    }

    toRegister = () =>{
        console.log(this)
        console.log(this.state)
        this.props.history.push({
            pathname:'/register'
        })
    }

    toLogin = () =>{
        this.props.history.push({
            pathname:'/login'
        })
    }

    render(){
        const {type} = this.state
        return(
            <div>
                <NavBar>boss直聘</NavBar>
                <Logo />
                <WingBlank size="lg">
                    <InputItem onChange={ val =>{this.handChange('userName',val)}}>用户名:</InputItem>
                    <InputItem onChange={ val =>{this.handChange('passWord',val)}}>密 &nbsp;&nbsp; 码:</InputItem>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.login}>登陆</Button>
                    <WhiteSpace/>
                    <Button type="normal" onClick={this.toRegister}>还没有账户</Button>
                </WingBlank>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props);
        console.log(this.props.history.location.params);
    }
}