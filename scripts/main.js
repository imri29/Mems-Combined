const API_URL = "http://www.memeking.co.il/api/upload-suggested-new-meme";
const RANDOM_API_URL = "http://www.memeking.co.il/api/random-meme";
const ERROR_MESSAGE =
  "https://fthmb.tqn.com/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg";
const MOBILE_SIZE = 767;

$(document).ready(function() {
  const randomButton = $(".random-button");
  const memes = $(".memes");
  const modal = $(".modal");
  const iframe = $("iframe");

  randomButton.click(() => {
    randomButton.html('<div id="loading"/>');
    $.get(RANDOM_API_URL, loadAndInsertRandomMeme);
  });

  if (window.formController) {
    formController.init();
  }

  modalController.init(memes, modal);

  function loadAndInsertRandomMeme(data, status) {
    if (status === "success") {
      const memeAddress = data.urlPath;
      const memeId = data.id;
      const category = data.category;
      memes.attr("src", memeAddress);
      randomButton.html("<span>מם רנדומלי</span>");
      iframe
        .attr(
          "src",
          `http://www.memeking.co.il/memes/${category}/generator/normal/${memeId}/normalFormat`
        )
        .css(getIframeSize());
    } else {
      memes.attr("src", ERROR_MESSAGE);
    }
  }
});

function getIframeSize() {
  if (window.innerWidth > MOBILE_SIZE) {
    return {
      height: "95%",
      width: "100%"
    };
  } else {
    return {
      height: "100%",
      width: "100%"
    };
  }
}
