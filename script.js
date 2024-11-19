const projects = [
  {
    title: "New Project",
    image: "images/new-project.jpg",
    url: "new-project.html",
  },
];

const worksList = document.getElementById("works-index");
projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("p-worksIndex__listItem", "c-cardWorks", "worksCard");
  projectItem.innerHTML = `
    <a href="${project.url}">
      <div class="c-cardWorks__thumb">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="c-cardWorks__info">
        <h3 class="c-cardWorks__ttl">${project.title}</h3>
      </div>
    </a>
  `;
  worksList.appendChild(projectItem);
});
