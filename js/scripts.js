'use strict'

const about = `
  <h2>
    Front End Web Developer with skills in UX/UI Design and interest in
    Full Stack Programming
  </h2>

  <h3>Who I am</h3>
  <p>
    I’m a kind, curious and creative person who always keeps learning new
    things to develop both personally and professionally.
  </p>

  <h3>What I know</h3>
  <p>
    I have an associate degree in Web Programming, a Front End Developer
    techdegree at Team Treehouse and am working on a Full Stack JavaScript
    techdegree. I want to build beautiful and functional web applications.
  </p>
  <p>
    My background is within graphic design and I’ve also had responsibility
    for marketing coordination and web development. This is helpful since I
    have skills in marketing, design, and programming.
  </p>
  <p>
    For UI/UX design I work with Adobe programs like Illustrator, Photoshop
    and Experience Design.
  </p>
  <p>
    For web development I work with HTML5, CSS3, and JavaScript to build modern,
    responsive and performance optimized web sites and applications. I'm also
    familiar with PHP, Java and SQL.
  </p>
  <p>
    I’m a native Swedish speaker and fluent in English.
  </p>

  <h3>What I do offline</h3>
  <p>
    When I’m not by the computer I like to spend my time traveling, scuba diving,
    horse riding, hiking, and meet up with inspiring and kind people.
  </p>

  <h3>What I’m looking for</h3>
  <p>
    I am looking for a company who wants a long term collaboration. I am very
    flexible according to location, but preferably it’s a remote friendly job.
    I’m open for an employment or a freelance solution.
  </p>`;
