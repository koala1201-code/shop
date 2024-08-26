function myform_get(url,id,show="show") {
     // e.preventDefault(); // ปิดการใช้งาน submit ปกติ เพื่อใช้งานผ่าน ajax
 
        // ส่งค่าแบบ POST ไปยังไฟล์ show_data.php
       var form = $("#"+id)[0];

      
       // Create an FormData object
        var data = new FormData(form);
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: url,
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                $("#"+show).html(data);
                
            },
            error: function (e) {
                   
                $("#"+show).html(e.responseText);
                
               
            }
        });
    }
    
function myform() {
$(".myform").on("submit",function(e){
  e.preventDefault(); // ปิดการใช้งาน submit ปกติ เพื่อใช้งานผ่าน ajax
  block_ui();
        // ส่งค่าแบบ POST ไปยังไฟล์ show_data.php
       var form = $(this)[0];

      
       // Create an FormData object
        var data = new FormData(form);
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: $(this).children('input.link').val(),
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {

                $("#show").html(data);
                $.unblockUI();
               // console.log("SUCCESS : ", data);
               // $("#btnSubmit").prop("disabled", false);

            },
            error: function (e) {
                   $.unblockUI();
                $("#show").html(e.responseText);
                
               // console.log("ERROR : ", e);
               // $("#btnSubmit").prop("disabled", false);

            }
        });
    });
    }
   
 myform();

 function block_ui(text=false){
  if (text){
  text = text;
  }else{
  text = "กรุณารอสัครู่...";
  }
      $.blockUI({ message: "<i class='fa fa-refresh fa-pulse' style='font-size:200%'></i><br>"+text, 
      css: { 
          border: 'none', 
            backgroundColor: '#00000000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            //opacity: .5, 
            color: '#fff' 
        }
      }); 
    }
    
    function alert(text, status, title){
  if ('success'== status){
      if (!title){
var title = "สำเร็จ";
}
  }else if ('error'== status){
      if (!title){
var title = "ผิดพลาด";
}
  }else if ('warning'== status){
      if (!title){
var title = "คำเตื่อน";
}
  }
      Swal.fire({
  type: status,
  title: title,
  html: text,
  showConfirmButton: true,
  confirmButtonColor: 'red',
  confirmButtonText: 'ตกลง',
  allowOutsideClick: false
  //footer: '<a href>Why do I have this issue?</a>'
})
    }

function copy() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
 
swal({
            title: 'คัดลอกสำเร็จ',
            text: '',
            icon: 'success',
    button: 'OK',
      });

}

function alert_link( tex=false, status=false, link=""){
    
    if ('success'== status){
      if (!title){
var title = "สำเร็จ";
}
  }else if ('error'== status){
      if (!title){
var title = "ผิดพลาด";
}
  }else if ('warning'== status){
      if (!title){
var title = "คำเตื่อน";
}
  }
  
 if (!title){
    title='สำเร็จ';
    status='success';
    } 
     Swal.fire({
    
  title: title,
  html: tex,
  type: status,
  showCancelButton: false,
  confirmButtonColor: 'green',
  confirmButtonText: 'ตกลง',
  allowOutsideClick: false
}).then((result) => {
  if (result.value) {
  window.location= link;
    }
})

}

