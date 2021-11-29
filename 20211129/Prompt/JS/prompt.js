function callPrompt() {
    let lang = prompt('What is your favorite food?');

    let feedback = lang.toLowerCase() === 'pizza' ? `I knew it` :
        `It's ${lang}`; // use ${lang} to past variable in to the string

    alert(feedback);
}

function callPromptValidation() {
    let ageStr = prompt('How old are you?');
let age = Number(ageStr);

let feedback = age >= 16 ?
    `You're eligible to join.` :
    `You must be at least 16 year old to join.`;

alert(feedback);
}