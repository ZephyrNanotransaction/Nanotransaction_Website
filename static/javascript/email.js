emailCollectionForm = document.forms["email-collection-form"];

emailCollectionForm.addEventListener("submit", async (e) => {
  // prevent default form submit
  e.preventDefault();

  // retrieve form values
  let first_name = emailCollectionForm.elements["firstname"].value;
  let last_name = emailCollectionForm.elements["lastname"].value;
  let email = emailCollectionForm.elements["email"].value;
  let type = emailCollectionForm.elements["type"].value;

  user = {
    first_name,
    last_name,
    email,
    type,
  };

  try {
    // send post request to backend
    let response = await axios.post("/email/add", {
      user,
    });

    // handle response
    if (!response.data.wasSuccess) {
      alert("An error occurred, please try again later!");
    } else {
      alert("Your information has been recorded! Thank you.");
    }

    // clear form values
    emailCollectionForm.reset();
  } catch (err) {
    alert("Error: An error has occurred");
  }
});
