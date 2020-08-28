import React, { Component } from 'react'
import './App.css'

 class Forms extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChanges = this.handleChanges.bind(this);
    }
    
    handleChanges(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='App-header'>
            <div className='product-main-bg'>
               <form>
                   <input placeholder='Username' name='firstName' type='text' onChange={this.handleChanges}/>
                   <input placeholder='Password' name='lastName' type='text' onChange={this.handleChanges}/>
                   <input type='button' value='Login' className='signup-btn' />
               </form>
            </div>
          </div>
        )
    }
}

export default Forms
