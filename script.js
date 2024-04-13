const socialsEl = document.querySelector("#socials");
const projectsEl = document.querySelector("#projects");
const writingEl = document.querySelector("#wrtiting");

const socialHandles = [
  {
    Link: "https://twitter.com/Harshitmahajan_",
    platform: "twitter",
  },
  {
    Link: "https://github.com/HarshitMahajan",
    platform: "github",
  },
  {
    Link: "https://peerlist.io/harshitmahajan",
    platform: "peerlist",
  },
  {
    Link: "https://www.linkedin.com/in/hm1104/",
    platform: "linkedin",
  },
    
];

// const writingArray = [
//   {
//     title: "AgriCultivateIQ",
//     desc: "A program that help farmers to get the best crop recommendation based on the soil type, weather, location and other factors. It uses machine learning to predict the best crop.",
//     notionLink: "https://github.com/HarshitMahajan/ ",  
//   },
  
// ];

const projectsArray = [
  {
    title: "AgriCultivateIQ",
    desc: "A program that help farmers to get the best crop recommendation based on the soil type, weather, location and other factors. It uses machine learning to predict the best crop.",
    githubLink: "https://github.com/HarshitMahajan/Crop-recommendation-system/ ",
    demoLink: " https://github.com/HarshitMahajan/Crop-recommendation-system/blob/main/crop%20recommendation%20.ipynb",
  },
  {
    title: "FusionPdf",
    desc: "A simple Python Project that lets you Merge n number of PDFs into one PDF and have features like sort pdf, re-arrange and event delete in the interface.",
    githubLink: "https://github.com/HarshitMahajan/FusionPdf",
    demoLink: " https://github.com/HarshitMahajan/FusionPdf/blob/main/README.md ",
  },
  {
    title: "Code Canvas",
    desc: "A simple Html website where you can actually test out what you are building in real time. It has a code editor and a preview section.",
    githubLink:"https://github.com/HarshitMahajan/CodeCanvas",
    demoLink: "https://code-canvas-gilt.vercel.app/ ",
  },
  {
    title: "Youtube downloader",
    desc: "A program that lets you download youtube videos at the best quality.",
    githubLink:"https://github.com/HarshitMahajan/Youtuber-Download- ",
    demoLink: " ",
  },
  {
    title: "Photo Enhancer",
    desc: "A program that lets you Enhance your photos without doing anything.",
    githubLink:"https://github.com/HarshitMahajan/Photo-Editor ",
    demoLink: " ",
  },
  {
    title: "Desktop Cleaner",
    desc: "A simple script to clean all your files with one tap.",
    githubLink:"https://github.com/HarshitMahajan/Youtuber-Download- ",
    demoLink: " ",
  },
];


socialHandles.forEach((social, index) => {
  const a = document.createElement("a");
  a.href = social.Link;
  a.textContent = social.platform;
  a.target = "_blank";

  socialsEl.appendChild(a);
});

projectsArray.forEach((project, index) => {
  const div = document.createElement("div");
  div.style.display = "flex"
  div.style.flexDirection = "column"
  div.style.gap = "10px"
  div.style.marginLeft = "15px"
  div.style.color = "rgb(229, 231, 235)"
  const h3 = document.createElement("h3");
  h3.className = "project-title";
  h3.textContent = `- ${project.title}`;
  h3.style.marginLeft = "-15px"
  const p = document.createElement("p");
  p.textContent = project.desc;
  const links = document.createElement("div")
  links.className = "links"
  const githubLink = document.createElement("a");
  githubLink.target = "_blank";
  githubLink.href = project.githubLink;
  githubLink.textContent = "github";
  githubLink.style.display = project.githubLink ? "block" : "none"
  const demoLink = document.createElement("a");
  demoLink.target = "_blank";
  demoLink.href = project.demoLink;
  demoLink.textContent = "demo";

  links.append(githubLink, demoLink);

  div.append(h3, p, links);

  projectsEl.appendChild(div);
});

writingArray.forEach((writing, index) => {
  const div = document.createElement("div");
  div.style.display = "flex"
  div.style.flexDirection = "column"
  div.style.gap = "10px"
  div.style.marginLeft = "15px"
  div.style.color = "rgb(229, 231, 235)"
  const h3 = document.createElement("h3");
  h3.className = "writing-title";
  h3.textContent = `- ${writing.title}`;
  h3.style.marginLeft = "-15px"
  const p = document.createElement("p");
  p.textContent = writing.desc;
  const links = document.createElement("div")
  links.className = "links"
  const notionLink = document.createElement("a");
  notionLink.target = "_blank";
  notionLink.href = writing.notionLink;
  notionLink.textContent = "notion";
  notionLink.style.display = project.notionLink ? "block" : "none"
  const demoLink = document.createElement("a");
  demoLink.target = "_blank";
  demoLink.href = project.demoLink;
  demoLink.textContent = "demo";

  links.append(notionLink, demoLink);

  div.append(h3, p, links);

  projectsEl.appendChild(div);
});






