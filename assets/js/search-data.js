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
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-presented-my-honors-thesis-an-exploration-of-deep-learning-methods-for-anomaly-detection-in-high-energy-jets",
          title: 'Presented my honors thesis, “An Exploration of Deep Learning Methods for Anomaly Detection...',
          description: "",
          section: "News",},{id: "news-placed-18th-out-of-120-in-the-2025-fsae-ic-competition-the-highest-placing-for-brown-university-since-2000",
          title: 'Placed 18th out of 120 in the 2025 FSAE IC Competition, the highest...',
          description: "",
          section: "News",},{id: "news-graduated-from-brown-with-an-sc-b-in-mathematical-physics-and-an-a-b-in-computer-science",
          title: 'Graduated from Brown with an Sc.B. in Mathematical Physics and an A.B. in...',
          description: "",
          section: "News",},{id: "news-started-full-time-as-a-gnc-engineer-at-vatn-systems",
          title: 'Started full time as a GNC Engineer at Vatn Systems.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%72%64%61%6E%70%66%65%69%66%65%72%32%37@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jordanpfeifer21", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pfeifer-jordan", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7718-087X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7K7KSjIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
