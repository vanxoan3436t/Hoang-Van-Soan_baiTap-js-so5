
var mangNhanVien = [];
var kiemTra = new Validation();
document.getElementById('btnThemNV').onclick = function () {
    var nv = new NhanVien();
    nv.taiKhoan = document.getElementById('tknv').value;
    nv.hoTen = document.getElementById('name').value;
    nv.email = document.getElementById('email').value;
    nv.matKhau = document.getElementById('password').value;
    nv.ngayLam = document.getElementById('datepicker').value;
    nv.luongCoBan = document.getElementById('luongCB').value;
    nv.chucVu = document.getElementById('chucVu').value;
    nv.gioLam = document.getElementById('gioLam').value;
    nv.tongLuong = nv.tinhLuong().toLocaleString();
    nv.loaiNhanVien = nv.xepLoai();
    { //kiểm tra dữ liệu đầu vào
        var valid = true;

        valid = kiemTra.kiemTraRong(nv.taiKhoan, 'tbTKNV', 'Tài Khoản') & kiemTra.kiemTraRong(nv.hoTen, 'tbTen', 'Tên Nhân viên') & kiemTra.kiemTraRong(nv.email, 'tbEmail', 'Email') & kiemTra.kiemTraRong(nv.matKhau, 'tbMatKhau', 'Mật khẩu') & kiemTra.kiemTraRong(nv.ngayLam, 'tbNgayLam', 'Ngày làm') & kiemTra.kiemTraRong(nv.luongCoBan, 'tbLuongCB', 'Lương cơ bản') & kiemTra.kiemTraRong(nv.gioLam, 'tbGiolam', 'Giờ làm');
        //kiểm tra độ dài taiKhoan
        valid = valid & kiemTra.kiemTraSo(nv.taiKhoan, 'kiemTraDoDai', 'Tài Khoản');
        // //kiểm tra tên : phải là chữ
        valid = valid & kiemTra.kiemTraKyTu(nv.hoTen, 'kiemTraKiTu', 'Họ tên nhân viên');
        // //kiểm tra Email
        valid = valid & kiemTra.kiemTraEmail(nv.email, 'kiemTraEmail', 'Email');
        // //kiểm tra mặt khẩu
        valid = valid & kiemTra.kiemTraMatKhau(nv.matKhau, 'tbDinhDangMatKhau', 'Mật Khẩu ');
        // //kiểm tra định dạng ngày
        valid = valid & kiemTra.isValidDate(nv.ngayLam, 'tbDinhDangNgayLam', 'Ngày làm');
        // //kiểm tra lương
        valid = valid & kiemTra.kiemTraLuong(nv.luongCoBan, 'tbLuong1ty', 'Lương cơ bản')
        // //kiểm tra chức vụ
        valid = valid & kiemTra.kiemTraChucVu(nv.chucVu, 'tbDinhDangChucVu', 'Chức Vụ');
        // kiểm tra số giờ
        valid = valid & kiemTra.kiemTraGio(nv.gioLam, 'tbKiemTraGiolam', 'Số giờ')
        // mangNhanVien.push(nv);
      // sai bét  valid = valid & kiemTraSoTaiKhoan(nv.taiKhoan,'kiemTraSoTaiKhoan'mangNhanVien)
        if (!valid) {
            return;
        }
        mangNhanVien.push(nv);
    }
    renderTableNhanVien(mangNhanVien);
    //lưu mảng sinh vien vào store
    saveLocalStrage();
}

