export let getDataForm = () => {
  //   get data form
  let id = document.getElementById("foodID").value;
  let name = document.getElementById("tenMon").value;
  let price = document.getElementById("giaMon").value;
  let type = document.getElementById("loai").value;
  let discount = document.getElementById("khuyenMai").value;
  let status = document.getElementById("tinhTrang").value;
  let img = document.getElementById("hinhMon").value;
  let desc = document.getElementById("moTa").value;
  return {
    id,
    name,
    price,
    type,
    discount,
    status,
    img,
    desc,
    calcPromotion: function () {
      return this.price * (1 - this.discount);
    },
  };
};

let showDataForm = (data) => {
  //   destructuring
  let { id, name, price, type, discount, status, img, desc } = data;
  //   show data form
  //   let calcPromotion= data.calcPromotion
  document.getElementById("imgMonAn").src = img;
  document.getElementById("spMa").innerText = id;
  document.getElementById("spTenMon").innerText = name;
  document.getElementById("spLoaiMon").innerText = type == "loai2" ? "Mặn" : "Chay";
  document.getElementById("spGia").innerText = price;
  document.getElementById("spKM").innerText = discount * 100 + "%";
  document.getElementById("spTT").innerText = status;
  document.getElementById("pMoTa").innerText = desc;
  document.getElementById("spGiaKM").innerText = data.calcPromotion();
};

export default showDataForm;
