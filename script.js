//# javascript 3일차
//## 문제 1
function sign() {
  const num = document.getElementById("input1").value;
  // console.log(num);
  if (num > 0) {
    document.getElementById("result1").innerText = "양수 입니다.";
  } else if (num < 0) {
    document.getElementById("result1").innerText = "음수 입니다.";
  } else {
    document.getElementById("result1").innerText = "0 입니다.";
  }
}

//## 문제 2
function grade_classifier() {
  const num = document.getElementById("input2").value;
  // console.log(num);
  if (num >= 90) {
    document.getElementById("result2").innerText = "A등급 입니다.";
  } else if (num >= 80) {
    document.getElementById("result2").innerText = "B등급 입니다.";
  } else if (num >= 70) {
    document.getElementById("result2").innerText = "C등급 입니다.";
  } else if (num >= 60) {
    document.getElementById("result2").innerText = "D등급 입니다.";
  } else {
    document.getElementById("result2").innerText = "F등급 입니다.";
  }
}
//## 문제 3
function recruitment_classifier() {
  let skills = ["JAVASCRIPT", "REACT"];
  let input = document.getElementById("input3").value;
  input = input.toUpperCase().replaceAll(' ','');
  console.log("input1 : ", input);
  input = input.split(",");
  console.log("input2 : ", input);
  
  let applicant_skills = new Array();
  console.log('1', applicant_skills);
  console.log('1', applicant_skills.length);
  for (i = 0; i < input.length; i++) {
    console.log(input[i]);
    if (skills.includes(input[i])) {
      console.log('if 문')
      applicant_skills.push(input[i]);
    }
    console.log('2', applicant_skills);
  }
  // const result = applicant_skills.filter(data => data !== undefined);
  const result = applicant_skills.length

  console.log('result', result)
  if (result == 2) {
    document.getElementById("result3").innerText = "합격 입니다! 축하드립니다!";
  } else if (result == 1) {
    document.getElementById("result3").innerText = "예비 입니다.";
  } else {
    document.getElementById("result3").innerText = "탈락 입니다. 지원해주셔서 감사합니다.";
  }

  console.log('applicant_skills : ', applicant_skills);
}
