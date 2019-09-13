  var counter_table = 0;
  
  // THIS WILL WORK FOR SQL DATABASES 
  function showTable() {
  
    // if no table exists create new table 
    if (counter_table == 0){

          // nested array with animal, age, number 
          var nested_data = [["dog", 15, 25000], ["cat", 18, 14000], ["horse", 10, 700]];
          // console.log(nested_data[1][2]);
          
          // create table from SQL Database 
          // create a table with the first row and contents 
          var table = document.createElement('table');
          table.id = "main_table";
          var row = table.insertRow(0);
          row.insertCell(0).innerHTML = "animal";
          row.insertCell(1).innerHTML = "age";
          row.insertCell(2).innerHTML = "number";
          document.getElementById("table_div").appendChild(table);

          // looping through nested arrays 
          for (i=0; i< nested_data.length; i++){

            // console.log(nested_data[i]);
            // console.log(nested_data[i][1]);
            var row_i = table.insertRow();

            for (j=0; j< nested_data[i].length; j++){

              // console.log(nested_data[i][j]);
              // add first element to column one 
              row_i.insertCell(j).innerHTML = nested_data[i][j];
          }
        }

        counter_table = 1;
      }

    else {

      // whatever other stuff you want to do.. 
      
    }
  }

 
  function showNestedTable(){

    var twicenested_data = [[["dog", "Lucky", false], 15, 25000], [["cat", "Charly", false], 18, 14000], [["horse", "Limi", true], 10, 700]];
    // console.log(twicenested_data[0][0][2]);

    var nested_row = document.getElementById("nested_tabel").insertRow();
    nested_row.insertCell(0).innerHTML = "animal";
    nested_row.insertCell(1).innerHTML = "name";
    nested_row.insertCell(2).innerHTML = "alive";

    for (i=0; i < twicenested_data.length; i++){

      let new_row = document.getElementById("nested_tabel").insertRow();

        for (j=0; j < twicenested_data[i][0].length; j++){

            new_row.insertCell(j).innerHTML = twicenested_data[i][0][j];
        }
      }
  }


  // // LET'S SAY THAT WE HAVE A SIMPLE FLAT ARRAY
  // var data = ["doge", "cate", "birb", "doggo", "moon moon", "awkward seal"];

  // // DRAW HTML TABLE
  // var perrow = 3, // 3 items per row
  //     count = 0, // Flag for current cell
  //     table = document.createElement("table"),
  //     row = table.insertRow();

  // for (var i of data) {
  //   var cell = row.insertCell();
  //   cell.innerHTML = i;

  //   // Break into next row
  //   count++;
  //   if (count%perrow==0) {
  //     row = table.insertRow();
  //   }
  // }

  // // ATTACH TABLE TO CONTAINER
  // document.getElementById("table").appendChild(table);
