// const employeeArr=JSON.parse(localStorage.getItem("employeeArr"));

let workerList = document.querySelector(".workersList");
let cancelOverflay = document.getElementById("cancelOverflay");
let Overlay = document.querySelector(".overlay");
let workers = document.querySelector(".workers");
let form = document.querySelector("form");
let closeBtn = document.getElementById("closebtn");
let newWorker = document.getElementById("addWorker");
let cancelExp = document.querySelector(".cancelExp");
let Exp = document.querySelector(".exp");
let addToZ1 = document.querySelector(".addToZ1");
const container = document.querySelector(".container");

const experiences = document.getElementById("experiences");
const addExperience = document.getElementById("addExperience");

addExperience.addEventListener("click", (e) => {
  const div = document.createElement("div");
  div.className =
    "exp flex flex-row justify-center border-b-2 border-black pb-1 mb-2";
  div.innerHTML = `
            <button
            type="button"
            class="cancelExp bg-orange-600 w-5 h-5 text-center align-middle"
            >
              x
            </button>
            <div>
              <label for="name">Title</label><br />
              <input
                class="title h-9 w-[80%]"
                type="text"
                id="title"
                required
              /><br /><br />
              <label for="name">company</label><br />
              <input class="company h-9 w-[80%]" type="text" id="company" required />
            </div>
            <div>
              <label for="name">start Date</label>
              <input class="start-date h-9 w-[80%]" type="date" id="exSDate" required />
              <br /><br />
              <label for="name">end Date</label><br />
              <input class="end-date h-9 w-[80%]" type="date" id="lvDate" required />
            </div>
          `;
          experiences.append(div);

  div.querySelector(".cancelExp").addEventListener("click", (e) => {
    e.target.closest(".exp").remove();
  });
});

let experiencesArr = [];

const employes = [
  {
    name: "Amine L.",
    role: "security",
    age: 22,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "amine.security@example.com",
    phone: "0612345678",
    dateStart: "2023-01-10",
    workExperience: [
      {
        startDate: "2022-01-01",
        endDate: "2022-12-31",
        title: "IT Technician",
        company: "Company A",
      },
      {
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        title: "IT Technician",
        company: "Company A",
      },
    ],
    room: null,
  },
  {
    name: "Sara B.",
    role: "receptionist",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "sara.reception@example.com",
    phone: "0623456789",
    dateStart: "2023-02-01",
    workExperience: [
      {
        startDate: "2022-01-01",
        endDate: "2022-12-31",
        title: "IT Technician",
        company: "Company A",
      },
      {
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        title: "IT Technician",
        company: "Company A",
      },
    ],
    room: "reception",
  },
  {
    name: "Youssef K.",
    role: "ittechnician",
    age: 22,
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "youssef.it@example.com",
    phone: "0634567890",
    dateStart: "2023-03-15",
    room: "server",
    workExperience: [
      {
        startDate: "2022-01-01",
        endDate: "2022-12-31",
        title: "IT Technician",
        company: "Company A",
      },
      {
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        title: "IT Technician",
        company: "Company A",
      },
    ],
  },
];

let roomWithEachEmployees = {
  conference: ["cleaner", "visiter", "manager"],
  reception: ["receptionist", "cleaner", "manager"],
  server: ["it", "cleaner", "manager"],
  security: ["security", "cleaner"],
  stuff: ["stuff", "cleaner", "visiter", "manager"],
  archives: ["visiter", "manager"],
};

// console.log(workerList);

container.addEventListener("click", (e) => {
  const room = e.target.dataset.room;

  if (room) {
    Overlay.style.display = "flex";

    // FILTER EMPLOYEES
    let filteredEmployes = employes.filter((emp) => {
      return emp.room == null && roomWithEachEmployees[room].includes(emp.role);
    });

    // CLEAR THE LIST ONLY ONCE
    workers.innerHTML = "";

    // DISPLAY EMPLOYEES
    filteredEmployes.forEach((emp) => {
      let div = document.createElement("div");
      div.className = "employe";

      div.innerHTML = `
        <div class="bg-white flex flex-row"
             style="gap:30px; border: solid #c8630b; border-radius: 10px; height: 57px; width: 250px;">
          <img src="${emp.photo}" width="34">
          <div class="flex flex-col justify-evenly">
            <h1 class="font-bold">${emp.name}</h1>
            <h2>${emp.role}</h2>
          </div>
          <div class="flex flex-col">
            <button class="font-bold">x</button>
            <button style="border:1px solid;width:40px;height:30px;border-color:#c8630b;">edit</button>
          </div>
        </div>
      `;

      workers.appendChild(div);
    });
  }
});

function display(list=employes) {
  workerList.innerHTML = "";

  list.forEach((e) => {
    let div = document.createElement("div");
    div.className = "employe";
    div.innerHTML = `
    <div class="bg-white flex flex-row  " style=" gap:30px; border: solid #c8630b; border-radius: 10px; height: 57px; width: 250px;">
        <img  src="${e.photo}"   alt=""  width="34px">
        <div class="flex flex-col justify-evenly">
          <h1 class="font-bold" >${e.name}</h1>
          <h2>${e.role}</h2>
          </div>
          <div class="flex flex-col">
        <button  class="font-bold">x</button>
        <button class="show-more" style=" border: 1px solid;width: 40px; height: 30px; border-color: #c8630b ;">show</button>
      </div>
    </div>
    `;

    workerList.appendChild(div);

    div.querySelector(".show-more").addEventListener("click", (e)=>{
      alert("test");
    });


  });
}
display()

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const role = document.getElementById("role").value;
  const photo = document.getElementById("image").value;
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phoneNumber").value;
  const dateStart = document.getElementById("enterDate").value;

  const experiencesElements = document.querySelectorAll(".exp");
  const experiences = [];
  
  experiencesElements.forEach((e)=> {
    const exp = {
      title: e.querySelector(".title").value,
      company: e.querySelector(".company").value,  
      startDate: e.querySelector(".start-date").value,
      endDate: e.querySelector(".end-date").value,
    }
    experiences.push(exp);
  })

  // experiences: experiencesArr;

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

  employes.push({
    room: null,
    name,
    age,
    role,
    photo,
    email,
    phone,
    dateStart,
    experiences
  });
  //  console.log(employes)

  display(employes);
});

newWorker.addEventListener("click", () => {
  form.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});

cancelOverlay.addEventListener("click", () => {
  Overlay.style.display = "none";
});
addToZ1.addEventListener("click", () => {
  Overlay.style.display = "flex";

  // workerList.forEach((worker) => {
  //   let div=document.createElement("div");
  //   const html=
  //   `
  //      <div class="bg-white flex flex-row  " style=" gap:30px; border: solid #c8630b; border-radius: 10px; height: 57px; width: 250px;">
  //         <img  src="${worker.photo}"   alt=""  width="34px">
  //         <div class="flex flex-col justify-evenly">
  //           <h1 class="font-bold" >${worker.name}</h1>
  //           <h2>${worker.role}</h2>
  //           </div>
  //           <div class="flex flex-col">
  //     <button  class="font-bold">x</button>
  //     <button style=" border: 1px solid;width: 40px; height: 30px; border-color: #c8630b ;">edit</button>
  //   </div>
  //     </div>
  //     `
  //     div.innerHTML=html
  // workers.appendChild(div)
  // });
});
