let workerList = document.querySelector(".workersList");

let cancelOverlay = document.getElementById("cancelOverlay");
let Overlay = document.querySelector(".overlay");
let workers = document.querySelector(".workers");

const closeEmployeModal = document.getElementById("closeEmployeModal");
const employeOverlay = document.getElementById("employeOverlay");

let form = document.querySelector("form");
let preview = document.getElementById("preview");
let image = document.getElementById("image");
let addWorkerCloseBtn = document.getElementById("addWorkerCloseBtn");
let newWorker = document.getElementById("addWorker");

let cancelExp = document.querySelector(".cancelExp");
const experiences = document.getElementById("experiences");
const addExperience = document.getElementById("addExperience");

let availableBtns = document.querySelectorAll(".available-btn");

const employes = [
  {
    id: 1732309385123,
    name: "Amine L.",
    role: "manager",
    age: 32,
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
      }
    ],
    room: "conference",
  },
  {
    id: 1732309385124,
    name: "Sara B.",
    role: "receptionist",
    age: 26,
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
    role: "it",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "youssef.it@example.com",
    phone: "0634567890",
    dateStart: "2023-03-15",
    room: null,
    workExperience: [],
  },
  {
    id: 1732309385126,
    name: "Leila M.",
    role: "manager",
    age: 30,
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    email: "leila.hr@example.com",
    phone: "0645678901",
    dateStart: "2022-11-20",
    workExperience: [
      {
        startDate: "2020-01-01",
        endDate: "2022-10-31",
        title: "HR Assistant",
        company: "Company B",
      }
    ],
    room: null,
  },
  {
    id: 1732309385127,
    name: "Karim S.",
    role: "it",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/66.jpg",
    email: "karim.it@example.com",
    phone: "0656789012",
    dateStart: "2023-04-01",
    room: null,
    workExperience: [],
  },
  {
    id: 1732309385128,
    name: "Nadia R.",
    role: "receptionist",
    age: 24,
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
    email: "nadia.reception@example.com",
    phone: "0667890123",
    dateStart: "2023-05-10",
    workExperience: [
      {
        startDate: "2021-01-01",
        endDate: "2022-12-31",
        title: "Receptionist Assistant",
        company: "Company C",
      }
    ],
    room: "reception",
  },
  {
    id: 1732309385129,
    name: "Omar T.",
    role: "manager",
    age: 35,
    photo: "https://randomuser.me/api/portraits/men/72.jpg",
    email: "omar.manager@example.com",
    phone: "0678901234",
    dateStart: "2021-06-15",
    workExperience: [
      {
        startDate: "2018-01-01",
        endDate: "2021-05-31",
        title: "Team Lead",
        company: "Company D",
      }
    ],
    room: "conference",
  },
  {
    id: 1732309385130,
    name: "Sofia H.",
    role: "manager",
    age: 29,
    photo: "https://randomuser.me/api/portraits/women/80.jpg",
    email: "sofia.hr@example.com",
    phone: "0689012345",
    dateStart: "2022-03-12",
    workExperience: [
      {
        startDate: "2019-01-01",
        endDate: "2022-02-28",
        title: "HR Coordinator",
        company: "Company E",
      }
    ],
    room: null,
  },
  {
    id: 1732309385131,
    name: "Adil F.",
    role: "it",
    age: 27,
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    email: "adil.it@example.com",
    phone: "0690123456",
    dateStart: "2023-01-25",
    room: null,
    workExperience: [
      {
        startDate: "2021-01-01",
        endDate: "2022-12-31",
        title: "IT Support",
        company: "Company F",
      }
    ],
  },
  {
    id: 1732309385132,
    name: "Meryem A.",
    role: "receptionist",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/90.jpg",
    email: "meryem.reception@example.com",
    phone: "0601234567",
    dateStart: "2023-06-01",
    workExperience: [],
    room: "reception",
  },
  {
    id: 1732309385133,
    name: "Hassan D.",
    role: "it",
    age: 30,
    photo: "https://randomuser.me/api/portraits/men/91.jpg",
    email: "hassan.it@example.com",
    phone: "0612345679",
    dateStart: "2023-02-20",
    room: null,
    workExperience: [
      {
        startDate: "2019-01-01",
        endDate: "2022-12-31",
        title: "Network Admin",
        company: "Company G",
      }
    ],
  },
  {
    id: 1732309385134,
    name: "Imane C.",
    role: "manager",
    age: 31,
    photo: "https://randomuser.me/api/portraits/women/95.jpg",
    email: "imane.hr@example.com",
    phone: "0623456790",
    dateStart: "2022-09-10",
    workExperience: [
      {
        startDate: "2018-01-01",
        endDate: "2022-08-31",
        title: "HR Specialist",
        company: "Company H",
      }
    ],
    room: null,
  },
  {
    id: 1732309385135,
    name: "Reda N.",
    role: "manager",
    age: 36,
    photo: "https://randomuser.me/api/portraits/men/96.jpg",
    email: "reda.manager@example.com",
    phone: "0634567891",
    dateStart: "2020-05-05",
    workExperience: [
      {
        startDate: "2017-01-01",
        endDate: "2020-04-30",
        title: "Project Manager",
        company: "Company I",
      }
    ],
    room: "conference",
  },
  {
    id: 1732309385136,
    name: "Salma E.",
    role: "receptionist",
    age: 28,
    photo: "https://randomuser.me/api/portraits/women/97.jpg",
    email: "salma.reception@example.com",
    phone: "0645678902",
    dateStart: "2023-03-05",
    workExperience: [],
    room: "reception",
  },
  {
    id: 1732309385137,
    name: "Nabil G.",
    role: "it",
    age: 29,
    photo: "https://randomuser.me/api/portraits/men/98.jpg",
    email: "nabil.it@example.com",
    phone: "0656789013",
    dateStart: "2023-04-12",
    room: null,
    workExperience: [],
  },
  {
    id: 1732309385138,
    name: "Lina J.",
    role: "manager",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/99.jpg",
    email: "lina.hr@example.com",
    phone: "0667890124",
    dateStart: "2022-12-01",
    workExperience: [
      {
        startDate: "2020-01-01",
        endDate: "2022-11-30",
        title: "HR Assistant",
        company: "Company J",
      }
    ],
    room: null,
  },
  {
    id: 1732309385139,
    name: "Khalid H.",
    role: "manager",
    age: 34,
    photo: "https://randomuser.me/api/portraits/men/100.jpg",
    email: "khalid.manager@example.com",
    phone: "0678901235",
    dateStart: "2021-08-15",
    workExperience: [
      {
        startDate: "2018-01-01",
        endDate: "2021-07-31",
        title: "Team Lead",
        company: "Company K",
      }
    ],
    room: "conference",
  },
  {
    id: 1732309385140,
    name: "Mouna F.",
    role: "receptionist",
    age: 25,
    photo: "https://randomuser.me/api/portraits/women/101.jpg",
    email: "mouna.reception@example.com",
    phone: "0689012346",
    dateStart: "2023-07-01",
    workExperience: [],
    room: "reception",
  }
];


