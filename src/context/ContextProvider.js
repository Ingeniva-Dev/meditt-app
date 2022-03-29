import React, {useReducer} from "react";
import Context from "./context";
import {usersList} from "../components/DummyData";


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
    view:'week',
    date:new Date(),
    conversation:[],
    usersListData:usersList,
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

    if (action.type === 'DATE') {
        if (action.text === 'PREVIOUS') {
            return  {
                ...state,
                date:new Date(state.date.getFullYear(),state.date.getMonth(), state.date.getDate() - 7)
            }
        }
        if (action.text === 'NEXT') {
            return  {
                ...state,
                date:new Date(state.date.getFullYear(),state.date.getMonth(), state.date.getDate() + 7)
            }
        }
        return {
            ...state,
            date:action.date
        }
    }

    if(action.type === 'CONVERSATION') {
        let selectedConversation;
        for (const item of state.usersListData) {
            if (item.conversation && action.id === item.id) {
                 selectedConversation = [item.img, ...item.conversation];
                 break;
            }
            else {
                 selectedConversation = [];
            }
        }
        return {
            ...state,
            conversation:selectedConversation,
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

    const onNavigateDateHandler = (date,text) => {
        dispatchContextAction({type:'DATE', date, text});
    }

    const selectedConversationHandler = (id) => {
        dispatchContextAction({type:'CONVERSATION', id})
    }

    const addMessageHandler = (id, message) => {
        dispatchContextAction({type:'ADD_MESSAGE', id, message});
    }

    const contextValue = {
        allEvents: contextState.allEvents,
        addEventsToAll:addAllEventsHandler,
        view:contextState.view,
        onNavigateView:onNavigateViewHandler,
        date:contextState.date,
        onNavigateDate:onNavigateDateHandler,
        conversation:contextState.conversation,
        conversationHandler:selectedConversationHandler,
        addMessage:addMessageHandler,

    }
        return (
            <Context.Provider value={contextValue}>
                {props.children}
            </Context.Provider>
    );
}

export default ContextProvider