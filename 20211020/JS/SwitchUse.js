
    function getColor() {
        var el = document.getElementById('color').value;
        let color = "";
        switch (el) {
            case "Blue":
                color = "Blue";
                break;
            case "Pink":
                color = "Pink";
                break;
            case "Red":
                color = "Red";
                break;
            case "White":
                color = "White";
        }
        document.getElementById("demo").innerHTML = "Color is " + color;
    }