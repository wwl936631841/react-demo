import React ,{ Component } from 'react'
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

export default class register extends Component{
    
    // handClick = () =>{
    //     this.props.history.push({
    //         pathname:'/login',
    //         params:{
    //             id:3
    //         }
    //     })
    // }

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
                    <InputItem onChange={ val =>{this.handChange('passWordConfirm',val)}}>确认密码:</InputItem>
                    <ListItem>
                        <span>用户类型:</span>
                        &nbsp;&nbsp;  &nbsp;&nbsp; 
                        <Radio checked={type==='dashen'} onChange={ () =>this.handChange('type','dashen')}>大神</Radio>
                        &nbsp;&nbsp;  &nbsp;&nbsp; 
                        <Radio checked={type==='boss'} onChange={ () =>this.handChange('type','boss')}>boss</Radio>
                    </ListItem>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.toRegister}>注册</Button>
                    <WhiteSpace/>
                    <Button type="normal" onClick={this.toLogin}>已有账户</Button>
                </WingBlank>
            </div>
        )
    }
}