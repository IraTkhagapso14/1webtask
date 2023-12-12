$(document).ready(function () {
    $(".forms").submit(function (e) {
        e.preventDefault();
        var href = $(this).attr("action");
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: form_data,
            success: function (response) {
                if(response.status == "success"){
                alert("Выполнено");
                } else{
                    alert ("Не выполнено: " + response.message);
                }
            },
            error: function () {
                alert("Вы уже отправляли это сообщение. ");
            }
        });
    });
});
