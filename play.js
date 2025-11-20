

const employeeArr=JSON.parse(localStorage.getItem("employeeArr"));
let experiencesArr= [];
let workerList=document.querySelector(".workersList");
console.log(workerList)

function display(list){
    workerList.innerHTML=""

    list.forEach((e) => {
      let div = document.createElement("div")
    div.className="employe"
    div.innerHTML=`
     <div class="bg-white flex flex-row  " style=" gap:30px; border: solid #c8630b; border-radius: 10px; height: 57px; width: 250px;">
        <img  src="${e.photo}"   alt=""  width="34px">
        <div class="flex flex-col justify-evenly">
          <h1 class="font-bold" >${e.name}</h1>
          <h2>${e.role}</h2>
          </div>
          <div class="flex flex-col">
    <button  class="font-bold">x</button>
    <button style=" border: 1px solid;width: 40px; height: 30px; border-color: #c8630b ;">edit</button>
  </div>
    </div>
    `


    workerList.appendChild(div)
    });
    

    
  }
  
  let employes = []
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
       const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const role = document.getElementById("role").value;
    const photo = document.getElementById("image").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phoneNumber").value;
    const dateStart = document.getElementById("enterDate").value;
    const dateLeave = document.getElementById("leaveDate").value;
    experiences:experiencesArr;



    
    // if(name.length<3){
    //     alert("name must be at least 3C");
    //     return;
    // }
     
    // if(age<18 || age>80){
    //     alert("age must be bettwen 18 and 79")
    //     return;
    // }
    // if(role===""){
    //     alert("select a role please");
    //     return;
    // }
    // if(!email.includes("@") || !email.includes(".")){
    //     alert("email invalid");
    //     return;
    // }
    //  if(phone.length!==10){
    //     alert("number must be exactly 10 c");
    //     return;
    //  }
    //  if(!phone.startsWith("06") && !phone.startsWith("07")){
    //     alert("phone number must start with 06 or 07");
    //     return;
    //  }
    //  if(new Date(dateLeave)< new Date(dateStart)){
    //     alert("leave date cannot be before start date");
    //     return;
    //  }
    //  alert("form is valid !")

     employes.push({name,age,role,photo,email,phone,dateStart,dateLeave});
     console.log(employes)
    
       display(employes);
  

   

})


let closeBtn =document.getElementById("closebtn");
let newWorker=document.getElementById("addWorker");
newWorker.addEventListener("click",()=>{
    form.classList.remove("hidden");
}
)
closeBtn.addEventListener("click",()=>{
    form.classList.add("hidden")
})

let cancelExp=document.querySelector(".cancelExp");
let Exp=document.querySelector(".exp");
cancelExp.addEventListener("click",()=>{
  Exp.classList.add("hidden");
})


let cancelOverflay=document.getElementById("cancelOverflay");
let Overlay=document.querySelector(".overlay");
let workers=document.querySelector(".workers");
cancelOverlay.addEventListener("click",()=>{
Overlay.style.display="none"
})
let addToZ1=document.querySelector(".addToZ1");
addToZ1.addEventListener("click",()=>{
Overlay.style.display="flex";
workerList.forEach((worker) => {
  let div=document.createElement("div");
  const html=
  `
     <div class="bg-white flex flex-row  " style=" gap:30px; border: solid #c8630b; border-radius: 10px; height: 57px; width: 250px;">
        <img  src="${worker.photo}"   alt=""  width="34px">
        <div class="flex flex-col justify-evenly">
          <h1 class="font-bold" >${worker.name}</h1>
          <h2>${worker.role}</h2>
          </div>
          <div class="flex flex-col">
    <button  class="font-bold">x</button>
    <button style=" border: 1px solid;width: 40px; height: 30px; border-color: #c8630b ;">edit</button>
  </div>
    </div>
    `
    div.innerHTML=html
workers.appendChild(div)

  
});


})





