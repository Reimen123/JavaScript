/* To access debug mode, open page with F11 and open Sources tab and there in the file you want to work with we can add breakpoints */

function factorial(n) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = "Value" + n;
    return n < 2 ? 1 : n * factorial(n - 1);
}

function launch() {
    let n = 10;
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = "Factorial of: " + n + " is " + factorial(n);
}


function multiply(a, b) {
    b = typeof b !== 'undefined' ?  b : 1;
  
    return a * b;
  }

  function multiplyWithNoCheck(a, b = 1) {
    return a * b;
  }

/* ...theArgs is a way to create array, so we can many elements of this array as we can see bellow here 
 var arr = multiply(2, 1, 2, 3); */
  function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]
  
  multiply(5); // 5

function main2() {
    const a_d_main2 = 1;
    const b_d_main2 = map_main2(square_main2, a_d_main2);
    const a_main2 = [1, 2, 3];
    const b_main2 = map_main2(square_main2, a_main2);
    const para1 = document.createElement('p');
    document.body.appendChild(para1);
    para1.textContent = a_main2;
    const para2 = document.createElement('p');
    document.body.appendChild(para2);
    para2.textContent = b_main2;
    function square_main2(i) {
        return i * i;
    }
    function map_main2(f_map, a_map) {
        //if (typeof a_map == Array) {
        if (Array.isArray(a_map)) {
            a_map[0] = 100;
            let result = []; // Create a new Array
            let i; // Declare variable
            for (i = 0; i != a_map.length; i++)
                result[i] = f_map(a_map[i]);
            return result;
        }
        else {
            a_map = 100;
            let result = f_map(a_map);
            return result;
        }
    }
 }
