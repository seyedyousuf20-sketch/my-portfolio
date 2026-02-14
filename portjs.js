function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.innerText = "All fields are required ❌";
    return false;
  }

  if (!email.includes("@")) {
    error.innerText = "Enter a valid email ❌";
    return false;
  }

  error.innerText = "Message sent successfully ✅";
  error.classList.remove("text-danger");
  error.classList.add("text-success");
  return false; // backend illa so prevent refresh
}
