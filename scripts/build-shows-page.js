import newBandSiteApi from "./band-site-api.js";

//  1. TICKET CARD COMPONENTS
const CreateTicketEl = (subheader, text, hideSubheader) => {
  const pSubheaderEL = document.createElement("p");
  pSubheaderEL.classList.add("tickets__subheader");
  pSubheaderEL.innerText = subheader;
  if (hideSubheader) {
    pSubheaderEL.classList.add("tickets__subheader--hidden");
  }

  const pTicketTextEl = document.createElement("p");
  pTicketTextEl.classList.add("tickets__text");
  pTicketTextEl.innerText = text;

  const divContainerEl = document.createElement("div");
  divContainerEl.classList.add("tickets__card");
  divContainerEl.appendChild(pSubheaderEL);
  divContainerEl.appendChild(pTicketTextEl);

  return divContainerEl;
};

// 2. Appending to the parent container

const appendToParentContainer = async () => {
  const ticketParentContainer = document.querySelector(".tickets");

  try {
    const response = await newBandSiteApi.getShows();

    response.forEach((item, index) => {
      const hideSubheader = index !== 0;

      // Ticket container for card
      const cardContainerEl = document.createElement("div");
      cardContainerEl.classList.add("tickets__container");

      //3.  Event Listener on Container
      cardContainerEl.addEventListener("click", (e) => {
        e.stopPropagation();

        const activeTicketEls = document.querySelectorAll(
          ".tickets__container--active"
        );
        activeTicketEls.forEach((team) => {
          team.classList.remove("tickets__container--active");
        });

        cardContainerEl.classList.add("tickets__container--active");
      });

      const timestamp = item.date;
      const newDate = new Date(timestamp);

      cardContainerEl.appendChild(
        CreateTicketEl("DATE", newDate.toDateString(), hideSubheader)
      );

      cardContainerEl.appendChild(
        CreateTicketEl("VENUE", item.place, hideSubheader)
      );

      cardContainerEl.appendChild(
        CreateTicketEl("LOCATION", item.location, hideSubheader)
      );

      //  Create a ticket Btn and append
      const ticketBtn = document.createElement("button");
      ticketBtn.classList.add("tickets__btn");
      ticketBtn.innerText = "BUY TICKETS";

      cardContainerEl.appendChild(ticketBtn);

      ticketParentContainer.appendChild(cardContainerEl);
    });
  } catch (error) {
    console.error(error);
  }
  return ticketParentContainer;
};
appendToParentContainer();
