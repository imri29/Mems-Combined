window.formController = {
  init: function() {
    this.submitButton = $(".upload-button");
    this.bind();
  },

  bind: function() {

    this.submitButton.click(() => {
      this.submitButton.html('<div id="loading"></div>');
      const uploaderName = $('input[name="name"]').val();
      const uploaderEmail = $('input[name="email"]').val();
      const description = $('input[name="description"]').val();
      const uploadedFile = $(".file")[0].files[0];
      console.log(uploadedFile);

      blobToString(uploadedFile).then(blobAsString => {
        const formData = {
          name: uploaderName,
          email: uploaderEmail,
          description: description,
          urlPath: blobAsString
        };

        $.post(API_URL, formData, () => {
          this.submitButton.html("<span>שליחה</span>");
          if ((status = 200)) {
            modalController.showSuccessModal();
          } else {
            modalController.showFailedModal();
          }
        });
      });

      function blobToString(blob) {
        return new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = event => {
            resolve(event.target.result);
          };
          reader.readAsDataURL(blob);
        });
      }
    });
  }
};
