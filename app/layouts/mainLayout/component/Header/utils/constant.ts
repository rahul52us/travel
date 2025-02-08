// export const navItems = [
//     { title: "Our Values", link: "/our-values" },
//     { title: "About Us", link: "/about-us" },
//     // { title: "Features", link: "/features" },
//     { title: "Visa Service", link: "/visa-service" },
//     // { title: "Therapists", link: "/therapists" },
//     // { title: "Testimonials", link: "/testimonials" },
//     { title: "Blogs", link: "/blogs" },
//     { title: "Contact Us", link: "/contact-us" },
//   ];


export const navItems = [
  { title: "Our Values", link: "/our-values" },
  { title: "About Us", link: "/about-us" },
  { 
    title: "Services", 
    subItems: [
      { title: "Visa Services", link: "/visa-service" },
      { title: "Business Visa", link: "/visa-service/business" },
      { title: "Student Visa", link: "/visa-service/student" },
    ],
  },
  { title: "Blogs", link: "/blogs" },
  // { 
  //   title: "More", 
  //   subItems: [
  //     { title: "Testimonials", link: "/testimonials" },
  //     { title: "Therapists", link: "/therapists" },
  //   ],
  // },
  { title: "Contact Us", link: "/contact-us" },
];
