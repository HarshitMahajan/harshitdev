const socialsEl = document.querySelector("#socials");
const projectsEl = document.querySelector("#projects");

const socialHandles = [
  {
    Link: "https://twitter.com/Harshitmahajan_",
    // imgSrc: "images/twitter-logo.png",
    platform: "twitter",
  },
  {
    Link: "https://github.com/HarshitMahajan",
    platform: "github",
  },
  {
    Link: "https://peerlist.io/",
    platform: "peerlist",
  },
  {
    Link: "https://www.linkedin.com/in/hm1104/",
    platform: "linkedin",
  },
  {
    Link: "https://www.instagram.com/harshitmaj_/",
    platform: "instagram",
  },
  
];

const projectsArray = [
  {
    title: "AgriCultivateIQ",
    desc: "A program that help farmers to get the best crop recommendation based on the soil type, weather, location and other factors. It uses machine learning to predict the best crop.",
    githubLink: "https://github.com/HarshitMahajan/ ",
    demoLink: "",
  },
  {
    title: "FusionPdf",
    desc: "A simple Python Project that lets you Merge n number of PDFs into one PDF and have features like sort pdf, re arrange and event delete in the interface.",
    githubLink: "https://github.com/HarshitMahajan/FusionPdf",
    demoLink: "https://twitter.com/anonthedev/status/1753402885961093391",
  },
  {
    title: "youdio",
    desc: "A webapp that let's you convert youtube to an online audio jukebox. Supabase took it down due to no interactivity.",
    demoLink:"https://youdio.xyz",
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