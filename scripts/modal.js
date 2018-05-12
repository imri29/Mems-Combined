const modalController = {
  showSuccessModal: function() {
    showModal($(".success"));
  },

  showFailedModal: function() {
    showModal($(".failed"));
  },

  //Random Meme Modal
  init: function(memes, modal) {
    memes.click(() => {
      modal.slideDown();
    });

    // close it on X
    $(".close").click(() => {
      modal.slideUp();
    });

    //close it when clicking on dark area
    $(window).click(e => {
      if ($(e.target).is(modal)) {
        modal.slideUp();
      }
    });
  }
};

function showModal(status) {
  status.show();
  const uploadMemeModal = $(".upload-meme-modal");
  uploadMemeModal.slideDown();

  // close it on X
  $(".upload-close").click(() => {
    uploadMemeModal.slideUp();
  });

  //close it when clicking on dark area
  $(window).click(e => {
    if ($(e.target).is(uploadMemeModal)) {
      uploadMemeModal.slideUp();
    }
  });
}
