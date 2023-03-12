
function saveLocalStrage() {//viết hàm lưu trữ dữ liệu vào localstorage :chỉ với ofject
    var stringMangNhanVien = JSON.stringify(mangNhanVien);
    //B2 :lưu vào localstorage
    localStorage.setItem('mangNhanVien', stringMangNhanVien);//localStorage.setItem : là phương thức đc hỗ trợ để lưu của trình duyệt
}

function renderTableNhanVien(arrNhanVien) {//hàm thêm nhân viên lên giao diện
    var htmlString = '';
    for (var index = 0; index < arrNhanVien.length; index++) {
        var nv = arrNhanVien[index];
        htmlString += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td><button class="btn btn-danger" onclick="xoaTaiKhoanNhanVien('${nv.taiKhoan}')">Xoá</button> </td>
        <td><button class="btn btn-success" onclick="layThongTin('${nv.taiKhoan}')">Chỉnh sửa</button> </td>
        </tr>
        `
    }
    document.getElementById('tableDanhSach').innerHTML = htmlString;
    return htmlString;
}

function layThongTin(soTaiKhoanClick) {// chỉnh sửa nhân viên : bị ấn 2 lần 
    if (document.querySelector('body').classList.toggle('modal-open') & document.querySelector('#myModal').classList.toggle('show')) {//làm hiện table mà mò không dc như mẫu
        document.querySelector('.modal').style = 'display: block; transition: all 0.5s;';
    }
    document.getElementById('tknv').disabled = true;
    document.getElementById('btnThemNV').disabled = true;

    for (var index = 0; index < mangNhanVien.length; index++) {
        if (mangNhanVien[index].taiKhoan === soTaiKhoanClick) {
            //in thông tin sinh viên tìm thấy trên giao diện
            document.getElementById('tknv').value = mangNhanVien[index].taiKhoan;
            document.getElementById('name').value = mangNhanVien[index].hoTen;
            document.getElementById('email').value = mangNhanVien[index].email;
            document.getElementById('password').value = mangNhanVien[index].matKhau;
            document.getElementById('datepicker').value = mangNhanVien[index].ngayLam;
            document.getElementById('luongCB').value = mangNhanVien[index].luongCoBan;
            document.getElementById('chucVu').value = mangNhanVien[index].chucVu;
            document.getElementById('gioLam').value = mangNhanVien[index].gioLam;
            break;
        }
    }

}

function xoaTaiKhoanNhanVien(maNVClick) {//kĩ thuật đặt cờ
    //HÀM ĐỂ tìm mangNhanVien.nv.taiKhoan(là tìm vị trí nhân viên đó và xóa đi) và xóa nó đi
    var indexDel = -1;
    for (var index = 0; index < mangNhanVien.length; index++) {
        if (mangNhanVien[index].taiKhoan === maNVClick) {
            indexDel = index;
            break;// tìm dc rồi thì thoát
        }
    }
    //Xoá đi nhân viên tại vị trí đó trong mảng
    mangNhanVien.splice(indexDel, 1);
    //Tạo lại bảng table nhân Viên
    renderTableNhanVien(mangNhanVien);
    // saveLocalStrage();
}

function kiemTraSoTaiKhoan(value, idError) {//
  
    for (var index = 0; index < mangNhanVien.length; index++) {
        if (mangNhanVien[index].taiKhoan = value) {
           break;
        }
        document.getElementById(idError).innerHTML = value + ' đã tồn tại!';
        return false;
    }

    document.getElementById('idError').innerHTML = '';
    return true;
}

function stringToslug(title) {
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug;
}