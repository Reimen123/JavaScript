let activitiesBeginers = [
    { Activity: "Bodyweight", Duration: "20 reps",},
    { Activity: "Push-ups", Duration: "10 reps" },
    { Activity: "Walking lunges", Duration: "10 each leg",},
    { Activity: "Dumbbell rows", Duration: "10 each arms" },
    { Activity: "Plank", Duration: "15 seconds",},
    { Activity: "Jumping Jacks", Duration: "30 reps" },
  ];
  
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
  
  let table = document.querySelector("table");
  let data = Object.keys(activitiesBeginers[0]);
  generateTableHead(table, data);
  generateTable(table, activitiesBeginers);