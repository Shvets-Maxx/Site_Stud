
const it_web = document.querySelector('.it_web')
const it_general = document.querySelector('.it_general')
const it_embedded = document.querySelector('.it_embedded')
const media_department = document.querySelector('.media_department')
const project_department = document.querySelector('.project_department')
const our_team = document.querySelector('.container_section-team')
fetch("/js/peopleList.json")
.then(response => response.json()
).then(response =>{
    console.log(response)
    response.vacancies.our_team.forEach((person) => {
        const personBlock = document.createElement("div");
        personBlock.innerHTML = `
          <div class="section_wrapper">
            <div class="section_block">
              <img class="section_photo-people" src="${person.photo}" alt="${person.name}">
              <div class="section_name-block">
                <p class="namePerson">${person.name}</p>
                <div class="block_social">
                  <a class="instagram" href="${person.instagram }"><img src="../img/inst2.png" alt="${person.name} Instagram"></a>
                  <a class="telegram" href="${person.telegram }"><img src="../img/Telegram2.png" alt="${person.name} Telegram"></a>
                  <a class="linkedin" href="${person.linkedin }"><img src="../img/Social Linkedin2.png" alt="${person.name} LinkedIn"></a>
                </div>
              </div>
              <div class="block_position">
                <div class="p_block">
                  ${person.position.map(pos => `<p class="position">${pos}</p>`).join('')}
                </div>
                <div class="block_arrow">
                    <a class="click" href="/html/specificPerson.html " >
                        <img class="arrow" src="../img/Arrow 1.png" alt="Arrow">
                    </a>
                </div>
              </div>
            </div>
          </div>
        `;
        our_team.appendChild(personBlock)
        const ckck = personBlock.querySelector(".click");
        if (ckck) {
            ckck.addEventListener("click", (e) => {
              localStorage.setItem("person", JSON.stringify(person));
              const personFromStorage = JSON.parse(localStorage.getItem("person"));
              if (personFromStorage) {
                console.log(personFromStorage.id); // Переконайтесь, що `id` існує в person
              }
            });
          }
      });
    response.vacancies.it_web.forEach((person) => {
        const personBlock = document.createElement("div");
        personBlock.innerHTML = `
          <div class="section_wrapper">
            <div class="section_block">
              <img class="section_photo-people" src="${person.photo}" alt="${person.name}">
              <div class="section_name-block">
                <p class="namePerson">${person.name}</p>
                <div class="block_social">
                  <a class="instagram" href="${person.instagram }"><img src="../img/inst2.png" alt="${person.name} Instagram"></a>
                  <a class="telegram" href="${person.telegram }"><img src="../img/Telegram2.png" alt="${person.name} Telegram"></a>
                  <a class="linkedin" href="${person.linkedin }"><img src="../img/Social Linkedin2.png" alt="${person.name} LinkedIn"></a>
                </div>
              </div>
              <div class="block_position">
                <div class="p_block">
                  ${person.position.map(pos => `<p class="position">${pos}</p>`).join('')}
                </div>
                <div class="block_arrow">
                    <a class="click" href="/html/specificPerson.html " >
                        <img class="arrow" src="../img/Arrow 1.png" alt="Arrow">
                    </a>
                </div>
              </div>
            </div>
          </div>
        `;
        it_web.appendChild(personBlock)
        const ckck = personBlock.querySelector(".click");
        if (ckck) {
            ckck.addEventListener("click", (e) => {
              localStorage.setItem("person", JSON.stringify(person));
              const personFromStorage = JSON.parse(localStorage.getItem("person"));
              if (personFromStorage) {
                console.log(personFromStorage.id); // Переконайтесь, що `id` існує в person
              }
            });
          }
      });
      
    response.vacancies.it_general.forEach((person) => {
        const personBlock = document.createElement("div");
        personBlock.innerHTML = `
          <div class="section_wrapper">
            <div class="section_block">
              <img class="section_photo-people" src="${person.photo}" alt="${person.name}">
              <div class="section_name-block">
                <p class="namePerson">${person.name}</p>
                <div class="block_social">
                  <a class="instagram" href="${person.instagram }"><img src="../img/inst2.png" alt="${person.name} Instagram"></a>
                  <a class="telegram" href="${person.telegram }"><img src="../img/Telegram2.png" alt="${person.name} Telegram"></a>
                  <a class="linkedin" href="${person.linkedin }"><img src="../img/Social Linkedin2.png" alt="${person.name} LinkedIn"></a>
                </div>
              </div>
              <div class="block_position">
                <div class="p_block">
                  ${person.position.map(pos => `<p class="position">${pos}</p>`).join('')}
                </div>
                <div class="block_arrow">
                    <a class="click" href="/html/specificPerson.html " >
                        <img class="arrow" src="../img/Arrow 1.png" alt="Arrow">
                    </a>
                </div>
              </div>
            </div>
          </div>
        `;
        it_general.appendChild(personBlock)
        const ckck = personBlock.querySelector(".click");
        if (ckck) {
            ckck.addEventListener("click", (e) => {
              localStorage.setItem("person", JSON.stringify(person));
              const personFromStorage = JSON.parse(localStorage.getItem("person"));
              if (personFromStorage) {
                console.log(personFromStorage.id); // Переконайтесь, що `id` існує в person
              }
            });
          }
      });
    response.vacancies.it_embedded.forEach((person) => {
        const personBlock = document.createElement("div");
        personBlock.innerHTML = `
          <div class="section_wrapper">
            <div class="section_block">
              <img class="section_photo-people" src="${person.photo}" alt="${person.name}">
              <div class="section_name-block">
                <p class="namePerson">${person.name}</p>
                <div class="block_social">
                  <a class="instagram" href="${person.instagram }"><img src="../img/inst2.png" alt="${person.name} Instagram"></a>
                  <a class="telegram" href="${person.telegram }"><img src="../img/Telegram2.png" alt="${person.name} Telegram"></a>
                  <a class="linkedin" href="${person.linkedin }"><img src="../img/Social Linkedin2.png" alt="${person.name} LinkedIn"></a>
                </div>
              </div>
              <div class="block_position">
                <div class="p_block">
                  ${person.position.map(pos => `<p class="position">${pos}</p>`).join('')}
                </div>
                <div class="block_arrow">
                    <a class="click" href="/html/specificPerson.html " >
                        <img class="arrow" src="../img/Arrow 1.png" alt="Arrow">
                    </a>
                </div>
              </div>
            </div>
          </div>
        `;
        it_embedded.appendChild(personBlock)
        const ckck = personBlock.querySelector(".click");
        if (ckck) {
            ckck.addEventListener("click", (e) => {
              localStorage.setItem("person", JSON.stringify(person));
              const personFromStorage = JSON.parse(localStorage.getItem("person"));
              if (personFromStorage) {
                console.log(personFromStorage.id); // Переконайтесь, що `id` існує в person
              }
            });
          }
      });
    response.vacancies.media_department.forEach((person) => {
        const personBlock = document.createElement("div");
        personBlock.innerHTML = `
          <div class="section_wrapper">
            <div class="section_block">
              <img class="section_photo-people" src="${person.photo}" alt="${person.name}">
              <div class="section_name-block">
                <p class="namePerson">${person.name}</p>
                <div class="block_social">
                  <a class="instagram" href="${person.instagram }"><img src="../img/inst2.png" alt="${person.name} Instagram"></a>
                  <a class="telegram" href="${person.telegram }"><img src="../img/Telegram2.png" alt="${person.name} Telegram"></a>
                  <a class="linkedin" href="${person.linkedin }"><img src="../img/Social Linkedin2.png" alt="${person.name} LinkedIn"></a>
                </div>
              </div>
              <div class="block_position">
                <div class="p_block">
                  ${person.position.map(pos => `<p class="position">${pos}</p>`).join('')}
                </div>
                <div class="block_arrow">
                    <a class="click" href="/html/specificPerson.html " >
                        <img class="arrow" src="../img/Arrow 1.png" alt="Arrow">
                    </a>
                </div>
              </div>
            </div>
          </div>
        `;
        media_department.appendChild(personBlock)
        const ckck = personBlock.querySelector(".click");
        if (ckck) {
            ckck.addEventListener("click", (e) => {
              localStorage.setItem("person", JSON.stringify(person));
              const personFromStorage = JSON.parse(localStorage.getItem("person"));
              if (personFromStorage) {
                console.log(personFromStorage.id); // Переконайтесь, що `id` існує в person
              }
            });
          }
      });
    response.vacancies.project_department.forEach((person) => {
        const personBlock = document.createElement("div");
        personBlock.innerHTML = `
          <div class="section_wrapper">
            <div class="section_block">
              <img class="section_photo-people" src="${person.photo}" alt="${person.name}">
              <div class="section_name-block">
                <p class="namePerson">${person.name}</p>
                <div class="block_social">
                  <a class="instagram" href="${person.instagram }"><img src="../img/inst2.png" alt="${person.name} Instagram"></a>
                  <a class="telegram" href="${person.telegram }"><img src="../img/Telegram2.png" alt="${person.name} Telegram"></a>
                  <a class="linkedin" href="${person.linkedin }"><img src="../img/Social Linkedin2.png" alt="${person.name} LinkedIn"></a>
                </div>
              </div>
              <div class="block_position">
                <div class="p_block">
                  ${person.position.map(pos => `<p class="position">${pos}</p>`).join('')}
                </div>
                <div class="block_arrow">
                    <a class="click" href="/html/specificPerson.html " >
                        <img class="arrow" src="../img/Arrow 1.png" alt="Arrow">
                    </a>
                </div>
              </div>
            </div>
          </div>
        `;
        project_department.appendChild(personBlock)
        const ckck = personBlock.querySelector(".click");
        if (ckck) {
            ckck.addEventListener("click", (e) => {
              localStorage.setItem("person", JSON.stringify(person));
              const personFromStorage = JSON.parse(localStorage.getItem("person"));
              if (personFromStorage) {
                console.log(personFromStorage.id); // Переконайтесь, що `id` існує в person
              }
            });
          }
      });
          
})


