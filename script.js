function inputPrompt(value){
  if(value === ""){
    alert("Please provide a phone number");
  } 
  else if (telephoneCheck(value)){
    const results = document.getElementById("results-div");
    results.innerText = `Valid US number: ${value}\n`;
  }
  else {
    const results = document.getElementById("results-div");
    results.innerText = `Invalid US number: ${value}\n`}
}

function clearPrompt(){
  const results = document.getElementById("results-div");
    results.innerText = "";
}

function telephoneCheck(value) {
  let case1 = /^1? ?[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  let case2 = /^1? ?\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
  let case3 = /^1? ?\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
  let case4 = /^1? ?[0-9]{3} [0-9]{3} [0-9]{4}$/;
  let case5 = /^1? ?[0-9]{10}$/;
  let case6 = /^[1]{1} [0-9]{3} [0-9]{3} [0-9]{4}$/;
  
  return case1.test(value)||case2.test(value)||case3.test(value)||case4.test(value)||case5.test(value)||case6.test(value)
}

