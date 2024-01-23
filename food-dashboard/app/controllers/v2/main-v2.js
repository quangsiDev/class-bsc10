const BASE_URL = "https://63b2c99f5901da0ab36dbaed.mockapi.io/food_es6";

let renderFoodList = (foodArr) => {
  let contentHTML = ``;
  foodArr.forEach((food) => {
    let { ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang, ma } = food;
    let trString = `
                <tr>
                        <td>${ma}</td>
                        <td>${ten}</td>
                        <td>${loai}</td>
                        <td>${gia}</td>
                </tr>`;

    contentHTML += trString;
  });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

// lấy danh sách món ăn

axios({
  url: BASE_URL,
  method: "GET",
})
  .then((res) => {
    console.log(res);
    renderFoodList(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
