let arr = [
  { id: 1, name: "DevLens", description: "Quickly inspect page layouts and visualize element boundaries.", img: "./img/logo-devlens.svg", isActive: true },
  { id: 2, name: "StyleSpy", description: "Instantly analyze and copy CSS from any webpage element.", img: "img/logo-dom-snapshot.svg", isActive: false },
  { id: 3, name: "SpeedBoost", description: "Optimizes browser resource usage to accelerate page loading.", img: "img/logo-grid-guides.svg", isActive: false },
  { id: 4, name: "JSONWizard", description: "Formats, validates, and prettifies JSON responses in-browser.", img: "img/logo-json-wizard.svg", isActive: true },
  { id: 5, name: "TabMaster Pro", description: "Organizes browser tabs into groups and sessions.", img: "img/logo-link-checker.svg", isActive: true },
  { id: 6, name: "ViewportBuddy", description: "Simulates various screen resolutions directly within the browser.", img: "img/logo-markup-notes.svg", isActive: false },
  { id: 7, name: "Markup Notes", description: "Enables annotation and notes directly onto webpages for collaborative debugging.", img: "img/logo-palette-picker.svg", isActive: true },
  { id: 8, name: "GridGuides", description: "Overlay customizable grids and alignment guides on any webpage.", img: "img/logo-speed-boost.svg", isActive: false },
  { id: 9, name: "Palette Picker", description: "Instantly extracts color palettes from any webpage.", img: "img/logo-style-spy.svg", isActive: false },
  { id: 10, name: "LinkChecker", description: "Scans and highlights broken links on any page.", img: "img/logo-tab-master-pro.svg", isActive: true },
  { id: 11, name: "DOM Snapshot", description: "Capture and export DOM structures quickly.", img: "img/logo-viewport-buddy.svg", isActive: false },
  { id: 12, name: "ConsolePlus", description: "Enhanced developer console with advanced filtering and logging.", img: "img/logo-console-plus.svg", isActive: true }
];

let statuss = "All"



const cardsEl = document.querySelector(".cards")


function show() {
  let html = ""
  arr
    .filter(item => statuss == "All" ? item : statuss == item.isActive)
    .forEach(item => {
      html += ` <div class="card">
                  <div class="card__top">
                      <img src="${item.img}" alt="img">
                      <div class="description">
                          <h3>${item.name}</h3>
                          <p>${item.description}</p>
                      </div>
                  </div>
                  <div class="card__bottom">
                      <button onclick="dell(${item.id})">Remove</button>
                      <div class="form-check form-switch">
                        <input onclick="togle(${item.id}, this)" class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" ${item.isActive ? "checked" : ""}>
                      </div>
                  </div>
              </div>`
    })
  cardsEl.innerHTML = html
}
show()

function dell(id) {
  arr = arr.filter(item => item.id !== id)
  show()

}

function setActive(parameter) {
  statuss = parameter
  show()
}

function togle(id, element) {
  arr = arr.map(item => item.id == id ? { ...item, isActive: element.checked } : item)
  show()
}

function darkMode(){
  document.body.classList.toggle("active")
}

const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btns.forEach(item => item.classList.remove("active"))
        btn.classList.add("active")
    })
})
