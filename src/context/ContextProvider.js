import React, {useReducer} from "react";
import Context from "./context";

const events=[
        {
            end: new Date('2022-02-01T21:45:00+0400'),
            patient_id: 2,
            selectable: true,
            start: new Date('2022-02-01T21:50:00+0400'),
            eventClasses: 'optionalEvent',
            title: 'test event',
            description: 'This is a test description of an event',
        },
]


const defaultState = {
    allEvents:events,
    view:'month',
};

const contextReducer = (state, action) => {

    if(action.type === 'ADD_ALL_EVENTS') {
        const updatedEvents = [...state.allEvents, action.event];
        return {
            ...state,
            allEvents:updatedEvents,
        }
    }
    if (action.type === 'VIEW') {
        return {
            ...state,
            view:action.id,
        }
    }
    return state;
};

const ContextProvider = (props) => {

    const [contextState, dispatchContextAction] = useReducer(contextReducer, defaultState);

    const addAllEventsHandler = (event) => {
        dispatchContextAction({type:'ADD_ALL_EVENTS',event})
    }

    const onNavigateViewHandler = (id) => {
        dispatchContextAction({type:'VIEW',id})
    }

    const contextValue = {
        allEvents: contextState.allEvents,
        addEventsToAll:addAllEventsHandler,
        view:contextState.view,
        onNavigateView:onNavigateViewHandler,
    }

        return (
            <Context.Provider value={contextValue}>
                {props.children}
            </Context.Provider>
    );

}

export default ContextProvider