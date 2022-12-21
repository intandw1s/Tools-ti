var id_str = location.search.replace('id=', '')[1];
var iddnt = decodeURI(id_str);

function upfoto() {
  $('input[type=file]').change(function (e) {
    e.preventDefault();
    var file = document.querySelector('input[type=file]').files[0];
    //var src = file.createObjectURL();
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      // browser completed reading file - display it
      var setfp = e.target.result;

      $('.pic').attr('src', setfp);


    }
  });
}

function adddata() {
  var title = $('#title_story').val();
  var str = $('#story').val();
  var file_data = $('#img_txt').prop('files')[0];
  var form_data = new FormData();
  form_data.append('id', id_str);
  form_data.append('title', title);
  form_data.append('story', str);
  form_data.append('file', file_data);

  if ($('#title_story').val() && $('#story').val() && $('#img_txt').val()) {
    $.ajax({
      type: "POST",
      url: "php/edit_dt.php",
      data: form_data,
      cache: false,
      contentType: false,
      processData: false,
      dataType: "JSON",
      success: function (response) {
        if (response.status == 1) {
          alert('Success');
          history.go(0);
        } else {
          alert("Error");
        }
      }
    });
  } else {
    alert("Input not valid")
  }
}


function strdata() {
  $.ajax({
    type: "POST",
    url: "../admin/php/show_data_1.php",
    dataType: "JSON",
    data: { dnt: id_str },
    success: function (response) {
      var count = response.length;

      for (var i = 0; i < count; i++) {
        $('#title_story').attr('value', response[i].ttl);
        $('#story').html(response[i].str);
        $('.pic').attr('src', '../admin/assets/images/list/' + response[i].img);
        //$('#img_txt').val('admin/' + response[i].img);


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

  upfoto();
  //$('input[type=file]').val("Test")
  strdata();
  $("#form_edit_dt").submit(function (e) {
    e.preventDefault();
    adddata();
  });
});