let roomWithEachEmployees = {
  conference: ["cleaner", "visiter", "manager", "it"],
  reception: ["receptionist", "cleaner", "manager"],
  server: ["it", "cleaner", "manager"],
  security: ["security", "cleaner", "manager"],
  staff: ["cleaner", "manager", "it", "security"],
  archives: ["manager"]
};

displayEmployees();

availableBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const room = e.target.dataset.room;

    Overlay.style.display = "flex";

    let filteredEmployes = employes.filter((emp) => roomWithEachEmployees[room].includes(emp.role) && emp.room !== room);

    workers.innerHTML = "";

    filteredEmployes.forEach((emp) => {
      let div = document.createElement("div");
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
        const id = div.dataset.id;
        const emp = employes.find((emp) => emp.id == id);
        emp.room = room;
        Overlay.style.display = "none";
        displayEmployees();
      })

    });
  });
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
    div.remove();
  });
});

function checkRoomCount() {
  let rooms = document.querySelectorAll("#rooms article");

  rooms.forEach(room => {
    let count = room.querySelector(".room").childElementCount;
    if (count === 0) room.classList.add("bg-red-500", "bg-opacity-30");
    else room.classList.remove("bg-red-500", "bg-opacity-30");
  })

}

function displayEmployees() {
  workerList.innerHTML = "";
  document.querySelectorAll(".room").forEach(room => room.innerHTML = "");

  employes.forEach((em) => {
    let div = document.createElement("div");
    div.dataset.id = em.id;

    if (em.room == null) {
      div.className = "employe flex-shrink-0 w-[90%] h-[8vh] mx-auto bg-white border-2 border-[#c8630b] rounded-md flex justify-center items-center";
      div.innerHTML = `
      <div class="flex justify-between items-center w-[90%] mx-auto">
          <img class="w-[40px] h-[40px] rounded-full" src="${em.photo}" alt="${em.name}" >
          <div class="flex flex-col justify-evenly">
            <p class="m-0 text-sm font-bold" >${em.name}</p>
            <p class="m-0 text-sm text-slate-700 capitalize">${em.role}</p>
            </div>
            <div class="flex flex-col">
            <button class="show-more border bg-green-500 rounded-md px-1 font-bold text-white capitalize">show</button>
            </div>
            </div>
            `;
      workerList.appendChild(div);
    } else {
      div.className = "employe flex-shrink-0 w-[55%] h-[8vh] flex justify-center items-center bg-white border-2 border-[#c8630b] rounded-md";
      div.innerHTML = `
      <div class="w-[95%] flex justify-between items-center">
          <img class="w-[40px] h-[40px] rounded-full" src="${em.photo}" alt="${em.name}">
          <div class="w-[70%] flex justify-between items-center">
            <div class="flex flex-col">
              <p class="m-0 text-sm font-bold text-black" >${em.name}</p>
              <p class="m-0 text-sm text-slate-700 capitalize">${em.role}</p>
            </div>
            <div class="flex gap-1">
              <button class="show-more border bg-green-500 rounded-md px-1 font-bold text-white capitalize">show</button>
              <button class="leave-room font-bold bg-red-500 text-white rounded-md px-2 flex justify-center items-center">x</button>
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

  checkRoomCount();
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

image.addEventListener("input", e => {
  value = e.target.value;
  if (value){
    preview.classList.remove("hidden");
    preview.src = value;
  } else {
    preview.classList.add("hidden");
    preview.src = "";
  }
});

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

  if(name.length<3){
      alert("name must be at least 3C");
      return;
  }

  if(age<18 || age>80){
      alert("age must be bettwen 18 and 79");
      return;
  }

  let emailRegex = /^[a-zA-Z0-9\._]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,}$/;
  let phoneNumber = /^0[5-7][0-9]{8}$/;

  if(!emailRegex.test(email)){
      alert("email invalid");
      return;
  }

   if(!phoneNumber.test(phone)){
      alert("Invalid morocain number");
      return;
   }

   if(new Date(dateStart) > Date.now()){
      alert("Date start must not be in the future");
      return;
   }

  employes.push({
    id: Date.now(),
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

  displayEmployees();
  form.reset();
  form.classList.add("hidden");
  experiences.innerHTML = "";
});

newWorker.addEventListener("click", () => {
  form.classList.remove("hidden");
});

addWorkerCloseBtn.addEventListener("click", () => {
  form.reset();
  form.classList.add("hidden");
  experiences.innerHTML = "";
});

closeEmployeModal.addEventListener("click", () => {
  employeOverlay.style.display = "none";
});

cancelOverlay.addEventListener("click", () => {
  Overlay.style.display = "none";
});
