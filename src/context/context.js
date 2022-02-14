import React from "react";

const Context = React.createContext({
    allEvents:[],
    view:'',
    date:new Date(),
    conversation:[],
    addEventsToAll: (event) => {},
    onNavigateView: () => {},
    onNavigateDate: () => {},
    conversationHandler: () => {},
    addMessage:() => {},

});

export default Context