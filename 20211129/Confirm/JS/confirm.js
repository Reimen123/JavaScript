function confirmCall() {
    let result = confirm('Choose the button you want to click');

    let message = result ? 'You clicked the OK button' :
        'You clicked the Cancel button';
    
    alert(message);
}