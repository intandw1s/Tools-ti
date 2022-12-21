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
  //var fp = document.querySelector('input[type=file]').files[0].name;
  var file_data = $('#img_txt').prop('files')[0];
  var form_data = new FormData();
  form_data.append('title', title);
  form_data.append('story', str);
  //form_data.append('fp', fp);
  form_data.append('file', file_data);

  if ($('#title_story').val() != 0 && $('#story').val() != 0 && $("#img_txt").val() != 0) {
    $.ajax({
      type: "POST",
      url: "php/add_dt.php",
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

$(document).ready(function () {
  upfoto();
  $("#form_add_dt").submit(function (e) {
    e.preventDefault();
    adddata();
  });
});