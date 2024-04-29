let menubar = document.getElementById("menubar");
let cutbutton = document.getElementById("cutbutton");
let SkillSet = document.getElementById("skillbox");
let ProjectBox = document.getElementById("projectbox");
const content = document.querySelector("#content");
let activeTab = 0;

function toggleNavbar() {
  menubar.classList.toggle("hide");
  cutbutton.classList.toggle("hide");
}

function selectoption(tabNumber) {
  let x = "tab-" + tabNumber;
  activeTab = tabNumber;
  scrollContent();
  clearActive();
  document.getElementById(x).className = "detailsbtn";
}

function scrollContent() {
  const contentWidth = content.scrollWidth / 3;
  content.scrollTo({ left: activeTab * contentWidth, behavior: "smooth" });
}

function clearActive() {
  for (let i = 0; i < 3; i++) {
    let y = "tab-" + i;
    document.getElementById(y).className = "";
  }
}

function loadSkills() {
  for (let i = 1; i <= skills.length; i++) {
    skillbox.innerHTML += ` <div class="skillcard">
    <div class="skilldata">
      <div class="progresshead">
        <p>${skills[i - 1].name}</p>
        <p1>${skills[i - 1].percent}</p1>
      </div>
    <div class="progressbar">
      <div class="progress ${skills[i - 1].class}"></div>
    </div>
    </div>
    <div class="skillintro">
      <img src="${skills[i - 1].image}" alt="${skills[i - 1].name}" />
    </div>
    </div>
    `;
  }
  console.log(skillbox.innerHTML);
}

function loadProjects() {
  for (let i = 1; i <= data.length; i++) {
    ProjectBox.innerHTML += `
<div class="projectcard">
<div class="projectdata">
  <h4>${data[i - 1].title}</h4>
  <p class="projectabout">
  ${data[i - 1].about}
  </p>
  <p id="bottomtags"> ${data[i - 1].languages}</p>
  <a href=" ${data[i - 1].link}" target="_blank"
    >View Project</a
  >
</div>
</div>
`;
  }
}
loadSkills();
loadProjects();