document.getElementById('btnCapNhat').onclick = function () {// cập nhật nhân viên
    //input : lấy thông tin người dùng từ giao diện đưa vào object
    var nvEdit = new NhanVien();
    nvEdit.taiKhoan = document.getElementById('tknv').value;
    nvEdit.hoTen = document.getElementById('name').value;
    nvEdit.email = document.getElementById('email').value;
    nvEdit.matKhau = document.getElementById('password').value;
    nvEdit.ngayLam = document.getElementById('datepicker').value;
    nvEdit.luongCoBan = document.getElementById('luongCB').value;
    nvEdit.chucVu = document.getElementById('chucVu').value;
    nvEdit.gioLam = document.getElementById('gioLam').value;
    nvEdit.tongLuong = nvEdit.tinhLuong().toLocaleString();
    nvEdit.loaiNhanVien = nvEdit.xepLoai();
    {//kiểm tra dữ liệu đầu vào 
        var valid = true;
        valid = kiemTra.kiemTraRong(nvEdit.taiKhoan, 'tbTKNV', 'Tài Khoản') & kiemTra.kiemTraRong(nvEdit.hoTen, 'tbTen', 'Tên Nhân viên') & kiemTra.kiemTraRong(nvEdit.email, 'tbEmail', 'Email') & kiemTra.kiemTraRong(nvEdit.matKhau, 'tbMatKhau', 'Mật khẩu') & kiemTra.kiemTraRong(nvEdit.ngayLam, 'tbNgayLam', 'Ngày làm') & kiemTra.kiemTraRong(nvEdit.luongCoBan, 'tbLuongCB', 'Lương cơ bản') & kiemTra.kiemTraRong(nvEdit.gioLam, 'tbGiolam', 'Giờ làm');

        //kiểm tra độ dài taiKhoan
        valid = valid & kiemTra.kiemTraSo(nvEdit.taiKhoan, 'kiemTraDoDai', 'Tài Khoản');
        // //kiểm tra tên : phải là chữ
        valid = valid & kiemTra.kiemTraKyTu(nvEdit.hoTen, 'kiemTraKiTu', 'Họ tên nhân viên');
        // //kiểm tra Email
        valid = valid & kiemTra.kiemTraEmail(nvEdit.email, 'kiemTraEmail', 'Email');
        // //kiểm tra mặt khẩu
        valid = valid & kiemTra.kiemTraMatKhau(nvEdit.matKhau, 'tbDinhDangMatKhau', 'Mật Khẩu ');
        // //kiểm tra định dạng ngày
        valid = valid & kiemTra.isValidDate(nvEdit.ngayLam, 'tbDinhDangNgayLam', 'Ngày làm');
        // //kiểm tra lương
        valid = valid & kiemTra.kiemTraLuong(nvEdit.luongCoBan, 'tbLuong1ty', 'Lương cơ bản')
        // //kiểm tra chức vụ
        valid = valid & kiemTra.kiemTraChucVu(nvEdit.chucVu, 'tbDinhDangChucVu', 'Chức Vụ');
        // kiểm tra số giờ
        valid = valid & kiemTra.kiemTraGio(nvEdit.gioLam, 'tbKiemTraGiolam', 'Số giờ')

        if (!valid) {
            return;
        }
    }
    //tìm ra sinh viên trong mảng => duyệt mảng lấy mã so sánh
    for (var index = 0; index < mangNhanVien.length; index++) {
        if (mangNhanVien[index].taiKhoan === nvEdit.taiKhoan) {
            mangNhanVien[index].taiKhoan = nvEdit.taiKhoan;
            mangNhanVien[index].hoTen = nvEdit.hoTen;
            mangNhanVien[index].email = nvEdit.email;
            mangNhanVien[index].matKhau = nvEdit.matKhau;
            mangNhanVien[index].ngayLam = nvEdit.ngayLam;
            mangNhanVien[index].luongCoBan = nvEdit.luongCoBan;
            mangNhanVien[index].chucVu = nvEdit.chucVu;
            mangNhanVien[index].gioLam = nvEdit.gioLam;
            mangNhanVien[index].tongLuong = nvEdit.tinhLuong().toLocaleString();
            mangNhanVien[index].loaiNhanVien = nvEdit.xepLoai();
            break;
        }
    }
    //gọi hàm render 
    renderTableNhanVien(mangNhanVien);
    //lưu store sau khi thay đổi
    saveLocalStrage();
    //lưu xong mới bật 2 nút button 'thêm nhân viên ' và input value, taiKhoan ( để tránh trùng lặp mã)
    document.getElementById('tknv').disabled = false;
    document.getElementById('btnThemNV').disabled = false;
}

document.getElementById('searchName').oninput = function () {//tìm kiếm nhân viên
    var tuKhoa = document.getElementById('searchName').value;//input
    tuKhoa = stringToslug(tuKhoa);
    var mangNhanVienSearch = [];
    for (var index = 0; index < mangNhanVien.length; index++) {
        var nv = mangNhanVien[index];
        var loaiNhanVien = stringToslug(nv.loaiNhanVien);
        if (loaiNhanVien.search(tuKhoa) !== -1) {
            mangNhanVienSearch.push(nv);
        }
    }
    renderTableNhanVien(mangNhanVienSearch);
}

document.getElementById('btnDong').onclick = function () {//đóng table
    document.querySelector('.modal').style = 'display: none;';
}

function layStore() {
    if (localStorage.getItem('mangNhanVien')) {
        var stringMangNhanVien = localStorage.getItem('mangNhanVien');//lấy ra mangNhanVien = chuỗi ;stringMangNhanVien  hứng lấy nó
        //chuyển dữ liệu string về dạng object để có thể sử lý gán vào mangNhanVien
        mangNhanVien = JSON.parse(stringMangNhanVien);
        //gọi hàm tạo giao diện từ mảng
        renderTableNhanVien(mangNhanVien);
    }
}
layStore();