
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
                            <h1>Новини > ${localParse.h1}  </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main_section-events">
                <div class="section-events_block">
                    <p class="date">${localParse.date}</p>
                    <p class="text">${localParse.mainText}</p>
                </div>
            </section>
            <section class="main_section-carousel">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                    ${
                        localParse.imgCourosel.map(pos => `
                        <div class="swiper-slide">
                            <div class="swiper_content">
                                <img src="${pos}"/>
                            </div>
                        </div>
                    `).join("")}
                        
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
            </section>
            `;
            main.appendChild(personBlock)
        }
        
      
