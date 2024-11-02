import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dhruvi Prajapati",
  initials: "DP",
  url: "https://techtrio.net",
  location: "Bharuch, IN",
  locationLink: "https://maps.app.goo.gl/8kFS9toXQzFx1m3b8",
  description:
    "Student turned Developer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "At the end of 2023, I hold a bachelor's degree in Mathematics (2023) and am currently pursuing my MCA. My journey includes personal projects, competing in 1 hackathons, and an ongoing interest in learning DSA.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "jQuery",
    "php",
    "Laravel",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prajapatidhruvi1103@gmail.com",
    tel: "+919724218079",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dhruvi1103",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelancing",
      href: "https://www.nishthahostel.in",
      badges: [],
      location: "Remote",
      title: "Hostel Website",
      logoUrl: "/atomic.png",
      start: "Aug 2023",
      end: "Oct 2023",
      description:
        "Developed a website for a hostel in Anand, Gujarat. The website is built using HTML, CSS and Javascript and is hosted on a Plesk Environment.",
    },
    
  ],
  education: [
    {
      school: "Institute of Science & Technology for Advanced Studies & Research (ISTAR) - CVMU",
      href: "http://www.istar.edu.in/",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "M.B. Patel Science College - SPU",
      href: "https://www.mbpatelscience.ac.in/#/home",
      degree: "Bachelor's Degree of Mathematics (BSC)",
      logoUrl: "/waterloo.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Weather App (JavaScript)",
      href: "https://dhruvi1103.github.io/Weather_App_JS/",
      dates: "Aug 2023 - Aug 2023",
      active: true,
      description:
       "Level up your weather app! With my JavaScript-based weather app powered by the Weather by Ninja API through RapidAPI, I unlocked the next achievement: It's a power-up for audience engagement, delivering real-time weather updates, and opening doors to check. Ready to go? 🚀",
      technologies: [
    "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://dhruvi1103.github.io/Weather_App_JS/",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/dhruvi1103/Weather_App_JS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1730554740/tfnm20cvpxfivflmaw4f.png",
      video:
        "",
    },
    {
      title: "TODO List (JavaScript)",
      href: "https://dhruvi1103.github.io/ToDO_List_JS/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://dhruvi1103.github.io/ToDO_List_JS/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dhruvi1103/ToDO_List_JS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1730554739/ug09czw4kecqp12sstnp.png",
      video: "",
    },
    {
      title: "Random Quote Generator (React)",
      href: "https://dhruvi1103.github.io/Random_Quote_React/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://dhruvi1103.github.io/Random_Quote_React/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dhruvi1103/Random_Quote_React",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1730554739/yzjblsd6gidfq7afs5ai.png",
      video: "",
    },
    {
      title: "Weather App (React + API)",
      href: "https://dhruvi1103.github.io/Weather_App_React/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://dhruvi1103.github.io/Weather_App_React/",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/dhruvi1103/Weather_App_React",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1730554740/cajhrqhqxxcbrtnadfcl.png",
      video:
        "",
    },{
      title: "Youtube Clone",
      href: "https://dhruvi1103.github.io/Youtube_App_JS/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://dhruvi1103.github.io/Youtube_App_JS/",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/dhruvi1103/Youtube_App_JS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/ddztecdya/image/upload/v1730554284/buglz6pf5zqjnxuqi9zo.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Gyanotsav 2024",
      dates: "January 3rd - 5th, 2024",
      location: "Vallabh Vidhyanagar, Anand",
      description:
        "Developed a Working Model on Smart Parking System which Shoes React Time Update to the user.",
      image:
        "/CVM.png",
      mlh: "",
      links: [],
    },
    
  ],
} as const;
