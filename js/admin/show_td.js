var id_str = location.search.replace('id=', '')[1];

function deldata() {
  $.ajax({
    type: "POST",
    url: "php/del_dt.php",
    data: { id: id_str },
    dataType: "JSON",
    success: function (response) {
      window.location = "index_admin.php"
    }
  });
}

function stsdata() {
  $.ajax({
    type: "GET",
    url: "../admin/php/show_dt.php",
    dataType: "JSON",
    success: function (response) {
      var count = response.length;

      for (var i = 0; i < count; i++) {
        var dtnstr = '<tr>' +
          '<td>' + response[i].ttl + '</td>' +
          '<td><a href="edit_data.php?id=' + response[i].id + '"><i class="mdi mdi-border-color" ></i></a>' +
          '<a href="index_admin.php?id=' + response[i].id + '"><i class="mdi mdi-delete"></i></a></td>' +
          '</tr>';
        $('.list_dt').append(dtnstr);
      }
    },
    error: function (response) {
      if (response.status == 0) {
        alert("ERROR");
      }
    }
  });
}

$(document).ready(function () {
  stsdata();
  deldata();
});
