function openPrograms() {
    window.open('programs.html', '_self');
}

function openVitamins() {
    window.open('vitamins.html', '_self');
}

function openBodybuilders() {
    window.open('bodybuilders.html', '_self');
}

function openMainPage() {
    window.open('main.html', '_self');
}

function createProgram() {
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    var selectedProgram = document.getElementById('selectProgram').value;
    var divElement = document.getElementById('infoMessage');
    var tableElement = document.getElementById('tabelOfPrograms');

    if (weight == "" || age == "") {
        alert("Please enter valid age and weight");
    }
    else if (selectedProgram === "Gain muscles" && age <= 60 && age >= 40 && weight < 100) {
        removeChildrens(tableElement);
        removeChildrens(divElement);
        creatProgram(arrayOfExcercisesMusculeBegining());
    }

    else if (selectedProgram === "Gain muscles" && age < 40 && weight < 90) {
        removeChildrens(tableElement);
        removeChildrens(divElement);
        creatProgram(arrayOfExcercisesMusculeAdvanced());
    }

    else if (selectedProgram === "Burning fat" && age <= 50 && age >= 35 && weight < 150) {
        removeChildrens(tableElement);
        removeChildrens(divElement);
        creatProgram(arrayOfExcercisesFatLossBeginer());
    }
    else if (selectedProgram === "Burning fat" && age > 35 && weight < 110) {
        removeChildrens(tableElement);
        removeChildrens(divElement);
        creatProgram(arrayOfExcercisesFatLossAdvanced());
    }
    else {
        removeChildrens(tableElement);
        cantCreateProgram(divElement);
    }
    document.getElementById('selectProgram').selectedIndex = 0;
}

function creatProgram(activitiesArray) {
    let table = document.querySelector("table");
    let data = Object.keys(activitiesArray[0]);
    generateTableHead(table, data);
    generateTable(table, activitiesArray);
}

function cantCreateProgram(divElement) {
    var paragraph = document.createElement("p");
    removeChildrens(divElement);
    var text = document.createTextNode("Sorry dont have such program yet.");
    paragraph.appendChild(text);
    divElement.appendChild(paragraph);
}

function removeChildrens(element) {
    if (element.children.length != 0) {
        var child = element.lastElementChild;
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
    }
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function arrayOfExcercisesMusculeBegining() {
    return [
        { Activity: "Wide Press-ups", Duration: "Reps: 10-15 Sets: 3"},
        { Activity: "Diamond Press-ups", Duration: "Reps: 10-15 Sets: 3"},
        { Activity: "Incline Press-ups", Duration: "Reps: 10-15 Sets: 3"},
        { Activity: "Body-up", Duration: "Reps: 10-15 Sets: 3"},
        { Activity: "Walking Lunge", Duration: "12 each leg Sets: 3"},
        { Activity: "Squat", Duration: "12 Sets: 3 "}
    ];
}

function arrayOfExcercisesMusculeAdvanced() {
    return [
        { Activity: "Wide Press-ups", Duration: "Reps: 20-30 Sets: 3"},
        { Activity: " Spiderman Press-up", Duration: "Reps: 15-20 Sets: 3"},
        { Activity: "One-arm Press-up", Duration: "Reps: 10-15 Sets: 3"},
        { Activity: "Handstand Wall Walk", Duration: "8-10 Sets: 3"},
        { Activity: "Body-up", Duration: "12 Reps: 15-25 Sets: 3"},
        { Activity: "Squat", Duration: "12 Sets: 3"},
        { Activity: "Squat-Jump", Duration: "12 Sets: 3"}
    ];
}

function arrayOfExcercisesFatLossBeginer() {
    return [
        { Activity: "Bodyweight", Duration: "20 reps"},
        { Activity: "Push-ups", Duration: "10 reps"},
        { Activity: "Walking lunges", Duration: "10 each leg"},
        { Activity: "Dumbbell rows", Duration: "10 each arms"},
        { Activity: "Plank", Duration: "15 seconds"},
        { Activity: "Jumping Jacks", Duration: "30 reps"}
    ];
}

function arrayOfExcercisesFatLossAdvanced() {
    return [
        { Activity: "One-legged squats", Duration: "10 each side"},
        { Activity: "Bodyweight squats", Duration: "20 reps"},
        { Activity: "Walking lunges", Duration: "20 reps (10 each leg)"},
        { Activity: "Jump step-ups", Duration: "20 reps (10 each leg)"},
        { Activity: "Dips (between bar stools)", Duration: " 10 reps"},
        { Activity: "Chin-up", Duration: "10 reps"},
        { Activity: "Plank", Duration: "30 seconds"},
        { Activity: "Push-ups", Duration: "10 reps"}
    ];
}

function bodybuildersList() {
    var bodybuilders = document.getElementById('selectBB');

    var options = [
        "Flex Wheeler",
        "Arnold Schwarzenegger",
        "Shawn Ray",
        "Dorian Yates"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];

        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;

        bodybuilders.add(el);
    }
}


