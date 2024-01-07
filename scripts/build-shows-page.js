const ticketObject = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

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

  //2.  Event Listener on Container
  divContainerEl.addEventListener("click", () => {
    const activeTicketEls = document.querySelectorAll(
      ".teams__team-row--active"
    );
    activeTicketEls.forEach((team) => {
      team.classList.remove("teams__team-row--active");
    });

    divContainerEl.classList.add("teams__team-row--active");
  });

  return divContainerEl;
};

// 3. Appending to the parent container

const appendToParentContainer = () => {
  const ticketParentContainer = document.querySelector(".tickets");
  ticketObject.forEach((item, index) => {
    const hideSubheader = index !== 0;

    // Ticket container for card
    const cardContainerEl = document.createElement("div");
    cardContainerEl.classList.add("tickets__container");

    cardContainerEl.appendChild(
      CreateTicketEl("DATE", item.date, hideSubheader)
    );

    cardContainerEl.appendChild(
      CreateTicketEl("VENUE", item.venue, hideSubheader)
    );

    cardContainerEl.appendChild(
      CreateTicketEl("LOCATION", item.location, hideSubheader)
    );

    //4.  Create a ticket Btn and append
    const ticketBtn = document.createElement("button");
    ticketBtn.classList.add("tickets__btn");
    ticketBtn.innerText = "BUY TICKETS";

    cardContainerEl.appendChild(ticketBtn);

    ticketParentContainer.appendChild(cardContainerEl);
  });

  return ticketParentContainer;
};
appendToParentContainer();
