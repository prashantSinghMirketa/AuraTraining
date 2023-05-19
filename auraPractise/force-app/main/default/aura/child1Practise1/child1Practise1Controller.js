({
    getData: function (component, event, helper) {
        let name = component.find("Name").get("v.value");
        alert("Name : " + name);
    }

})
