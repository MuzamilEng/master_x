import React from 'react'
import { Icon } from '@iconify/react';

export const topbar = [
  {
    title: "",
    icon: <Icon icon="line-md:linkedin" />,
    link: "#",
  },
  {
    title: "",
    icon: <Icon icon="ic:sharp-facebook" />,
    link: "#",
  },
  {
    title: "",
    icon: <Icon icon="iconoir:instagram" />,
    link: "#",
  },
  {
    title: "support@revelio.com",
    icon: <Icon icon="clarity:email-solid" />,
    link: "#",
  },
  {
    title: "(123) 123-456",
    icon: <Icon icon="ic:baseline-phone" />,
    link: "#",
  },
]

export const navbar = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About US",
    link: "/about",
  },
  {
    title: "Contact US",
    link: "/contact",
  },
  {
    title: "How it Works",
    link: "howitworks",
  },
  {
    title: "Join Team",
    link: "/join",
  },
  {
    title: "Subscription",
    link: "/subscription",
  }
]


export const helpCards = [
  {
    icon: "/img/time.png",
    img: "/img/shape-curved.svg",
    title: "Reduce your Time-to-Market.",
    info: "From quality assurance strategy and project management to boosting scope decomposition, we will help you launch your product in the market faster.",
  },
  
  {
    icon: "/img/expense.png",
    img: "/img/shape-curved.svg",
    title: "Save upto 50% expense.",
    info: "Our scalable teams transform with your evolving needs, ensuring that you only have the best available resources suited to your project needs.",
  },
  {
    icon: "/img/core.png",
    img: "",
    title: "Focus on your core business.",
    info: "No matter whichever stage of SDLC you are currently on, we will help you ramp up your processes so you can spend your valuable time on core business.",
  }
]

export const howitworks = [
  {
    no: 1,
    icon: "/img/team.png",
    title : "Team Allocation",
    info: "We build and optimize a team of experts, drawn from our fast-growing pool of software professionals."
  },
  {
    no: 1,
    icon: "/img/rocket.png",
    title : "Project Kick-off",
    info: "Align with the dedicated team, kick-off your project fast and set the right expectations for better results!"
  },
  {
    no: '',
    icon:"",
    title : "",
    info: ""
  },
  {
    icon: "/img/trans.png",
    title : "Full Transperency",
    info: "The team complies with our distinct delivery framework, which is consistent, predictable, and transparent."
  },
]

export const approach = [
  {
    title: "Continuous Visibility",
    info: "The code is stored on an online repository for you to view and track.",
    icon1: "/img/jira.svg",
    icon2: "/img/git.svg",
    icon1Text: "Jira",
    icon2Text: "Github",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
  {
    title: "Constant Contact",
    info: "You will receive regular status updates of the tasks.",
   icon1: "/img/slack.svg",
    icon2: "/img/mail.svg",
    icon1Text: "Slack",
    icon2Text: "Email",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
  {
    title: "Agile Meetings",
    info: "Daily/weekly scrums to align the team members.",
    icon1:"/img/scrum.svg",
    icon2: "/img/zoom.svg",
    icon1Text: "Daily Scrum",
    icon2Text: "Zoom",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
  {
    title: "Product Evaluation",
    info: "We run regular demo sessions and sprint meetings to adapt your ideas.",
    icon1: "/img/skype.svg",
    icon2: "/img/demo.svg",
    icon1Text: "Skype",
    icon2Text: "Demo",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
]

export const subscription = [
  {
    title : "Basic",
    popular: "",
    price: 7.99,
    billed: '$96',
    info: ['Unlimited members', 'Unlimited feedback', 'Weekly team feedback friday', 'Custom Kudos +9 illustration', 'Team feedback history',],
    bgColor: "bg-gray-100",
    headingColor: "text-black",
    textColor: "text-gary-800",
    blueBg: "bg-[#092370]"
  },
  {
    title : "Premium",
    popular: "popular",
    price: 10.99,
    billed: "$199",
    info: ['Unlimited members', 'Unlimited feedback', 'Weekly team feedback friday', 'Custom Kudos +9 illustration', 'Team feedback history(30 items)',],
    bgColor: "bg-[#092370]",
    headingColor: "text-white",
    textColor: "text-white",
    blueBg: "bg-white"
  },
  {
    title : "Advance",
    popular: "",
    price: 7.99,
    billed: "$96",
    info: ['Unlimited members', 'Unlimited feedback', 'Weekly team feedback friday', 'Custom Kudos +9 illustration', 'Team feedback history',],
    bgColor: "bg-gray-100",
    headingColor: "text-black",
    textColor: "text-gray-800",
    blueBg: "bg-[#092370]"
  },
]

export const profiles = [
  {
    img: "/img/man.svg",
    title: "Wallace Hintz",
    info:"Cupiditate omnis facilis dolorem. Architecto iure sed id. Quidem saepe quia dolorem officiis assumenda magni iure omnis. Reprehenderit ea quo error et."
  },
  {
    img: "/img/man2.svg",
    title: "Pedro Hahn",
    info:"Dolorem dolores doloribus ut qui. At consequuntur amet voluptatem. Alias qui vitae repudiandae vel dolor qui velit."
  },
  {
    img: "/img/man3.svg",
    title: "Florence Okuneva",
    info:"Aliquid architecto enim quod in. Voluptatem ratione sint accusamus ipsam ut ut a voluptas corporis. Veniam placeat mollitia cumque nemo."
  },
]