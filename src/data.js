const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// simulates REST API calls

export const addMessage = (message, channel) => (
  delay(500).then(() => {
    let date = new Date().toJSON();
    
    return {
        id: "4",
        user: "1", 
        message: message, 
        created: date,
        channel:channel
    }
  })
);

export const getChannelsData = () => (
  delay(500).then(() => {
    return fakeDatabase.channels
  })
);

export const getMessages = (channel) => (
  delay(500).then(() => {
    if (Math.random() > 0.5){
      throw new Error("OMG an error - panic");
    }
    const allMessages = fakeDatabase.messages;

    // getarray of all message objects
    // fiter to get array of ids for this channel
    const arrMessages = Object.keys(allMessages).map(id => allMessages[id]);
    const allowedIDs = arrMessages.filter(item => item.channel === channel).map(item => item.id);
    
    // get all keys
    // filter to only keep the keys that are in the allowedIDs array
    // reduce to an object that only includes the allowed properties
    const filtered = Object.keys(allMessages)
    .filter(key => allowedIDs.includes(key))
    .reduce((obj, key) => {
      obj[key] = allMessages[key];
      return obj;
    }, {});

    return filtered;
  })
);

export const getUsers = () => (
  delay(500).then(() => {
    return fakeDatabase.users
  })
);

const testdate = new Date('August 19, 1975 23:15:30 UTC').toJSON();

const fakeDatabase = {
  messages : {
    "1": {
      id:"1",
      user:"1", 
      message:"this is my message", 
      created: testdate,
      channel:"1"
    },
    "2" : {
      id:"2",
      user:"2", 
      message:"my message is also here", 
      created: testdate,
      channel:"1"
    },
    "3" : { 
      id:"3",
      user:"3",
      message:"I have nothing to say", 
      created: testdate,
      channel:"2"
    }
  },
  channels : {
    "1": {
      id: "1",
      name: "gamedev"
    }, 
    "2": {
      id: "2",
      name: "art"
    }, 
    "3": {
      id: "3",
      name: "streaming"
    },
    "4": {
      id: "4",
      name: "food"
    }
  },
  users : { 
    "1" : {
        id:"1", 
        avatar:"foo", 
        name:"Laura"
    },
    "2" : {
      id:"2", 
      avatar:"", 
      name: "Amy"
    },
    "3" : {
      id:"3", 
      avatar:"", 
      name:"Hollie", 
    }
  }
}

// using these for the initial population - they will be removed
    
export function getUser(){
  return {
      id:'1',
      avatar:'foo',
      name:'Laura'
  }
}

/*
export function getInitialChannels(){
  return {
    "1" : {
      id: "1",
      name: "gamedev"
    }, 
    "2" : {
      id: "2",
      name: "art"
    }, 
    "3": {
      id: "3",
      name: "streaming"
    },
    "4": {
      id: "4",
      name: "food"
    }
  }
}
*/

/*
export function getInitialMessages(){
  return {
    "1": {
      id:"1",
      user:"1", 
      message:"this is my message", 
      created: testdate,
      channel:"1"
    },
    "2" : {
      id:"2",
      user:"2", 
      message:"my message is also here", 
      created: testdate,
      channel:"1"
    },
    "3" : { 
      id:"3",
      user:"3",
      message:"I have nothing to say", 
      created: testdate,
      channel:"2"
    }
  }
}
*/

export function getInitialUsers(){
  return { 
    "1" : {
        id:"1", 
        avatar:"foo", 
        name:"Laura"
    },
    "2" : {
      id:"2", 
      avatar:"", 
      name: "Amy"
    },
    "3" : {
      id:"3", 
      avatar:"", 
      name:"Hollie", 
    }
  }
}

