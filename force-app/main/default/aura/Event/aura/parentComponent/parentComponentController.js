({
    handleAddRecordEvent: function (component, event, helper) {
        let record = event.getParam("record");
        let tableData = component.get("v.tableData");
        tableData.push(record);
        component.set("v.tableData", tableData);
    },
    init: function (component, event, helper) {

        let tableData = [];
        component.set("v.tableData", tableData);
    }
})

