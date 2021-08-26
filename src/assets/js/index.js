//This creates a hover function when moving around the image with the mouse//
$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#black1").show();
  }).mouseout(function(){
    $("#black1").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#black2").show();
  }).mouseout(function(){
    $("#black2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#black3").show();
  }).mouseout(function(){
    $("#black3").hide();
  });
})
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#black4").show();
  }).mouseout(function(){
    $("#black4").hide();
  });
})
$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#black5").show();
  }).mouseout(function(){
    $("#black5").hide();
  });
})
$(document).ready(function(){
  $("#work6").mouseover(function(){
    $("#black6").show();
  }).mouseout(function(){
    $("#black6").hide();
  });
})
$(document).ready(function(){
  $("#work7").mouseover(function(){
    $("#black7").show();
  }).mouseout(function(){
    $("#black7").hide();
  });
})
$(document).ready(function(){
  $("#work8").mouseover(function(){
    $("#black8").show();
  }).mouseout(function(){
    $("#black8").hide();
  });
})
//This function shows text and hides text when clicked on//
$(document).ready(function(){
  $("#design").onclick(function(){
    $("#img-design").show();
  }).click(function(){
    $("#img-design").hide();
  });
})
$(document).ready(function(){
  $("#img-design").click(function(){
    $("#img-design").hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").hide('1500');
    $("#img-design").show('1500');
  });
});
$(document).ready(function(){
  $("#img-development").click(function(){
    $("#img-development").hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").hide('1500');
    $("#img-development").show('1500');
  });
});
$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").hide('1500');
    $("#product-image").show('1500');
  });
});
$(document).ready(function() {
  $("#mc-embedded-subscribe").click(function() {
    var name = $("input#mce-FNAME").val();
    var email = $("input#mce-EMAIL").val();
    var message = $("input#mce-MMERGE6").val();
    if ($("input#mce-FNAME").val() && $("input#mce-EMAIL").val()){
      alert (name + ", your message has been received successfully. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!")
    }
  });
});