function bbInformation() {
    var bodybuilders = document.getElementById('selectBB').value;
    if (bodybuilders === "Flex Wheeler") {
        document.getElementById("infoAboutBB").innerHTML = "First on our list is Kenneth Flex Wheeler, who is also regarded as ‘Sultan of Symmetry.’ " +
            "He`s a 56 year old guy who received 17 expert titles during his career. " +
            "He has by no means received Sandor and has fallen at the back of the Olympic champion three times. " +
            "However, for plenty of bodybuilders and athletes, Flex is simply the most pleasant bodybuilder ever. " +
            "Additionally, Arnold Schwarzenegger defined Wheeler as one of the best bodybuilders he has ever seen. " +
            "In addition, he received the Arnold Classic 4 times.In addition, Ronnie Coleman even showed that Flex Wheeler " +
            "is his closest to the pleasant bodybuilder. With these, he`s simply the satisfying frame within the frame.";
    }
    else if (bodybuilders === "Arnold Schwarzenegger") {
        document.getElementById("infoAboutBB").innerHTML = "Today, maximum humans recognize Arnold Schwarzenegger as an actor and politician. However, in reality, " +
            "he`s very famous inside the bodybuilding world. He`s 74 years old at the time. However, it has to be stated " +
            "that earlier in the 1990s, maximum bodybuilders confirmed higher health and mass than Schwarzenegger in " +
            "competition. By brand new standards, Schwarzenegger would not be capable of competing. However, during the early " +
            "years of his lifestyle, he possessed a well-proportioned, developed, and honestly colossal physique. " +
            "Additionally, he`s taller than maximum bodybuilders with a 6`2″ tall frame. His lifestyle is full of ideas " +
            "and fulfillment as he seeks and achieves his goals. With that being said, despite having men larger or " +
            "higher than Arnold, he is, in reality, one of the all-time greatest."
    }
    else if (bodybuilders === "Shawn Ray") {
        document.getElementById("infoAboutBB").innerHTML = "Nicknamed `Mr. Sean` Lei embodies share and balance and is 56 years old. " +
            "Even if he would not identify for Mr. Olympia, he`s considered one of the most inspiring bodies in the " +
            "bodybuilding industry.He is an extraordinary breed in the bodybuilding industry, mainly because maximum people " +
            "nowadays are the most effective of weight rather than extended frame symmetry.";
    }
    else if (bodybuilders === "Dorian Yates") {
        document.getElementById("infoAboutBB").innerHTML = "Moving on to the next, Dorian Yates, the six-time " +
            "Mr. Olympia (from 1992 to 1997), is one of the finest bodybuilders of all time, having many fans. " +
            "Dorian Yates is 5`10” tall with an aggressive weight of 262 lbs. It makes him a pressure to be reckoned " +
            "with. It desires to be taken into account of the bodybuilding world. His workout habitually includes " +
            "challenging and brutal exercising plans. His automatic recognition of schooling and unwavering " +
            "determination to his career paved the way for him to compete and win.";
    }
}