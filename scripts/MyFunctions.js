function clickRed() {
    infomation("red");
}

function clickBlue() {
    infomation("blue");
}

function clickGreen() {
    infomation("green");
}

function clickBlack() {
    infomation("black");
}

function clickWhite() {
    infomation("white");
}

function clickYellow() {
    infomation("yellow");
}

function clickMagenta() {
    infomation("magenta");
}

function clickAqua() {
    infomation("aqua");
}

function clickLime() {
    infomation("lime");
}

function clickGray() {
    infomation("gray");
}

function clickOrange() {
    infomation("orange");
}

function clickPurple() {
    infomation("purple");
}

function infomation(color) {
    switch(color) {
        case "red":
            document.getElementById("color").textContent = "Color: Red";
            document.getElementById("hex").textContent = "Hexidecimal: #ff0000";
            document.getElementById("rgb").textContent = "rgb(255, 0, 0)";
            document.getElementById("hsl").textContent = "hsl(0, 100%, 50%)";
            break;
        case "blue":
            document.getElementById("color").textContent = "Color: Blue";
            document.getElementById("hex").textContent = "Hexidecimal: #0000ff";
            document.getElementById("rgb").textContent = "rgb(0, 0, 255)";
            document.getElementById("hsl").textContent = "hsl(240, 100%, 50%)";
            break;
        case "green":
            document.getElementById("color").textContent = "Color: Green";
            document.getElementById("hex").textContent = "Hexidecimal: #008000";
            document.getElementById("rgb").textContent = "rgb(0, 128, 0)";
            document.getElementById("hsl").textContent = "hsl(120, 100%, 25%)";
            break;
        case "black":
            document.getElementById("color").textContent = "Color: Black";
            document.getElementById("hex").textContent = "Hexidecimal: #000000";
            document.getElementById("rgb").textContent = "rgb(0, 0, 0)";
            document.getElementById("hsl").textContent = "hsl(0, 0%, 0%)";
            break;
        case "white":
            document.getElementById("color").textContent = "Color: White";
            document.getElementById("hex").textContent = "Hexidecimal: #ffffff";
            document.getElementById("rgb").textContent = "rgb(255, 255, 255)";
            document.getElementById("hsl").textContent = "hsl(0, 0%, 100%)";
            break;
        case "yellow":
            document.getElementById("color").textContent = "Color: Yellow";
            document.getElementById("hex").textContent = "Hexidecimal: #ffff00";
            document.getElementById("rgb").textContent = "rgb(255, 255, 0)";
            document.getElementById("hsl").textContent = "hsl(60, 100%, 50%)";
            break;
        case "magenta":
            document.getElementById("color").textContent = "Color: Magenta";
            document.getElementById("hex").textContent = "Hexidecimal: #ff00ff";
            document.getElementById("rgb").textContent = "rgb(255, 0, 255)";
            document.getElementById("hsl").textContent = "hsl(300, 100%, 50%)";
            break;
        case "aqua":
            document.getElementById("color").textContent = "Color: Aqua";
            document.getElementById("hex").textContent = "Hexidecimal: #00ffff";
            document.getElementById("rgb").textContent = "rgb(0, 255, 255)";
            document.getElementById("hsl").textContent = "hsl(180, 100%, 50%)";
            break;
        case "lime":
            document.getElementById("color").textContent = "Color: Lime";
            document.getElementById("hex").textContent = "Hexidecimal: #00ff00";
            document.getElementById("rgb").textContent = "rgb(0, 255, 0)";
            document.getElementById("hsl").textContent = "hsl(120, 100%, 50%)";
            break;
        case "gray":
            document.getElementById("color").textContent = "Color: Gray";
            document.getElementById("hex").textContent = "Hexidecimal: #808080";
            document.getElementById("rgb").textContent = "rgb(128, 128, 128)";
            document.getElementById("hsl").textContent = "hsl(0, 0%, 50%)";
            break;
        case "orange":
            document.getElementById("color").textContent = "Color: Orange";
            document.getElementById("hex").textContent = "Hexidecimal: #ffa500";
            document.getElementById("rgb").textContent = "rgb(255, 165, 0)";
            document.getElementById("hsl").textContent = "hsl(39, 100%, 50%)";
            break;
        case "purple":
            document.getElementById("color").textContent = "Color: Purple";
            document.getElementById("hex").textContent = "Hexidecimal: #800080";
            document.getElementById("rgb").textContent = "rgb(128, 0, 128)";
            document.getElementById("hsl").textContent = "hsl(300, 100%, 25%)";
            break;
    }
}