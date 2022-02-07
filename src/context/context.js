import React from "react";

const Context = React.createContext({
    allEvents:[],
    view:'',
    date:new Date(),
    addEventsToAll: (event) => {},
    onNavigateView: () => {},
    onNavigateDate: () => {},



});

export default Context