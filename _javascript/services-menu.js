 $(document).ready(function(){

  var servicesSections = $("[id^='service-section-']");
  servicesSections.not("[id='service-section-description']").hide();

  var services = $("[name^='service-section-']");


services.click(function(){
 services.removeClass('active-link');
 $(this).addClass('active-link');
 servicesSections.hide();
 $('#' + $(this).attr('name')).fadeIn();
 $('#' + $(this).attr('name')).goTo();
});

$("[data-role='back-to-menu']").click(function(){$("#section-menu").goTo();});
 });

