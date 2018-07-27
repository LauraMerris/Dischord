const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// simulates REST API calls

export const getMessages = () => (
  delay(500).then(() => {
    return fakeDatabase.messages
  })
);

export const getChannels = () => {
  delay(500).then(() => {
    return fakeDatabase.channels
  })
};

export const getUsers = () => {
  delay(500).then(() => {
    return fakeDatabase.channels
  })
}

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
    "1" : {
      id: "1",
      name: "gamedev"}, 
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

export function getInitialChannels(){
  return {
    "1" : {
      id: "1",
      name: "gamedev"}, 
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