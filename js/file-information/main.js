$(document).ready(function(){
   

    $(".blur-title").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-title");
     }
     else{
         $(this).next().addClass("blurLabel-title");
     }
     
    })
    $(".blur-category").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-category");
     }
     else{
         $(this).next().addClass("blurLabel-category");
     }
     
    })
    $(".blur-format").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-format");
     }
     else{
         $(this).next().addClass("blurLabel-format");
     }
     
    })
    $(".blur-size").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-size");
     }
     else{
         $(this).next().addClass("blurLabel-size");
     }
     
    })
    $(".blur-code").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-code");
     }
     else{
         $(this).next().addClass("blurLabel-code");
     }
     
    })
    $(".blur-nick-name").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-nick-name");
     }
     else{
         $(this).next().addClass("blurLabel-nick-name");
     }
     
    })
    $(".blur-price").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-price");
     }
     else{
         $(this).next().addClass("blurLabel-price");
     }
     
    })
    $(".blur-link-text").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-link-text");
     }
     else{
         $(this).next().addClass("blurLabel-link-text");
     }
     
    })
    // $(".blur-platform").blur(function(){
    //     if(!$(this).val()){
    //     $(this).next().removeClass("blurLabel-platform");
    //  }
    //  else{
    //      $(this).next().addClass("blurLabel-platform");
    //  }
     
    // })
    
    $("#render").focus(function(){
        $(".floating-label-render").css("display","block")
    })
    $("#render").blur(function(){
        if($("#render-option").is(":selected")){
            $(".floating-label-render").css("display","none");
         }
         else{
             $(".floating-label-render").css("display","block");
         }
    })
    $("#platform").focus(function(){
        $(".floating-label-platform").css("display","block")
    })
    $("#platform").blur(function(){
        if($("#platform-option").is(":selected")){
            $(".floating-label-platform").css("display","none");
         }
         else{
             $(".floating-label-platform").css("display","block");
         }
    })

    $("#style").focus(function(){
        $(".floating-label-style").css("display","block")
    })
    $("#style").blur(function(){
        if($("#style-option").is(":selected")){
            $(".floating-label-style").css("display","none");
         }
         else{
             $(".floating-label-style").css("display","block");
         }
    })

    var height=$(".abilities").height();
    $(".abilities").change(function(){
        
          
           console.log(height)
        if($(this).val().length>3){
          $(".select2-selection").css("height",2*height);
          flag=1;
        }
        else if($(this).val().length<=3){
           
            $(".select2-selection").css("height",height/2)
            flag=0;
        }
    })

    $(".abilities").on("select2:open",function(){
  
      $(".floating-label-abilities").addClass("blurLabel-abilities")
    })
    $(".abilities").on("select2:close",function(){
        console.log($(this).val().length)
            if($(this).val().length>0){
                
                $(".floating-label-abilities").addClass("blurLabel-abilities")
            }
            else{
               
                $(".floating-label-abilities").removeClass("blurLabel-abilities")
            }
        
    })
    
    $("#link-text").change(function(){
    $("#img-preview").attr("src",$(this).val())    
    })
      //validations 
$("#regist-file-information").click(function(e){
   
    var reLink = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    // console.log(reLink.test($("#link-text").val()))
    if(!$("#title").val()||!$("#category").val()|!$("#format").val()||!$("#size").val()||!$("#code").val()||!$("#nick-name").val()||!$("#link-text").val()){
        e.preventDefault();
        $("html,body").animate({scrollTop:0},500)
        $(".vali").css("display","block")
        $(".valiWhole").text("لطفاً فیلد های ستاره دار را پر کنید")
    }
    else if(!$("#material-has").is(":checked") && !$("#material-doesnt-have").is(":checked")){
      
        e.preventDefault();
        $("html,body").animate({scrollTop:0},500)
        $(".vali").css("display","block")
        $(".valiWhole").text("لطفاً فیلد های ستاره دار را پر کنید")
    }
    else if(!$("#active").is(":checked") && !$("#non-active").is(":checked")){
      
        e.preventDefault();
        $("html,body").animate({scrollTop:0},500)
        $(".vali").css("display","block")
        $(".valiWhole").text("لطفاً فیلد های ستاره دار را پر کنید")
    }
    else if(reLink.test($("#link-text").val())===false){
 
        e.preventDefault();
        $("html,body").animate({scrollTop:0},500)
        $(".vali").css("display","block")
        $(".valiWhole").text("لینک دانلود وارد شده صحیح نیست")
    }
})

