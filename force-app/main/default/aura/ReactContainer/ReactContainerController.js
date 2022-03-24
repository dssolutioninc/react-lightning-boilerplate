({
    doInit: function (component, event, helper) {
        component.set("v.score", 100);
    },

    handleMessage: function (component, event, helper) {
        var message = event.getParams();
        component.set('v.message', message.payload.value);
    },

    handleError: function (component, event, helper) {
        var error = event.getParams();
        console.log(error);
    },

    sendMessage: function (component, event, helper) {
        let messageText = component.get('v.message');
        var message = {
            name: "Send To React",
            value: messageText
        };
        
        component.find('jsApp').message(message);
    }
})
