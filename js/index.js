$(document).ready(function() {
    var i = 1; 
    $("#myBtn").click(function() {
        $("#myModal").modal();
    }); 
    function KiemtraMa(){
        var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        if ($("#txtMa").val()==""){
            $("#tbMa").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtMa").val())) { 
            $("#tbMa").html("* ma tour theo mau: XXX-XXX-00-0000"); 
            return false;
        } 
            $("#tbMa").html("*");
            return true;
        } 
        $("#txtMa").blur(KiemtraMa);

        function KiemtraDD() { 
            if ($("#txtDiemDen").val() == "") { 
                $("#tbDiemDen").html("* bắt buộc nhập"); 
                return false; 
                } 
                $("#tbDiemDen").html("*"); 
                return true; 
                } 
        $("#txtDiemDen").blur(KiemtraDD); 

        function KiemtraNgayKH() {
            if($("#txtNgay").val() == "") {
                $("#tbNgay").html("Không được để trống");
                return false;
            }
            var day = new Date(S("#txtNgay").val());
            var today = new Date(); 
            today.setDate(today.getDate() + 30); 
            if (day < today){
                $("#tbNgay").html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày"); 
                return false; 
            } 
            $("#tbNgay").html("*");
            return true; 
        }
        $("#txtNgay").blur(KiemtraNgayKH);

        function KiemtraGia(){
            var re = /^[1-9][0-9]*$/
            var gia = $("#txtGia").val();
            if (gia == "") {
                $("#tbGia").html("bắt buộc nhập");
                return false;
            }
            if(isNaN(gia)){
                $("#tbGia").html("Phải nhập số");
                return false;
            }
            if(eval(gia) < 0){
                $("#tbGia").html("Phải nhập số > 0");
                return false;
            }
            $("#tbGia").html("*");
            return true;
        }
        $("txtGia").blue(KiemtraGia);

        $("#btnSave").click(function(){
            if(!KiemtraMa() || !KiemtraGia() || !KiemtraDD() || !KiemtraNgayKH()){
                $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
                return false;
            }
        var matour = $("#txtMa").val();
        var diemden = $("#txtDiemDen").val();
        var ngaykh = $("#txtNgay").val();
        var tg = $("#txtTG").val();
        var gia = $("#txtGia").val();
        var anh = $("#txtAnh").val().substring(12);
        var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + diemden + "</td><td>" + ngaykh + "</td><td>" +
        tg + "</td><td>" + gia + "</td><td>" + anh + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
        })
})
 
