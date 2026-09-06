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
  },{id: "projects-simulating-bird-flock-patters-with-linear-algebra",
          title: 'Simulating bird flock patters with linear algebra',
          description: "Mapping Bird Murmations to xyz vectorspace as a &quot;non-math&quot; friendly approach to linear algebra",
          section: "Projects",handler: () => {
              window.location.href = "/projects/birds";
            },},{id: "projects-cascade",
          title: 'Cascade',
          description: "A Magic the Gathering browser game that tests your knowledge of card popularity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cascade";
            },},];
