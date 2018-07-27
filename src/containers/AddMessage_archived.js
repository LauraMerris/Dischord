import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/action_add_message';

const AddMessage = ({dispatch}) => {

        let input;
        
        return (
            <form 
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    let obj = {
                        id:1,
                        user: {
                          id:'1', 
                          avatar:'foo', 
                          name:'Laura'
                        }, 
                        message:input.value.trim(), 
                        created: (new Date().toJSON()),
                        channel:"gamedev"
                    }
                    dispatch(addMessage(obj))
                    input.value = ''
                }}
            >
                <div className="message-box">
                    <input
                        ref={node => {
                            input = node
                        }}
                    />
                    <button type="submit"><i className="fas fa-plus-circle"></i></button>
                </div>
            </form>
        );

}

export default connect()(AddMessage);