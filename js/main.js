//bài quản lý tuyen sinh
//Bảng khu vuc doi tuong


function tinhdiemdau() {
    var diemChuan = Number(document.getElementById("diemchuan").value);
    var nhapdiemthunhat = Number(document.getElementById("diemthu1").value);
    var nhapdiemthuhai = Number(document.getElementById("diemthu2").value);
    var nhapdiemthuba = Number(document.getElementById("diemthu3").value);
    var khuvuc = Number(document.getElementById("khuvuc").value);
    var doituong = Number(document.getElementById("doituong").value);
    var diemdau = nhapdiemthunhat + nhapdiemthuhai + nhapdiemthuba + khuvuc + doituong;
    var ketqua = "";

    if (nhapdiemthunhat == 0 || nhapdiemthuhai == 0 || nhapdiemthuba == 0) {
        ketqua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    } else if (diemdau >= diemChuan) {
        ketqua = "Bạn đã đậu." + diemdau;
    } else if (diemdau < diemChuan) {
        ketqua = "Bạn đã rớt." + diemdau;
    }
    document.getElementById("txtResult").innerHTML = ketqua;
}
document.getElementById("btnketqua").onclick = tinhdiemdau;


// bài tính tien dien


//Bảng giá cước
const Kw_dau50 = 500;
const Kw_ke50 = 650;
const kw_ke100 = 850;
const kw_ke150 = 1100;
const Kw_conlai = 1300;

//Hàm Tinh Tiền cước
function tinhTien() {
    var hoten = document.getElementById("nhaphoten").value;
    var sokw = Number(document.getElementById("nhapkw").value);

    //tính tiền theo Kw
    var Thanhtien = 0;

    //Công thức
    if (0 < sokw && sokw <= 50) {

        Thanhtien = sokw * Kw_dau50;
    } else if (50 < sokw && sokw <= 100) {

        Thanhtien = (50 * Kw_dau50) + ((sokw - 50) * Kw_ke50);
    } else if (100 < sokw && sokw <= 200) {

        Thanhtien = (50 * Kw_dau50) + (50 * Kw_ke50) * Kw_ke50 + (sokw - 100) * kw_ke100;
    } else if (200 < sokw && sokw <= 350) {
      
        Thanhtien = (50 * Kw_dau50) + (50 * Kw_ke50) + (50 * kw_ke100) + (sokw - 200) * kw_ke150;
    } else if (350 < sokw) {

        Thanhtien = (50 * Kw_dau50) + (50 * Kw_ke50) + (50 * kw_ke100) + (50 * kw_ke150) + (sokw - 350) * Kw_conlai;
    } else {
        alert("Nhập số KM đi")
    }

    document.getElementById("txtResulttiendien").innerHTML ="Họ Tên :" + hoten + "; Tiền điện :" + Thanhtien.toLocaleString();
}
document.getElementById("btntinhtien").onclick = tinhTien;