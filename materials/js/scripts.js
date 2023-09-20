

$("#fullName").keyup(function(){
    if ($("#fullName").val()) {
        console.log($("#fullName").val())
        $("#submit").show()
    } else {
        $("#submit").hide()
    }
    
})