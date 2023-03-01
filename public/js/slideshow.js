 /*<![CDATA[*/
 $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "regex Mở rộng"
    );


    $("#frm-reg-email").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: {
                required: 'không được để trống',
                email: 'Email không đúng định dạng',
            }
        },
        showErrors: function (errorMap, errorList) {
            // Clean up any tooltips for valid elements
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "")
                        .removeClass("has-error")
                        .tooltip("destroy");
            });
            // Create new tooltips for invalid elements
            $.each(errorList, function (index, error) {

                var $element = $(error.element);
                $element.tooltip("destroy")
                        .data("title", error.message)
                        .addClass("has-error")
                        .tooltip({
                            template: '<div class=" alert alert-danger alert-error"><div class="arrow"></div><span class="glyphicon glyphicon-exclamation-sign"></span><span class="sr-only"></span><span class="tooltip-inner"></span></div>'
                        });
            });
        },
        submitHandler: function (form) {
            $.ajax({
                url: form.action,
                type: form.method,
                async: false,
                contentType: false,
                processData: false,
                data: new FormData($(form).get(0)),
                dataType: 'json',
                success: function (response) {
                    if (response.code == -1) {
                        errorHandler(response);
                    } else {
                        $("#frm-send-contact :input").each(function(){
                            $(this).val('');
                        });
                        successHandler(response);
                    }
                },
                error: function (response, json, errorThrown) {
                    errorHandler(response);
                }
            });
        }
    });/*]]>*/

     