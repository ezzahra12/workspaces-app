// const employeeArr=JSON.parse(localStorage.getItem("employeeArr"));

let workerList = document.querySelector(".workersList");
let cancelOverflay = document.getElementById("cancelOverflay");
let Overlay = document.querySelector(".overlay");
const closeEmployeModal = document.getElementById("closeEmployeModal");
const employeOverlay = document.getElementById("employeOverlay");
let workers = document.querySelector(".workers");
let form = document.querySelector("form");
let addWorkerCloseBtn = document.getElementById("addWorkerCloseBtn");
let newWorker = document.getElementById("addWorker");
let cancelOverlay = document.getElementById("cancelOverlay");
let cancelExp = document.querySelector(".cancelExp");
let Exp = document.querySelector(".exp");
let addToZ1 = document.querySelector(".addToZ1");
const container = document.querySelector(".container");

const experiences = document.getElementById("experiences");
const addExperience = document.getElementById("addExperience");
cont romms=document.querySelectorAll(".room");

romms.forEach((room)=>{
  if (room.innerHTML.trim()==""){
    room.style.background="red";
  }
})

const employes = [
  {
    id: 1732309385123,
    name: "Amine L.",
    role: "manager",
    age: 22,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "manager@example.com",
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
    room: "conference",
  },
  {
    id: 1732309385124,
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
    id: 1732309385125,
    name: "Youssef K.",
    role: "ittechnician",
    age: 22,
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "youssef.it@example.com",
    phone: "0634567890",
    dateStart: "2023-03-15",
    room: null,
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

displayEmployees(employes);

container.addEventListener("click", (e) => {
  const room = e.target.dataset.room;

  if (room) {
    Overlay.style.display = "flex";

    let filteredEmployes = employes.filter((emp) => {
      return (
        emp.room == null || (roomWithEachEmployees[room].includes(emp.role) && emp.room !== room)
      );
    });

    workers.innerHTML = "";

    filteredEmployes.forEach((emp) => {
      let div = document.createElement("div");
      div.className = "chooseEmploye";
      div.dataset.id = emp.id;

      div.innerHTML = `
      <div class="bg-white flex flex-row"
           style="gap:30px; border: solid #c8630b; border-radius: 10px; height: 57px; width: 250px;">
        <img src="${emp.photo}" width="34">
        <div class="flex flex-col justify-evenly">
          <p class="font-bold">${emp.name}</p>
          <p>${emp.role}</p>
        </div>
      </div>
    `;
    workers.appendChild(div);
    div.addEventListener("click", (e) => {
      const id = e.target.closest(".chooseEmploye").dataset.id;
      const emp = employes.find((emp) => emp.id == id);
      emp.room = room;
      Overlay.style.display = "none";
      displayEmployees(employes);
    })

    });
  }
});

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

function displayEmployees() {
  workerList.innerHTML = "";
  document.querySelectorAll(".room").forEach(room => room.innerHTML = "");

  employes.forEach((em) => {
    let div = document.createElement("div");
    div.className = "employe";
    div.dataset.id = em.id;


    if (em.room == null) {
      div.innerHTML = `
      <div class="bg-white flex flex-row  " style=" gap:30px; border: solid #c8630b; border-radius: 10px; width: fit-content;">
          <img  src="${em.photo}"   alt=""  width="34px">
          <div class="flex flex-col justify-evenly">
            <p class="m-0 text-sm font-bold" >${em.name}</p>
            <p class="m-0 text-sm">${em.role}</p>
            </div>
            <div class="flex flex-col">
            <button class="show-more" style=" border: 1px solid;width: 40px; height: 30px; border-color: #c8630b ;">show</button>
            </div>
            </div>
            `;
      workerList.appendChild(div);
    } else {
      div.innerHTML = `
      <div class="bg-white flex flex-row  " style=" gap:10px; border: solid #c8630b; border-radius: 10px; width: fit-content; ">
          <img  src="${em.photo}"   alt=""  width="34px">
          <div class="flex flex-col justify-evenly">
            <p class="m-0 text-sm font-bold" >${em.name}</p>
            <p class="m-0 text-sm">${em.role}</p>
            <div class="flex gap-1">
          <button class="show-more" style=" border: 1px solid; border-color: #c8630b ;">show</button>
            <button style="border: 1px solid; border-color: #c8630b ;"  class="leave-room font-bold">x</button>
</div>
            </div>
      </div>
      `;
      div.querySelector(".leave-room").addEventListener("click", (e) => {
        em.room = null;
        displayEmployees();
      });
      document.querySelector(`.${em.room} .room`).appendChild(div);

    }


    div.querySelector(".show-more").addEventListener("click", (ev) => {
      showEmployeeModal(em);
    });
  });
}

function showEmployeeModal(emp) {
  employeOverlay.style.display = "flex";

  document.getElementById("empPhoto").src = emp.photo;
  document.getElementById("empName").textContent = emp.name;
  document.getElementById("empRole").textContent = emp.role;
  document.getElementById("empEmail").textContent = emp.email;
  document.getElementById("empPhone").textContent = emp.phone;
  document.getElementById("empDateStart").textContent = emp.dateStart;
  document.getElementById("empRoom").textContent = emp.room;

  const expDiv = document.getElementById("empExperience");
  expDiv.innerHTML = "";

  emp.workExperience.forEach((exp) => {
    const item = document.createElement("div");
    item.className = "p-2 bg-white-100 rounded";

    item.innerHTML = `
      <p><strong>${exp.title}</strong> - ${exp.company}</p>
      <p class="text-xs text-white-600">${exp.startDate} → ${exp.endDate}</p>
    `;

    expDiv.appendChild(item);
  });
}


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

  experiencesElements.forEach((e) => {
    const exp = {
      title: e.querySelector(".title").value,
      company: e.querySelector(".company").value,
      startDate: e.querySelector(".start-date").value,
      endDate: e.querySelector(".end-date").value,
    };
    experiences.push(exp);
  });

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
    id: new Date().getTime(),
    room: null,
    name,
    age,
    role,
    photo,
    email,
    phone,
    dateStart,
    experiences,
  });

  displayEmployees(employes);
});

newWorker.addEventListener("click", () => {
  form.classList.remove("hidden");
});

addWorkerCloseBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});

closeEmployeModal.addEventListener("click", () => {
  employeOverlay.style.display = "none";
});

cancelOverlay.addEventListener("click", () => {
  Overlay.style.display = "none";
});

// addToZ1.addEventListener("click", () => {
  // Overlay.style.display = "flex";

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
// });