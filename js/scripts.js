$(function() {
  $("h2.java").click(function(){
    $("p.java").toggle();
    $("h2.java").toggle();
    $(".java").toggleClass("background");

  });
  $("p.java").click(function(){
    $("h2.java").toggle();
    $("p.java").toggle();
    $(".java").toggleClass("background");
  });

  $("h2.operation").click(function(){
    $("p.operation").toggle();
    $("h2.operation").toggle();
  });

  $("p.operation").click(function(){
    $("h2.operation").toggle();
    $("p.operation").toggle();
  });

  $("h2.variable").click(function(){
    $("p.variable").toggle();
    $("h2.variable").toggle();
  });
  $("p.variable").click(function(){
    $("h2.variable").toggle();
    $("p.variable").toggle();
  });

  $("h2.vnc").click(function(){
    $("p.vnc").toggle();
    $("h2.vnc").toggle();
  });
  $("p.vnc").click(function(){
    $("h2.vnc").toggle();
    $("p.vnc").toggle();
  });

  $("h2.functions").click(function(){
    $("p.functions").toggle();
    $("h2.functions").toggle();
  });
  $("p.functions").click(function(){
    $("h2.functions").toggle();
    $("p.functions").toggle();
  });

  $("h2.methods").click(function(){
    $("p.methods").toggle();
    $("h2.methods").toggle();
  });
  $("p.methods").click(function(){
    $("h2.methods").toggle();
    $("p.methods").toggle();
  });

  $("h2.arguements").click(function(){
    $("p.arguements").toggle();
    $("h2.arguements").toggle();
  });
  $("p.arguements").click(function(){
    $("h2.arguements").toggle();
    $("p.arguements").toggle();
  });

  $("h2.parameters").click(function(){
    $("p.parameters").toggle();
    $("h2.parameters").toggle();
  });
  $("p.parameters").click(function(){
    $("h2.parameters").toggle();
    $("p.parameters").toggle();
  });

  $("h2.return").click(function(){
    $("p.return").toggle();
    $("h2.return").toggle();
  });
  $("p.return").click(function(){
    $("h2.return").toggle();
    $("p.return").toggle();
  });

  $("h2.chains").click(function(){
    $("p.chains").toggle();
    $("h2.chains").toggle();
  });
  $("p.chains").click(function(){
    $("h2.chains").toggle();
    $("p.chains").toggle();
  });

  $("h2.strings").click(function(){
    $("p.strings").toggle();
    $("h2.strings").toggle();
  });
  $("p.strings").click(function(){
    $("h2.strings").toggle();
    $("p.strings").toggle();
  });
});
