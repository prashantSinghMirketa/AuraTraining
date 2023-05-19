// ({
//     init: function (component, event, helper) {
//         let tableData = [];
//         component.set("v.tableData", tableData);
//         component.set("v.columns", [
//             { label: 'Name', fieldName: 'Name', type: 'text' },
//             { label: 'Phone', fieldName: 'Phone', type: 'phone' },
//             { label: 'Email', fieldName: 'Email', type: 'email' }
//         ]);
//     },
//     getData: function (component, event, helper) {
//         let name = component.find('Name').get('v.value');
//         let email = component.find('Email').get('v.value');
//         let phone = component.find('Phone').get('v.value');
//         let tableData = component.get("v.tableData");

//         tableData.push({
//             Name: name,
//             Phone: phone,
//             Email: email
//         });


//         if (!name || !email || !phone) {
//             alert('Please fill in all required fields');
//             return;
//         }
//         else if (phone.length < 10) {
//             alert('Please enter a valid phone number');
//             return;
//         }
//         else {
//             alert("Name: " + name + ", Email: " + email + ", Phone: " + phone);
//             component.set("v.tableData", tableData);
//         }
//         let emptyName = component.find("Name").set("v.value", "");
//         let emptyPhone = component.find("Phone").set("v.value", "");
//         let emptyEmail = component.find("Email").set("v.value", "");

//     }
// })
({
    init: function (component, event, helper) {
        component.set("v.tableData", []);
        // component.set("v.columns", [
        //     { label: 'Name', fieldName: 'Name', type: 'text' },
        //     { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        //     { label: 'Email', fieldName: 'Email', type: 'email' }
        // ]);
    },
    handleFormSubmit: function (component, event, helper) {
        let formData = event.getParam("formData");
        let tableData = component.get("v.tableData");

        tableData.push(formData);

        component.set("v.tableData", tableData);
    }
})
