
$.ajax({
    url: "./api/get_products.php",
    method: "GET", // Specify the HTTP method
    dataType: "json", // Expect JSON data in the response
    success: function(data) {
      // Process the retrieved data
      console.log(data);
  
      let dataHtml = "";
      for (let i = 0; i < data.length; i++) {
        let product = data[i];
        dataHtml += `<tr>
          
          <td>
            <img src='${product.image}' alt="product img" width="100px" height="100px">
          </td>
          <td><p class="label fs-5">${product.name}</p></td>
          <td>${product.category}</td>
          <td>${product.sku}</td>
          <td>${product.variant}</td>
          <td>${product.price}</td>
          <td>${product.status}</td>
        </tr>`;
      }
      
      $("#row").html(dataHtml);
    },
    error: function(response) {
      console.error("Error fetching data:", response);
    }
  });
  