<template>
  <h2>🤔Feedback & Suggestion</h2>
  <section id="feedback">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <div class="card py-5 px-4 message">
          <div class="alert alert-success alert-dismissible fade show d-none notif" role="alert">
            <strong>Makasihh! 🙏 </strong><br>
            Pesannya dah terkirim & pasti aku bacaa..
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <form name="submit-to-google-sheet">
            <div class="form-group">
              <label for="name">Nama <sup class="text-danger">*</sup></label>
              <input type="text" class="form-control" id="name" name="name" required
                placeholder="Boleh nama samaran jga kok.." />
            </div>
            <div class="form-group row gx-5">
              <div class="col-md-6">
                <label for="batch">Angkatan <sup class="text-danger">*</sup></label>
                <select class="form-select" aria-label="Default select example" id="batch" required name="angkatan">
                  <option selected>Pilih Angkatan</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="jurusan">Jurusan <sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="jurusan" name="jurusan" required
                  placeholder="Isi yg jujur yaa.." />
              </div>
            </div>

            <div class="form-group row gx-5">
              <div class="col-md-6">
                <label for="hobby">Hobi <sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="hobby" name="hobby" required
                  placeholder="Boleh tuliskan sekocak2 nya.. 😸" />
              </div>
              <div class="col-md-6">
                <label for="phone">Instagram</label>
                <input type="text" class="form-control" id="ig" name="ig" placeholder="boleh dkosongin kok.." />
              </div>
            </div>
            <div class="form-group">
              <label for="msg">Pesan <sup class="text-danger">*</sup></label>
              <textarea cols="100" row="0" class="form-control" id="msg" name="message" required
                placeholder="Tuliskan kritik dan saran kamu, kalo ini yg serius yaa.."></textarea>
            </div>
            <div class="form-group float-end">
              <button type="submit" class="btn btn-outline-primary mt-2 btn-submit">
                ✈️ Send
              </button>

              <button class="btn btn-outline-primary d-none btn-loading" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedbackSection',
  mounted: function () {
    // <<--- Feedback Form Handler --->>
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzSwTQZOjBq0ZubZJYXqd4qGTYR1Ck0nMygizZ85n9SGR16iu4s4vJvFOhlZlyPFy0W/exec";
    const form = document.forms["submit-to-google-sheet"];

    const btnLoading = document.querySelector(".btn-loading");
    const btnSubmit = document.querySelector(".btn-submit");
    const notif = document.querySelector(".notif");

    console.log("form ==>> ", form);

    let notifHidden = true;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!notifHidden) {
        notif.classList.toggle("d-none");
      }

      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
        mode: "no-cors",
      })
        .then((response) => {
          notif.classList.toggle("d-none");
          btnLoading.classList.toggle("d-none");
          btnSubmit.classList.toggle("d-none");
          form.reset();
          notifHidden = false;

          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }
}
</script>

<style scoped>
#feedback .card {
  margin-top: 32px;
  border-radius: 25px;
}

label {
  font-weight: 500;
}

.form-control,
.form-select {
  border-radius: 30px;
  margin: .8em 0 2em;
}

.btn {
  border-radius: 30px;
  font-weight: 500;
  width: 8em;
}
</style>