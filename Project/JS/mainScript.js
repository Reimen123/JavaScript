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