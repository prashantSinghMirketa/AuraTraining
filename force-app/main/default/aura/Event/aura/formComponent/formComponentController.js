({
    addData: function (component, event, helper) {
        let name = component.get("v.name");
        let phone = component.get("v.phone");
        let email = component.get("v.email");
        let isValid = true;

        if (!name || !email || !phone) {
            alert('Please fill in all required fields');
            isValid = false;
        } else if (phone.length < 10) {
            alert('Please enter a valid phone number');
            isValid = false;
        }

        if (isValid) {
            let record = {
                Name: name,
                Phone: phone,
                Email: email
            };
            let addRecordEvent = component.getEvent("firstPractiseEvent");
            addRecordEvent.setParams({ "record": record });
            addRecordEvent.fire();

            // clear form inputs
            component.set("v.name", "");
            component.set("v.phone", "");
            component.set("v.email", "");
        }
    }
})
