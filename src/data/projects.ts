import type { Project } from "../types/projects";

import aleraImage from "../assets/alera.webp";
import pulseImage from "../assets/pulse.webp";
import auctionImage from "../assets/auctionhouse.webp";

export const projects: Project[] = [
  {
    id: 1,
    title: "Alera Online Shop",
    description: "Alera is a online shop built with Next.js, TypeScript, and Tailwind.",
    detailedDescription: "Alera is a online shop built with Next.js, TypeScript, and Tailwind CSS as the course assignment for the JavaScript Frameworks course at Noroff. The application fetches products from the Noroff Online Shop API. The shop features a product list page with search, a detailed product page with reviews and tags, and a shopping cart with quantity management and persistent state using Zustand. Users can complete a checkout flow, and theres a validated contact form available for customers.",
    imageUrl: aleraImage,
    imageCaption: "Screenshot of the Alera Online Shop homepage",
    liveUrl: "https://alera-online-shop.vercel.app/",
    repoUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-tonje-js-frameworks",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Pulse Social Media App",
    description: "Pulse is a social media application built with vanilla JavaScript and Tailwind CSS.",
    detailedDescription: "This project is a front-end for a social media application where users can create, read, update, and delete their own posts. In addition to post management, the app includes social features such as following and unfollowing other users. Built with vanilla JavaScript and Tailwind CSS for my Semester Project 1 at Noroff, it integrates with the Noroff Social Media API v2 to provide a clean, modern, and fully functional social media experience.",
    imageUrl: pulseImage,
    imageCaption: "Screenshot of the Pulse Social Media App homepage",
    liveUrl: "https://pulse-social-media-app.netlify.app/#/",
    repoUrl: "https://github.com/TonjeSchjefstad/FED2-JS2-CA-TonjeSchjefstad/tree/css-frameworks",
    tags: ["JavaScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Maison Ardéne Auction House",
    description: "Maison Ardéne is an auction house built with vanilla JavaScript and Tailwind CSS.",
    detailedDescription: "This project is the frontend for Maison Ardéne, a fictional high-end auction house. Built for my Semester Project 2 at Noroff using vanilla JavaScript and Tailwind CSS. It allows users to browse luxury items, place bids, and manage their own listings. The site integrates with the Noroff Auction House API v2, providing a clean, modern, and fully functional auction experience.",
    imageUrl: auctionImage,
    imageCaption: "Screenshot of the Maison Ardéne Auction House homepage",
    liveUrl: "https://maison-ardene.netlify.app/",
    repoUrl: "https://github.com/TonjeSchjefstad/FED2-SP2-AuctionHouse",
    tags: ["JavaScript", "Tailwind"],
  },
];