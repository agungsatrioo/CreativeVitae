function autoType(elementClass, typingSpeed) {
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis = thhis.find(".title");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("");
  setTimeout(function () {
    thhis.css("opacity", 1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for (var i = 0; i < amntOfChars; i++) {
      (function (i, char) {
        setTimeout(function () {
          newString += char;
          thhis.text(newString);
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
  }, 1500);
}

$(document).ready(function () {
  autoType(".main-header", 100);

  $(".main-card-education").hover(function () {
    $(this).find(".card-overlay").show();
  }, function(){
    $(this).find(".card-overlay").hide();
  });

});
