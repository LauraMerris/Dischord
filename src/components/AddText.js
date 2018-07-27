import React, { Component } from 'react';

class AddText extends Component{

    constructor(props){
        super(props),
        this.state = {text:""};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let val = this.state.text;
        this.props.addMessage(val);
        this.setState({text : ""});

        // is setState safe to call here or do I risk the state wiping before the new
        // value has been passed?
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="message-box">
                    <input value={this.state.text} placeholder={`#${this.props.placeholder}`} onChange={this.handleTextChange}/>
                    <button type="submit"><i className="fas fa-plus-circle"></i></button>
                </div>
            </form>
        )
    }
    
}

export default AddText;
