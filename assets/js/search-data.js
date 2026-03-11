// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "projects-microloans-through-intermediaries",
          title: 'Microloans through Intermediaries',
          description: "Microloans and local intermediaries as an approach to constrained farm credit systems in Sub-Saharan Africa",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1-project";
            },},];
