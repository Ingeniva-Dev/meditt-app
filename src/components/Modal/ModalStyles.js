const bookingStyle = {
    overlay: {
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: '10',
    },
    content: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '5',
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: '8px',
        padding: '0',
        height: 'max-content',
        maxWidth: '383px',
        width: '100%',
        border: 'none',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxShadow: '0px 0px 10px 0px rgba(33, 33, 33, 0.05)',
        maxHeight: '98%',
    },
};

const signUpStyle = {
    overlay: {
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: '10',
    },
    content: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '5',
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: '0',
        height: 'max-content',
        maxWidth: '1440px',
        width: '94%',
        border: 'none',
        overflow: 'hidden',
        boxShadow: '0px 0px 10px 0px rgba(33, 33, 33, 0.05)',
    },
};

const messageStyle = {
    overlay: {
        background: "rgba(255, 255, 255, 1)",
        zIndex: '10',
    },
    content: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '5',
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: '0',
        minHeight: '100%',
        width: '100%',
        border: 'none',
        overflow: 'hidden',
    },
};


export {
    bookingStyle,
    signUpStyle,
    messageStyle,

}