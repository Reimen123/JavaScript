function getLocation() {
    document.getElementById("location").innerHTML = "Current location " + location.href;
}

function getProtocol() {
    document.getElementById("protocol").innerHTML = "Current protocol " + location.protocol;
}

function getHost() {
    document.getElementById("host").innerHTML = "Current host " + location.host;
}

function getPort() {
    document.getElementById("port").innerHTML = "Current port " + location.port;
}

function getPathName() {
    document.getElementById("pathname").innerHTML = "Current path name " + location.pathname;
}

function getSearch() {
    document.getElementById("search").innerHTML = "Search is " + location.search;
}

function getHash() {
    document.getElementById("hash").innerHTML = "Current hash " + location.hash;
}

function getOrigin() {
    document.getElementById("origin").innerHTML = "Current origin " + location.origin;
}

function getUsername() {
    document.getElementById("username").innerHTML = "Current username " + location.username;
}

function getPassword() {
    document.getElementById("password").innerHTML = "Current password " + location.password;
}