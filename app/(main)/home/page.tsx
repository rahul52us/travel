"use client";

import Banner from "./component/Banner";

const cardData = [
  {
    imageSrc: "/images/aboutImage.png",
    title: "Card Title 1",
    description: "This is the first card description.",
  },
  {
    imageSrc: "/images/homeImage1.png",
    title: "Card Title 2",
    description: "This is the second card description.",
  },
  {
    imageSrc: "/images/cardImage1.png",
    title: "Card Title 3",
    description: "This is the third card description.",
  },
  {
    imageSrc: "/images/homeImage2.png",
    title: "Card Title 4",
    description: "This is the fourth card description.",
  },
  {
    imageSrc: "/images/cardImage1.png",
    title: "Card Title 3",
    description: "This is the third card description.",
  },
  {
    imageSrc: "/images/homeImage2.png",
    title: "Card Title 4",
    description: "This is the fourth card description.",
  },
];

export default function Home() {
  return <Banner data={cardData} heading="Explore Our Cards" />;
}
