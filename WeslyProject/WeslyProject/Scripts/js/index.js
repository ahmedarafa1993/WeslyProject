$(document).ready(function () {
    $("#ENEstimatefrm").validate({
        rules:
        {
            ENEstimatefullnameID:
            {
                required: true
            },
            ENEstimatePhoneID:
            {
                required: true,
                min: 0
            },
            ENEstimatePromoCodeID:
            {
                required: true,
                min: 0
            }
        },
        messages: {
            ENEstimatefullnameID:
            {
                required: "Please enter Full Name"
            },
            ENEstimatePhoneID:
            {
                required: "Please enter Phone Number",
                min: "Please enter Numeric Not Digits"
            },
            ENEstimatePromoCodeID:
            {
                required: "Please enter Promo Code",
                min: "Please Enter Numeric Not Digits"
            }
        }
    });

    //$("#ArEstimatefrm").validate({
    //    rules:
    //    {
    //        ArEstimatefullnameID:
    //        {
    //            required: true
    //        },
    //        ArEstimatePhoneID:
    //        {
    //            required: true,
    //            min: 0
    //        },
    //        ArEstimatePromoCodeID:
    //        {
    //            required: true,
    //            min: 0
    //        }
    //    },
    //    messages: {
    //        ArEstimatefullnameID:
    //        {
    //            required: "من فضلك ادخل اسم اسمك بالكامل"
    //        },
    //        ArEstimatePhoneID:
    //        {
    //            required: "من فضلك ادخل رقم الموبيل",
    //            min: "يجب ادخال ارقام ليست حروف"
    //        },
    //        ArEstimatePromoCodeID:
    //        {
    //            required: "من فضلك ادخل رقم البروموكود",
    //            min: "يحب ادخال ارقام ليست حروف"
    //        }
    //    }
    //});

    $("#EnConsultationfrm").validate({
        rules:
        {
            EnConsultationName:
            {
                required: true
            },
            EnConsultationPhone:
            {
                required: true,
                min: 0
            },
            EnConsultationQuestion:
            {
                required: true
            }
        },
        messages: {
            EnConsultationName:
            {
                required: "Please enter Full Name"
            },
            EnConsultationPhone:
            {
                required: "Please enter Phone Number",
                min: "Please enter Numeric Not Digits"
            },
            EnConsultationQuestion:
            {
                required: "Please enter Question"
            }
        }
    });


});

function LoadENFreeEstimate() {

    if (!$("#ENEstimatefrm").valid()) {
        return;
    }
    var dataObj = {
        "name": $("#ENEstimatefullnameID").val(), "email": $("#ENEstimateEmailID").val(), "phone": $("#ENEstimatePhoneID").val(), "message": $("#ENEstimateMessageID").val(), "code": $("#ENEstimatePromoCodeID").val()
    };
    $.ajax({
        datatype: "JSON",
        data: JSON.stringify(dataObj),
        url: "/Home/FreeEstimate",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            alert('hi there');

            $("#ENEstimatefullnameID").val("");
            $("#ENEstimateEmailID").val("");
            $("#ENEstimatePhoneID").val("");
            $("#ENEstimateMessageID").val("");
            $("#ENEstimatePromoCodeID").val("");


        }
    });
}

function LoadArFreeEstimate() {

    if (!$("#ArEstimatefrm").valid()) {
        return;
    }
    var dataObj = {
        "name": $("#ArEstimatefullnameID").val(), "email": $("#ArEstimateEmailID").val(), "phone": $("#ArEstimatePhoneID").val(), "message": $("#ArEstimateMessageID").val(), "code": $("#ArEstimatePromoCodeID").val()
    };
    $.ajax({
        datatype: "JSON",
        data: JSON.stringify(dataObj),
        url: "/Home/FreeEstimate",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            alert('hi there');

            $("#ArEstimatefullnameID").val("");
            $("#ArEstimateEmailID").val("");
            $("#ArEstimatePhoneID").val("");
            $("#ArEstimateMessageID").val("");
            $("#ArEstimatePromoCodeID").val("");


        }
    });
}




function LoadEnConsultation(frmNumber) {
    debugger;
    if (!$("#EnConsultationfrm").valid()) {
        return;
    }
    var dataObj = {
        "name": $("#EnConsultationName").val(),
        "email": $("#EnConsultationEmail").val(),
        "phone": $("#EnConsultationPhone").val(),
        "question": $("#EnConsultationQuestion").val()
    };
    $.ajax({
        datatype: "JSON",
        data: JSON.stringify(dataObj),
        url: "/Home/LoadConsultation",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            //debugger;
            alert('hi there' + result);

            $("#EnConsultationName").val("");
            $("#EnConsultationEmail").val("");
            $("#EnConsultationPhone").val("");
            $("#EnConsultationQuestion").val("");



        }
    });
}