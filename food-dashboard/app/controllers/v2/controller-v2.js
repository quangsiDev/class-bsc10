export let renderFoodList = (foodArr) => {
  let contentHTML = ``;
  foodArr.reverse().forEach((food) => {
    let { ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang, ma } = food;
    let trString = `
                  <tr>
                          <td>${ma}</td>
                          <td>${ten}</td>
                          <td>${loai}</td>
                          <td>${gia}</td>
                          <td>${khuyenMai}</td>
                          <td>${food.tinhGiaKm()}</td>
                          <td>${tinhTrang}</td>
                          <td>
                          <button
                          onclick="deleteFood(${ma})"
                          class="btn btn-danger"
                          >Xoá</button>
                          <button
                          onclick="editFood(${ma})"
                          class="btn btn-primary"
                          >Sửa</button>
                          </td>
                  </tr>`;

    contentHTML += trString;
  });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

export let showDataForm = (food) => {
  let { ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang, ma } = food;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("giaMon").value = gia;
  document.getElementById("loai").value = loai;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value = tinhTrang;
  document.getElementById("hinhMon").value = hinhAnh;
  document.getElementById("moTa").value = moTa;
};
