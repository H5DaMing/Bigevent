// 去注册框
$(".linkReg").click(function () {
    $(".loginbox").stop().hide();
    $(".regbox").stop().show();
});
// 去登陆框
$(".linklogin").click(function () {
    $(".regbox").stop().hide();
    $(".loginbox").stop().show();
});

// 表单验证
var form = layui.form
form.verify({
    paw:[
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] 
})
console.log(form)