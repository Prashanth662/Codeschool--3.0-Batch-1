
$.ajax({
    url: "./api/get_filter.php",
    method: "GET", // Specify the HTTP method
    dataType: "json", // Expect JSON data in the response
    success: function(data) {
      // Process the retrieved data
      console.log(data);
  
      let dataHtml = "";
      for (let i = 0; i < data.length; i++) {
        let filter_item = data[i];
        dataHtml += `<a class="dropdown-item" href="#(${filter_item.category})" id="${filter_item.id}">${filter_item.category}</a>`;
        
        // document.getElementById("row").innerHTML = filter_item.filter(check);
        // function check(category) {
        //    return category == filter_item.category;
        // }
      }
      
      $("#filter").html(dataHtml);
    },
    error: function(response) {
      console.error("Error fetching data:", response);
    }
  });
  


  