const projects = [
    {
      "name"        : "Web App Dashboard",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS", "Sass", "jQuery"],
      "description" : "In this project, I built a web dashboard with JavaScript-driven charts and graphs. I also saved settings in the local storage so it would remain after re-loading the page.",
      "source"      : "https://github.com/CarroForslund/fewd-project9",
      "image"       : "img/portfolio/web-app-dashboard.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project9/"
    },
    {
      "name"        : "Online Registration Form",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS"],
      "description" : "In this project I built a responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes. Using the supplied mockup files, I built a mobile and desktop version of the form using media queries, and a \"mobile-first\" approach.",
      "source"      : "https://github.com/CarroForslund/fewd-project3",
      "image"       : "img/portfolio/online-registration-form.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project3/"
    },
    {
      "name"        : "Interactive Photo Gallery",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS", "JavaScript", "jQuery"],
      "description" : "In this project I created an interactive photo gallery using JavaScript and jQuery. Thumbnails and photos were provided with descriptions. At the top of the page I implemented a search function that will hide and show images depending on user input. When the user clicks on a thumbnail, the photo will display in a lightbox.",
      "source"      : "https://github.com/CarroForslund/fewd-project4",
      "image"       : "img/portfolio/interactive-photo-gallery.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project4/"
    },
    {
      "name"        : "Web Style Guide",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS", "Sass", "BEM"],
      "description" : "In this project, I was provided an index.html file with a set of class names already defined. I was responsible for creating rules to style the web page using each of those class names. I create a sass project to do this, using partials, variables, extends, and mixins to apply the styles and classes to the style guide page.",
      "source"      : "https://github.com/CarroForslund/fewd-project5",
      "image"       : "img/portfolio/web-style-guide.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project5/"
    },
    {
      "name"        : "Interactive Video Player",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS", "JavaScript"],
      "description" : "In this project, I built an HTML5 video player using JavaScript and the HTML5 Video API. Using the supplied mockups, video files, and transcript, I built an interactive video player that synchronizes a video and its transcript. The transcript highlight as the video progresses. When a user clicks any part of the transcript it takes them to the appropriate place in the video.",
      "source"      : "https://github.com/CarroForslund/fewd-project6",
      "image"       : "img/portfolio/interactive-video-player.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project6/"
    },
    {
      "name"        : "Wheel of Success Game",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS", "JavaScript"],
      "description" : "In this project, I created a browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.",
      "source"      : "https://github.com/CarroForslund/fewd-project7",
      "image"       : "img/portfolio/wheel-of-success.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project7/"
    },
    {
      "name"        : "SVG Animations",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS", "SVG"],
      "description" : "In this project, I used SVGs to spruce up and add a bit of character to a website. I was given a mockup, some basic HTML and CSS, and matching SVG files. I learned how to create SVG symbols and to manipulate SVGs depending of media queries.",
      "source"      : "https://github.com/CarroForslund/fewd-project8",
      "image"       : "img/portfolio/svg-animations.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project8/"
    },
    {
      "name"        : "Employee Directory",
      "tag"         : "web",
      "skills"      : ["HTML", "CSS", "JavaScript", "Json", "Public API"],
      "description" : "In this project, I used the Random User Generator API (https://randomuser.me/) to grab information for 12 random “employees,” and used that data to build a prototype for an Awesome Startup employee directory. The app requests a JSON object from the API and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.",
      "source"      : "https://github.com/CarroForslund/fewd-project10",
      "image"       : "img/portfolio/employee-directory.jpg",
      "demo"        : "https://carroforslund.github.io/fewd-project10/"
    },
    {
      "name"        : "React Flickr Gallery",
      "tag"         : "web",
      "skills"      : ["JavaScript", "ReactJS", "React Router 4", "JSX", "npm", "axios"],
      "description" : "In this project, I built an image gallery using React and the Flickr API. After creating the project with create-react-app, I did build the gallery components, wrote the CSS and did set up routing.",
      "source"      : "https://github.com/CarroForslund/fewd-project11",
      "image"       : "",
      "demo"        : ""
    },
    {
      "name"        : "Bellivis Logo",
      "tag"         : "design",
      "skills"      : ["Vector Graphics"],
      "description" : "Logo for Recruitment Company",
      "source"      : "",
      "image"       : "img/portfolio/bellivis-logo.jpg",
      "demo"        : ""
    },
    {
      "name"        : "Pro Linjärteknik Branding",
      "tag"         : "design",
      "skills"      : ["Sketch", "Idea", "Branding", "Vector Graphics", "Layout"],
      "description" : "Logo, Brand Style Guide, Stationary Design and WordPress Website for a young and innovative industrial company.",
      "source"      : "",
      "image"       : "img/portfolio/prolin-branding.jpg",
      "demo"        : ""
    },
    {
      "name"        : "Säljoptimera Branding",
      "tag"         : "design",
      "skills"      : ["Idea", "Branding", "Vector Graphics", "Layout"],
      "description" : "Logo, Brand Style Guide, Stationary Design and WordPress Website for a smart and tuff sales/business coaching company.",
      "source"      : "",
      "image"       : "img/portfolio/saljoptimera-branding.jpg",
      "demo"        : ""
    },
    {
      "name"        : "JKH Stable Logo",
      "tag"         : "design",
      "skills"      : ["Sketch", "Idea", "Vector Graphics"],
      "description" : "Logo for a professional showjumping stable.",
      "source"      : "",
      "image"       : "img/portfolio/jkh-logo.jpg",
      "demo"        : ""
    },
    {
      "name"        : "Holstensboda Logo",
      "tag"         : "design",
      "skills"      : ["Sketch", "Idea", "Vector Graphics"],
      "description" : "Main logo for a company with several subsidiaries.",
      "source"      : "",
      "image"       : "img/portfolio/holstensboda-logo.jpg",
      "demo"        : ""
    },
    {
      "name"        : "Carnaby Wines Logo",
      "tag"         : "design",
      "skills"      : ["Sketch", "Idea", "Vector Graphics"],
      "description" : "Logo for a wine importing business.",
      "source"      : "",
      "image"       : "img/portfolio/carnaby-wines-logo.jpg",
      "demo"        : ""
    },
    {
      "name"        : "CaLi Logo",
      "tag"         : "design",
      "skills"      : ["Sketch", "Idea", "Vector Graphics"],
      "description" : "Logo for a trucker company.",
      "source"      : "",
      "image"       : "img/portfolio/cali-logo.jpg",
      "demo"        : ""
    }
];
const contact = `
  <h2>Contact me</h2>
  <p>
    Feel free to reach out to me. I'm almost always available in the digital world.
    And if you wanna meet up IRL for a coffee or something I'm currently
    living in Hallstahammar in Sweden.
  </p>
  <p><strong>Email</strong></br>
    info@carolineforslund.se
  </p>
  <p>
    <strong>Phone</strong></br>
    +46 70 33 66 301
  </p>
  <p>
    <strong>Skype</strong></br>
    carro.forslund
  </p>`;

