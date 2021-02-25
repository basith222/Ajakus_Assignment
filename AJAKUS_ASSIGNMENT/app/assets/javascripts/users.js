
$( document ).ready(function() {
   $(".send_button").mouseover(function(){$(".send_button").css("background-color","black");});
   $(".send_button").mouseleave(function(){$(".send_button").css("background-color","#00ad5f");});
});

$( document ).click(function() {
  var target_id = event.target.id;
  if (target_id == "user_first_name") {$(".main_form .form_validate_container div").removeClass('create_border');$(".first_name_container").addClass('create_border');$("#first_name_alert").hide(); }
  else if (target_id == "user_last_name") {$(".main_form .form_validate_container div").removeClass('create_border'); $(".last_name_container").addClass('create_border');$("#last_name_alert").hide();}
  else if (target_id == "user_email") {$(".main_form .form_validate_container div").removeClass('create_border');$(".email_container").addClass('create_border');$("#email_alert").hide();}
  else if (target_id == "user_phone_number") {$(".main_form .form_validate_container div").removeClass('create_border');$(".phone_number_container").addClass('create_border');$("#phone_number_alert").hide();}
  else if (target_id == "user_messeage") {$(".main_form .form_validate_container div").removeClass('create_border');$(".messeage_container").addClass('create_border');$("#messeage_alert").hide();}
});

$( document ).mouseover(function() {
   var target_id = event.target.id;
  if (target_id == "first_name_alert"){$("#first_name_aler_messeage").show();}
  if (target_id == "last_name_alert"){$("#last_name_aler_messeage").show();}
  if (target_id == "email_alert"){$("#email_aler_messeage").show();}
  if (target_id == "messeage_alert"){$("#alert_messeage").show();}
});  

$( document ).ready(function() {
$( "#first_name_alert").mouseleave(function(){$("#first_name_aler_messeage").hide();});
$( "#last_name_alert").mouseleave(function(){$("#last_name_aler_messeage").hide();});
$( "#email_alert").mouseleave(function(){$("#email_aler_messeage").hide();});
$( "#messeage_alert").mouseleave(function(){$("#alert_messeage").hide();});
});

  
   
