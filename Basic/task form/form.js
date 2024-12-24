function validationForm() {
  // alert(1)

  let val = true;
  let nameValue = document.formName.nameName.value;
  let contactValue = document.formName.numberName.value;
  // let passValue2 = document.forms['formName']['passName2'].value;
  let passValue = document.formName.passName.value;
  let passValue2 = document.formName.passName2.value;
  let dobValue = document.formName.dobName.value;
  let selectValue = document.querySelector("input[name=gender]:checked");
  let countryValue = document.formName.countryName.value;
  let checkboxValue = document.querySelectorAll(
    'input[name="hobbies"]:checked'
  );
  let timeValue = document.querySelector('input[name="timeName"]').value;

  alert("Do you want to submit Form?");
  if (nameValue.length < 6 || nameValue.length > 12) {
    setErr("nameErr","Name must be between 6 and 12 characters.");
    val = false;
  }

  if (contactValue.length != 10) {
    //document.getElementById('numberIdErr').innerText = 'plase enter 10 digit'
    val = false;
    setErr("numberIdErr", "plase enter 10 digit");
  }

  if (passValue != passValue2) {
    //document.getElementById('spanPass2IdErr').innerText = 'Password not match'
    val = false;
    setErr("spanPass2IdErr", "Password not match");
  }

  function setErr(id, message) {
    document.getElementById(id).innerText = message;
    alert("to know im in set error function");
  }
  // alert("stop here to check console");
  // console.log("Entered Name:", nameValue);
  // console.log("Entered Email:", emailValue);
  // console.log("Entered Contact Number:", contactValue);
  // console.log("Entered Password:", passValue);
  // console.log("Entered Confirm Password:", passValue2);
  // console.log("Selected DOB:", dobValue);
  // console.log("Selected Gender:", selectValue);
  // console.log("Selected Hobbies:", checkboxValue);
  // console.log("Selected Country:", countryValue);

  // alert("Do you want to submit Form?");
  return val;
}
