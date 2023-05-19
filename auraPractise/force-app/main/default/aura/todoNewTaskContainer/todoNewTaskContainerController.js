({
    handleCreateTask: function (component, event, helper) {

        const input = document.getElementById('text-input').value;
        console.log(input);
        // console.log(component.find('text-input').get('v.value'));

        let tasks = component.get('v.tasksList');
        tasks.push(input);
        component.set('v.tasksList', tasks);
    }
})
