// let data;

// async function fetchData() {
//   try {
//     const res = await fetch(
//       "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
//     );
//     const jsonData = await res.json();
//     data = jsonData.categories;
//     appendData(data[0].category_products);
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// fetchData();

// function appendData(productData) {
//   const Product_div = document.querySelector(".product-div");
//   Product_div.innerHTML = "";
//   console.log(productData);
//   productData.map((el) => {
//     // console.log(el)

//     const div = document.createElement("div");
//     const badge = document.createElement("p");
//     badge.innerText = el.badge_text || "";
//     badge.className = "badge";

//     const img = document.createElement("img");
//     img.src = el.image;
//     img.className = "product-img";
//     const div1 = document.createElement("div");
//     div1.className = "title-vendor";
//     const title = document.createElement("p");
//     title.innerText = el.title;
//     title.className = "title";

//     const vendor = document.createElement("li");
//     vendor.className = "vendor";
//     vendor.innerText = el.vendor;

//     const div2 = document.createElement("div");
//     div2.className = "price-div";
//     const price = document.createElement("p");
//     price.innerText = `Rs ${Number(el.price).toFixed(2)}`;
//     const compare = document.createElement("p");
//     compare.innerText = `${Number(el.compare_at_price).toFixed(2)}`

//     const offer = document.createElement("p");
//     const discount =
//       ((el.compare_at_price - el.price) / el.compare_at_price) * 100;
//     offer.innerText = `${discount.toFixed(2)}% Off`;

//     const button = document.createElement("button");
//     button.className = "cardButton";
//     button.innerText = "Add to Cart";

//     div1.append(title, vendor);
//     div2.append(price, compare, offer);

//     div.append(img, div1, div2, button);
//     if (badge.innerText !== "") {
//       div.appendChild(badge);
//     }

//     Product_div.append(div);
//   });

//   // data.map()
// }

// let prevbtn = document.querySelector(".men-button");
// prevbtn.style.backgroundColor = "black";
// prevbtn.style.color = "white";

// function myFunction(val, button) {
//   if (prevbtn) {
//     prevbtn.style.backgroundColor = "";
//     prevbtn.style.color = "black";
//   }
//   button.style.backgroundColor = "black";
//   button.style.color = "white";
//   prevbtn = button;
//   let mendata = data[val].category_products;
//   appendData(mendata);
//   console.log(button);
//   console.log(prevbtn);
// }
