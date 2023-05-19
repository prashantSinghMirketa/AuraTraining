({
    init: function (component, event, helper) {
        component.set("v.columns", [
            { label: 'Name', fieldName: 'Name', type: 'text' },
            { label: 'AccountNumber', fieldName: 'AccountNumber' },
            { label: 'Phone', fieldName: 'Phone', type: 'tel' },
            { label: 'Type', fieldName: 'Type', type: 'text' }
        ])

        let action = component.get('c.accountDataTableController');
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                console.log(response.getReturnValue());
                let record = response.getReturnValue();
                component.set("v.table", record);
            }
        });
        $A.enqueueAction(action);
    }
})
