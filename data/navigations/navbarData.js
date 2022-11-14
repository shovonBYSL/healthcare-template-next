const navbarData = [
  {
    id: 0,
    label: "Home",
    path: "/",
  },
  {
    id: 1,
    label: "About",
    path: "/about",
  },
  {
    id: 2,
    label: "Services",
    path: "/services",
  },
  {
    id: 3,
    label: "Doctors",
    path: "/doctors",
  },
  {
    id: 4,
    label: "Blog",
    dropdowns: [
      {
        id: 0,
        label: "Blog Grid",
        path: "/blog-grid",
      },
      {
        id: 1,
        label: "Blog List",
        path: "/blog-list",
      },
    ],
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
  },
];

export { navbarData };
