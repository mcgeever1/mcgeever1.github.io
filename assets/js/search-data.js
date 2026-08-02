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
            },},{id: "projects-mtg-cascade",
          title: 'MTG Cascade',
          description: "A zero-dependency browser game that tests your knowledge of Magic the Gathering card popularity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2-project";
            },},{id: "projects-simulating-bird-flock-patters-with-linear-algebra",
          title: 'Simulating bird flock patters with linear algebra',
          description: "Mapping Bird Murmations to xyz vectorspace as a &quot;non-math&quot; friendly approach to linear algebra.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3-project";
            },},];
