export class Food {
  constructor(ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang, ma) {
    this.ma = ma;
    this.ten = ten;
    this.loai = loai;
    this.gia = gia;
    this.khuyenMai = khuyenMai;
    this.hinhAnh = hinhAnh;
    this.moTa = moTa;
    this.tinhTrang = tinhTrang;
  }
  tinhGiaKm = function () {
    return this.gia * (1 - this.khuyenMai);
  };
}
