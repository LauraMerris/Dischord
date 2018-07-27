export const addMessage = (message, date, channel) => {

     // dummy object to test
            // I want to call getNextMessageID(this.state)
            // and use 'state.user' - this is constant so shouldn't be in a reducer anyway?
            // want to use 'state.currentChannel' - I could pass this from the component
            // but I want the component to be reusable and not know about the state shape
            

            // get next or random ID
            /*
            export function getNextMessageID({messages}){
                let largest = Object.keys(messages).reduce((prev, current) => parseInt(prev) > parseInt(current) ? prev : current);
                return (parseInt(largest) + 1).toString;
            }
            */

            // make JSON object
            // merge with message, date props
            // dispatch action

            let obj = {
                id: "4",
                user: "1", 
                message: message, 
                created: date,
                channel:channel
            }

    return {
        type: 'ADD_MESSAGE',
        payload: obj
    }
};