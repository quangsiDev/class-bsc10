import { getDataForm } from "../v1/controller-v1.js";
import { renderFoodList, showDataForm } from "./controller-v2.js";
import { Food } from "./model-v2.js";

const BASE_URL = "https://63b2c99f5901da0ab36dbaed.mockapi.io/food_es6";

// lấy danh sách món ăn
let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      // map class Food
      let foodArr = res.data.map((item) => {
        let { ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang, ma } = item;
        return new Food(ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang, ma);
      });
      renderFoodList(foodArr);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchFoodList();

window.deleteFood = (id) => {
  console.log("😀 - id", id);
  // gọi api xoá món ăn
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      // gọi lại api lấy danh sác món ăn từ server sau khi xoá thành công
      fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.createFood = () => {
  let { id, name, price, type, discount, status, img, desc } = getDataForm();
  let food = new Food(name, type, price, discount, img, desc, status, id);
  // gọi api thêm ~ POST
  axios({
    url: BASE_URL,
    method: "POST",
    data: food,
  })
    .then(function (res) {
      // gọi api lấy danh sách món sau khi thêm thành công
      fetchFoodList();
      // tắt modal
      $("#exampleModal").modal("hide");
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};

window.editFood = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      $("#exampleModal").modal("show");
      // showDataForm
      showDataForm(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};

window.updateFood = () => {
  let { id, name, price, type, discount, status, img, desc } = getDataForm();
  let food = new Food(name, type, price, discount, img, desc, status, id);
  axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: food,
  })
    .then(function (res) {
      $("#exampleModal").modal("hide");
      fetchFoodList();

      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};