const aboutLink = document.getElementById('nav-about');
const portfolioLink = document.getElementById('nav-portfolio');
const contactLink = document.getElementById('nav-contact');
const navLinks = [ aboutLink, portfolioLink, contactLink ];
const main = document.getElementsByTagName('main')[0];
const body = document.body;

//Load about page
function loadPage(){

  createNavLinks();

  const container = document.createElement('div');
  main.appendChild(container);
  container.innerHTML = about;

}

//Nav Links
function createNavLinks(){

  for (let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function(e){
      e.preventDefault();

      navLinks.forEach(function(link){
        link.classList.remove('current');
      });

      this.classList.add('current');

      while(main.firstChild){
        main.removeChild(main.firstChild);
      }
      loadContent(navLinks[i].id);
    });
  }
}

//Load page content for each page
function loadContent(clickedLink){

  if (clickedLink === 'nav-about'){
    main.innerHTML = about;
  }
  else if (clickedLink === 'nav-portfolio'){

    const projectsTitle = document.createElement('h2');
    projectsTitle.innerHTML = "Projects";
    main.appendChild(projectsTitle);

    projects.forEach( function (project){

      const projectDiv = document.createElement('div');
      projectDiv.className = "project";
      projectDiv.addEventListener('click', function(){
        console.log('open modal window');
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        body.appendChild(overlay);

        //Close overlay on click
        overlay.addEventListener('click', function(event){
          if (event.target !== this) {
            return;
          }
          else {
            overlay.remove();
          }
        });
      });

      const projectName = document.createElement('h3');
      projectName.innerHTML = project.name;
      projectDiv.appendChild(projectName);

      const projectImage = document.createElement('img');
      projectImage.src = project.image;
      projectImage.alt = project.name;
      projectImage.className = "project-image";
      projectDiv.appendChild(projectImage);

      const projectDescription = document.createElement('div');
      projectDescription.className = "project-description";
      projectDiv.appendChild(projectDescription);

      const descriptionTitle = document.createElement('h4');
      descriptionTitle.innerHTML = "Project Description";
      projectDescription.appendChild(descriptionTitle);

      const description = document.createElement('p');
      description.innerHTML = project.description;
      projectDescription.appendChild(description);

      main.appendChild(projectDiv);
    });
  }
  else {
    main.innerHTML = contact;
  }
}

function displayProject(projectsArray){

}

loadPage();

// function addLinksToProjects(){
//   const projects = document.getElementsByClassName('project');
//   console.log(projects);
//   for (let i = 0; i < projects.length; i++){
//     projects[i].id = 'project-1' + i;
//     projects[i].addEventListener('click', (e) => {
//       console.log('click');
//       displayProject(projects[i].id);
//     });
//   }
// }
//
// function displayProject(projectId){
//
//   //Variables
//   const body = document.body;
//   const overlay = document.createElement('div');
//   const project = document.getElementById(projectId);
//   const projectCard = document.createElement('div');
//   const projectImg = document.createElement('img');
//   console.log('project', project);
//
//   //Overlay
//   overlay.id = 'overlay';
//   body.appendChild(overlay);
//
//   //Close overlay on click
//   overlay.addEventListener('click', function(event){
//     if (event.target !== this) {
//       return;
//     }
//     else {
//       overlay.remove();
//     }
//   });
//
//   // Project Card
//   projectCard.className = 'project-card';
//   overlay.appendChild(projectCard);
//
//   //Project Image
//   projectImg.className = 'project-image';
//   console.log(project);
//   projectImg.src = project.getElementsByClassName('project-image')[0].src;
//   projectCard.appendChild(projectImg);
//
// }
//
//
// addLinksToProjects();
