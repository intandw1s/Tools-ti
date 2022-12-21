function vlogin() {
  if ($("#c_uname").val() != 0 && $("#c_password").val() != 0) {
    $.ajax({
      type: "POST",
      url: "php/user/login.php",
      data: {
        user: $("#c_uname").val(),
        pass: $("#c_password").val()
      },
      dataType: "JSON",
      success: function (response) {
        if (response.status == 1) {
          window.location.href = "index.php"
        } else {
          alert("Invalid Input")
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
  $("#form_login_user").submit(function (e) {
    e.preventDefault();
    vlogin()
  });
});