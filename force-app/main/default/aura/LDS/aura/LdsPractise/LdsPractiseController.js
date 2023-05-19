({
    handleType: function (component, event, helper) {
        let loadtype = component.find("type").get("v.value");
        console.log(loadtype);
        if (loadtype) {
            component.set("v.isRequired", true);
        } else {
            component.set("v.isRequired", false);
        }
        if (loadtype === 'Prospect' || loadtype === 'Other') {
            component.set("v.checktype", false);
        } else {
            component.set("v.checktype", true)
        }
    },
    handleOnSuccess: function (component, event, helper) {

        component.find('notifLib').showNotice({
            "variant": "success",
            "header": "sfsd",
            "message": "Value has been Saved."
        });

        console.log("is this printing?");
        let navService = component.find("navService");
        console.log("is this working ?");
        console.log("response" + navService);
        let ied = event.getParams().response;
        console.log(ied.id);

        // Sets the route to /lightning/o/Account/view
        let pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: ied.id,
                objectApiName: 'Account',
                actionName: 'view'
            }
        };
        // event.preventDefault();
        navService.navigate(pageReference);
    }
})
