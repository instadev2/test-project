var url = "https://bfgf9omfe3:j720xznlmn@test-5036837644.eu-central-1.bonsaisearch.net/test/doc/";

$("#submit").click(function() {
    var u = $("#u").val();
    var p = $("#p").val();

    var data = {
        u: u,
        p: p 
    }

    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "authorization": "Basic YmZnZjlvbWZlMzpqNzIweHpubG1u"
        }
      }).then(function(){
        $("#error").show();
    });
});


