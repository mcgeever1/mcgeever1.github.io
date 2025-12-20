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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-indicators",
        
          title: "Indicators",
        
        description: "Thoughts on indicators and exploring them in everyday life.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/indicators/";
          
        },
      },{id: "projects-microloans-through-intermediaries",
          title: 'Microloans through Intermediaries',
          description: "Microloans and local intermediaries as an approach to constrained farm credit systems in Sub-Saharan Africa",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1-project";
            },},];
