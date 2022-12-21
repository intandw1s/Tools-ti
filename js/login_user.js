function vlogin() {
    if ($("#c_uname").val() != 0 && $("#c_password").val() != 0) {
      $.ajax({
        type: "POST",
        url: "",
        data: {
          user: $("#c_uname").val(),
          pass: $("#c_password").val()
        },
        dataType: "JSON",
        success: function (response) {
          if (response.status == 1) {
            if (response.role == 1) {
              window.location = "";
            } else {
              window.location = "";
            }
          }
        },
        error: function () {
          alert(response.error)
        }
      });
    } else {
      alert("Masukkan tidak valid")
    }
  }
  
  $(document).ready(function () {
    $(".btn.btn-primary.btn-lg").click(function (e) {
      e.preventDefault();
      //vlogin();
      alert("testtimoni");
    });
  });