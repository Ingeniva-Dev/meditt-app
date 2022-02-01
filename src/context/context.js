import React from "react";

const Context = React.createContext({
    allEvents:[],
    view:'',
    addEventsToAll: (event) => {},
    onNavigateView: () => {},



});

export default Context