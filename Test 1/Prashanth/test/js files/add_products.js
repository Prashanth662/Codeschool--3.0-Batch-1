
// async function products() {
//     const form = document.getElementById('myForm');
//     const formData = new FormData(form);
  
//     try {
//       const response = await fetch('./api/products.php', {
//         method: 'POST',
//         body: formData,
//       });
  
//       const result = await response.json();
  
//       if (result.success) {
//         console.log('Form submitted successfully:', result.data);
//       } else {
//         console.error('Form submission failed:', result.error);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//     location.href = "./dashboard.html";
//   }
  


document.addEventListener("DOMContentLoaded", function () {
  const addProducts = document.getElementById("addProducts");
  addProducts.addEventListener("click", productsAdd);

  function productsAdd() {
    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let sku = document.getElementById("sku").value;
    let variant = document.getElementById("variant").value;
    let price = document.getElementById("price").value;
    let status = document.getElementById("status").value;

    $.ajax({
      url: "./api/products.php",
      method: "POST",
      data: {
        image,
        name,
        category,
        sku,
        variant,
        price,
        status,
      },
      success: (response) => {
        response = JSON.parse(response);
        if (!response.status) {
          alert(response.message);
          return false;
        }
        location.href = "./dashboard.html";
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
});