({
    init: function (component, event, helper) {
        // Initialize tableData with sample data
        let tableData = [];
        component.set('v.tableData', tableData);
    },
    handleAddRecordEvent: function (component, event, helper) {
        var record = event.getParam('record');
        var tableData = component.get('v.tableData');
        tableData.push(record);
        console.log(tableData);
        component.set('v.tableData', tableData);
    }
})
