window.addEventListener("load", function(){
    // (A) DUMMY ARRAY
    var data = ["doge", "cate", "birb", "doggo", "moon moon", "awkward seal"];
  
    // (B) CREATE HTML TABLE OBJECT
    var perrow = 2, // 2 CELLS PER ROW
        table = document.createElement("table"),
        row = table.insertRow();
  
    // LOOP THROUGH ARRAY AND ADD TABLE CELLS
    for (var i = 0; i < data.length; i++) {
      // ADD "BASIC" CELL
      var cell = row.insertCell();
      cell.innerHTML = data[i];
  
      // ATTACH A RUNNING NUMBER OR CUSTOM DATA
      // cell.dataset.id = i;
   
      /* ATTACH ONCLICK LISTENER IF REQUIRED
      cell.addEventListener("click", function(){
        console.log(this.dataset.id); 
      });
      */
  
      // BREAK INTO NEXT ROW
      var next = i + 1;
      if (next%perrow==0 && next!=data.length) {
        row = table.insertRow();
      }
    }
  
    // (C) ATTACH TABLE TO CONTAINER
    document.getElementById("container").appendChild(table);
  });