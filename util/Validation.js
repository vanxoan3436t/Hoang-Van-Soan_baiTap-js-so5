
//kiểm tra họ tên
function Validation() {

    // this.kiemTraSoTaiKhoan = function (value, idError, arr) {
    //     for (var index = 0; index < arr.length; index++) {
    //         if (arr[index] == value) {
    //             break;

    //         }
    //         document.getElementById(idError).innerHTML = value + ' đã tồn tại!';
    //         return false;
    //     }
    //     document.getElementById('kiemTraSoTaiKhoan').innerHTML = '';
    //     return true;
    // }


    this.kiemTraRong = function (value, idError, name) {//kiểm tra không để input bị trống
        if (value.trim() === '') {
            document.getElementById(idError).innerHTML = `${name} không được bỏ trống !`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraSo = function (value, idError, name) {//Kiểm tra tài khoản
        var regexNumber = /^[0-9]{4,6}$/;
        if (regexNumber.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} từ 4 - 6 ký số!`;
        return false;
    }
    this.kiemTraKyTu = function (value, idError, name) {//kiểm tra Tên dùng cho cả tiếng Việt
        var regexLetter = /^[A-Z a-z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
        if (regexLetter.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} phải là chữ !`;
        return false;
    }
    this.kiemTraEmail = function (value, idError, name) {//kiểm tra email
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regexEmail.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} phải đúng định dạng!`;
        return false;
    }
    this.kiemTraMatKhau = function (value, idError, name) {//kiểm tra mật khẩu
        var regexPassword = /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~*]{6,10}$/;
        if (regexPassword.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name}từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)`;
        return false;
    }
    this.isValidDate = function (date, idError, name) { //kiểm tra ngày làm--xác thực định dạng MM/DD/YYYY : tháng ngày năm 
        var temp = date.split('/');
        var d = new Date(temp[2] + '/' + temp[0] + '/' + temp[1]);
        if (d && (d.getMonth() + 1) == temp[0] && d.getDate() == Number(temp[1]) && d.getFullYear() == Number(temp[2])) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name}  định dạng mm/dd/yyyy!(Tháng/Ngày/Năm)`;
        return false;
    }
    this.kiemTraLuong = function (value, idError, name) {//Kiểm tra lương
        var min = 1e+6;
        var max = 20E+6;
        if (value < min || value > max) {
            document.getElementById(idError).innerHTML = `${name} từ 1 000 000 - 20 000 000`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;

    }
    this.kiemTraChucVu = function (value, idError, name) {//kiểm tra chức vụ
        if (value === '0') {
            document.getElementById(idError).innerHTML = `${name} chọn chức vụ hợp lệ!`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraGio = function (value, idError, name) {//kiểm tra giờ làm
        if (value < 80 || value > 200) {
            document.getElementById(idError).innerHTML = `${name} làm phải trong tháng từ 80 - 200 giờ!`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
}