let url;
let firstInputId='c1';
let secondInputId='c6';
let tempId;
let leftToRight = document.querySelectorAll('.left');
let rightToLeft = document.querySelectorAll('.right');
let input1 = document.getElementById('i1');
let input2 = document.getElementById('i2');
let infoSec = document.querySelectorAll('.base');
input1.addEventListener('input',function(event){
    update(document.getElementById(`${firstInputId}`).getAttribute('data-value'),document.getElementById(`${secondInputId}`).getAttribute('data-value'),'i2');
    event.preventDefault();
});
input2.addEventListener('input',function(event){
  update(document.getElementById(`${secondInputId}`).getAttribute('data-value'),document.getElementById(`${firstInputId}`).getAttribute('data-value'),'i1');
  event.preventDefault();
});
for(let i=0;i<leftToRight.length;i++){
    leftToRight[i].addEventListener('click',function(event){
    leftToRight[i].style.background="#833AE0";
    leftToRight[i].style.color="#FFFFFF";
    leftToRight.forEach(element =>{
      if(element!=leftToRight[i]){element.style.background="white"}
    })
    tempId = document.getElementById(`${secondInputId}`);
    update(leftToRight[i].getAttribute('data-value'),tempId.getAttribute('data-value'),'i2');
    firstInputId = leftToRight[i].getAttribute('id');
    event.preventDefault();
});
}
for(let i=0;i<rightToLeft.length;i++){
    rightToLeft[i].addEventListener('click',function(event){
    rightToLeft[i].style.background="#833AE0";
    rightToLeft[i].style.color="#FFFFFF";
    rightToLeft.forEach(element =>{
      if(element!=rightToLeft[i]){element.style.background="white"}
    });
    tempId = document.getElementById(`${firstInputId}`);
    update(tempId.getAttribute('data-value'),rightToLeft[i].getAttribute('data-value'),'i1');
    secondInputId = rightToLeft[i].getAttribute('id');
    event.preventDefault();
});
}
function update(first,second,ch){
  input1.value = (input1.value == undefined) ? 1: input1.value;
  input2.value = (input2.value == undefined) ? 1: input2.value;  
  url = `https://api.exchangerate.host/latest?base=${first}&symbols=${second}`;
  fetch(url)
  .then(response=>response.json())
  .then((data)=>{
      if(ch=='i2'){
        input2.value=input1.value*data.rates[second];
      }
      else{
        input1.value=input2.value*data.rates[second];
      }
      infoSec[0].innerText =  "1 " + first + " = "+ data.rates[`${second}`] + " " + second;
      url = `https://api.exchangerate.host/latest?base=${second}&symbols=${first}`;
          fetch(url)
          .then(response=>response.json())
          .then((data)=>{ 
          infoSec[1].innerText =  "1 " + second + " = "+ data.rates[`${first}`] + " " + first;
      })
  })
}