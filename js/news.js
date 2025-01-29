
fetch("/js/news.json")
  .then(response => response.json())
  .then(response => {
    console.log(response);

    const newsArray = response.news;
    const paginatedList = document.getElementById("paginated-list");

    newsArray.forEach((person) => {
      const personLi = document.createElement("li");
      personLi.innerHTML = `
        <a class="click" href="../html/newsInfo.html">
          <div class="slide_photo">
            <img src="${person.titleImg}" alt="">
            <div class="slide_text">
              <div class="text">
                <p>${person.titleText}</p>
              </div>
              <div class="date">
                <p>${person.date}</p>
              </div>
            </div>
          </div>
        </a>
      `;

      paginatedList.appendChild(personLi);

      const clickElement = personLi.querySelector(".click");
      if (clickElement) {
        clickElement.addEventListener("click", () => {
          localStorage.setItem("person", JSON.stringify(person));
        });
      }
    });

    initializePagination();
  })
  .catch(error => console.error("Error loading news:", error));

function initializePagination() {
  const paginationNumbers = document.getElementById("pagination-numbers");
  const paginatedList = document.getElementById("paginated-list");
  const listItems = paginatedList.querySelectorAll("li");
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");

  let paginationLimit;

  const setPaginationLimit = () => {
    if (window.innerWidth > 1024) {
      paginationLimit = 8;
    } else if (window.innerWidth > 700) {
      paginationLimit = 6;
    } else {
      paginationLimit = 4;
    }
  };

  setPaginationLimit();
  window.addEventListener("resize", () => {
    setPaginationLimit();
    setCurrentPage(1);
  });

  const pageCount = Math.ceil(listItems.length / paginationLimit);
  let currentPage = 1;

  const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
  };

  const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
  };

  const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
      disableButton(prevButton);
    } else {
      enableButton(prevButton);
    }

    if (pageCount === currentPage) {
      disableButton(nextButton);
    } else {
      enableButton(nextButton);
    }
  };

  const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    if (index === currentPage) {
      pageNumber.classList.add("active");
    }

    paginationNumbers.appendChild(pageNumber);
  };

  const getPaginationNumbers = () => {
    paginationNumbers.innerHTML = "";

    appendPageNumber(1);

    const dynamicButtons = 4;
    let start = Math.max(2, currentPage - Math.floor(dynamicButtons / 2));
    let end = start + dynamicButtons - 1;

    if (end >= pageCount) {
      end = pageCount - 1;
      start = Math.max(2, end - dynamicButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      appendPageNumber(i);
    }

    if (pageCount > 1) {
      appendPageNumber(pageCount);
    }
  };

  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handlePageButtonsStatus();
    getPaginationNumbers();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
      item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden");
      }
    });
  };

  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  paginationNumbers.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("pagination-number")) {
      const pageIndex = Number(target.getAttribute("page-index"));
      setCurrentPage(pageIndex);
    }
  });
}
