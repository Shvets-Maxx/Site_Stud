const it_web = document.querySelector('.it_web')
const it_general = document.querySelector('.it_general')
const it_embedded = document.querySelector('.it_embedded')
const media_department = document.querySelector('.media_department')
const project_department = document.querySelector('.project_department')
const main = document.querySelector('.main')


        const dataLocalStorage = localStorage.getItem("person")
        if(dataLocalStorage){
            const localParse = JSON.parse(dataLocalStorage)
            const personBlock = document.createElement("div");
            personBlock.innerHTML = `

                <section class="main_section-info">
                    <div class="section-info_container">
                        <div class="section_block-aboutUs">
                            <div class="section_title">
                                <h1>${localParse.department} > <span class="section_title__nowrap">${localParse.name}</span> </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main_section-person">
                    <div class="section-person_container">
                        <div class="section-person_block-photo">
                            <img class="section_photo" src="/img/cat.svg" alt="">
                            <div class="section_block-name">
                                <p class="section_person-name">${localParse.name}</p>
                            </div>
                        </div>
                        <div class="section-info_block-data">
                            <div class="section_wrapper-text">
                                <p>Посада: <span class="color">${localParse.position.map(pos => `${pos}`).join(' / ')}</span> </p>
                                <p>Спеціальність: <span class="color">${localParse.specialty}</span> </p>
                                <p>Курс: <span class="color">${localParse.course}</span></p>
                                <p>Група: <span class="color">${localParse.group}</span></p>
                            </div>
                            <div class="section_social-links">
                                <a class="instagram" href="${localParse.instagram }"><img src="../img/inst2.png" alt="${localParse.name} Instagram"></a>
                                <a class="telegram" href="${localParse.telegram }"><img src="../img/Telegram2.png" alt="${localParse.name} Telegram"></a>
                                <a class="linkedin" href="${localParse.linkedin }"><img src="../img/Social Linkedin2.png" alt="${localParse.name} LinkedIn"></a>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            main.appendChild(personBlock)
        }
        
      


    