//     $('.buttonLoc').click(function(e){
       
//         var name=$("#name-family").val();

//   var password=$("#password").val();
//   var reName = /^([^0-9]*)$/;
//   var reNumber=/^[0-9]*$/;
//   var time=$("#membership-time").val();
//   var mail=$("#email").val();
//   var reMobile=/^0{1}(?:[0-9] ?){6,14}[0-9]$/;
//   var mobile=$("#mobile").val();
//   var date=$("#membership-date").val();
 
//   var reDate = /^\d{4}\/\d{2}\/\d{2}$/ ;
//   var reMail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   var rePass = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|(?=.*[a-z])(?=.*[!@#\$%\^&\*])|(?=.*[A-Z])(?=.*[!@#\$%\^&\*]))(?=.{8,})");
//         if(!$("#mobile").val()){
//             e.preventDefault();
//             $(".vali").css("display","block")
//             $(".valiWhole").text("لطفاً فیلد  ستاره دار را پر کنید")
//             $("html,body").animate({scrollTop:0})
//             $(".vali").removeClass("vali-password")
//         }
//         // else if ($('input[name=gender]:checked').length==0){
//         //     e.preventDefault();
//         //     $(".vali").css("display","block")
//         //     $(".valiWhole").text("لطفاً جنسیت را مشخص کنید")
//         //     $("html,body").animate({scrollTop:0})
//         //     $(".vali").removeClass("vali-password")
//         // }
//         else if($("#name-family").val()&&reName.test(name)==false){
//             e.preventDefault();
//            $(".vali").css("display","block")
//            $(".valiWhole").text("نام و نام خانوادگی نمیتواند شامل عدد باشد")
//            $("html,body").animate({scrollTop:0})
//            $(".vali").removeClass("vali-password")
//         }
//         else if($("#email").val()&&reMail.test(mail)==false)
// {
//   e.preventDefault();
//   $(".vali").css("display","block")
//   $(".valiWhole").text("ایمیل وارد شده صحیح نیست")
//   $("html,body").animate({scrollTop:0})
//   $(".vali").removeClass("vali-password")
// }
// else if(reMobile.test(mobile)==false||mobile.length!=11){
//     e.preventDefault();
//     $(".vali").css("display","block")
//     $(".valiWhole").text("شماره تلفن همراه صحیح نیست")
//     $("html,body").animate({scrollTop:0})
//     $(".vali").removeClass("vali-password")
//   }
//   else if ($("#password").val()&&rePass.test(password)==false){
//     e.preventDefault();
//     $(".vali").css("display","block")
//     $(".valiWhole").text("رمز عبور باید حداقل 8 حرف شامل حداقل 1 حرف بزرگ و یا 1 عدد و یا 1 کاراکتر خاص مانند !@#$%^& باشد")
//     $(".vali").addClass("vali-password")
//     $("html,body").animate({scrollTop:0})
//   }
// //   else if($("#state-option").is(":selected")){
// //     e.preventDefault();
// //     $(".vali").css("display","block")
// //     $(".valiWhole").text("لطفاً استان را مشخص کنید")
// //     $("html,body").animate({scrollTop:0})
// //     $(".vali").removeClass("vali-password")
// //   }
//   else if($("#membership-time").val()&&reNumber.test(time)==false){
//     e.preventDefault();
//     $(".vali").css("display","block")
//     $(".valiWhole").text("مدت عضویت باید عدد باشد")
//     $("html,body").animate({scrollTop:0})
//     $(".vali").removeClass("vali-password")
//   }
//   else if($("#membership-date").val()&&reDate.test(date)==false){
//     e.preventDefault();
//     $(".vali").css("display","block")
//     $(".valiWhole").text("تاریخ عضویت صحیح نیست")
//     $("html,body").animate({scrollTop:0})
//     $(".vali").removeClass("vali-password")
//   }

//         // else if(reMobile.test(mobile)==false||mobile.length!=11){
            
//         //     e.preventDefault();
//         //     $(".vali").css("display","block")
//         //     $(".valiWhole").text("شماره تلفن همراه صحیح نیست")
//         //     $("html,body").animate({scrollTop:0})
//         //   }
//         //  else if($("#password").val().length<8){
//         //     e.preventDefault();
//         //     $(".vali").css("display","block")
//         //     $(".valiWhole").text("رمز عبور حداقل باید 8 رقم باشد")
//         //     $("html,body").animate({scrollTop:0})
//         //  }
        
// })
})