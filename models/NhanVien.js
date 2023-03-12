
//Định nghĩa prototype NhanVien
function NhanVien() {
    this.taiKhoan = '',
        this.hoTen = '',
        this.email = '',
        this.matKhau = '',
        this.ngayLam = '',
        this.luongCoBan = '',
        this.chucVu = '',
        this.gioLam = '',
        this.tongLuong = 0,
        this.loaiNhanVien = '',

        this.tinhLuong = function () {
            output = 0;

            if (this.chucVu === 'Sếp') {
                return output = (this.luongCoBan * 3).toLocaleString();
            } else if (this.chucVu === 'Trưởng phòng') {
                return output = (this.luongCoBan * 2).toLocaleString();
            } else {
                this.chucVu === 'Nhân viên';
                return output = (this.luongCoBan * 1).toLocaleString();// nhân 1 .toLocaleString() mới hoạt động h mới biết luôn
            }
        }

    this.xepLoai = function () {
        output = '';
        if (this.gioLam >= 192) {
            return output = 'nhân viên xuất sắc';
        } else if (this.gioLam >= 176) {
            return output = 'nhân viên giỏi';
        } else if (this.gioLam >= 160) {
            return output = 'nhân viên khá';
        } else {
            this.gioLam < 160;
            return output = 'nhân viên trung bình';
        }
    }

}

