//Creating custom Cookies

var cookieText = "name=adminMain; path=/; expires=Mon, 12-January-2022 18:15:00 GMT;"; 
// expires wont show past date
// path / will be accesible from other folders as well, can be checked by launching it from different html
// it means / is domain http://127.0.0.1:5500/ + all the fodlers we call
document.cookie = cookieText;

// expires/Max Age - for Max age set how much sec needed 
var cookieText = "username1=admin1";
document.cookie = cookieText;

var cookieText = "name=adminSecond; Max-Age=300;";
document.cookie = cookieText;