// import { TourPackage } from './types/tour-package'

import { TourPackage } from "./tourPackage";

export const dummyTourPackage: TourPackage = {
  id: 1,
  location1: "Santorini, Greece",
  mainImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
  images: [
    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    "https://images.unsplash.com/photo-1601581875039-e899893d520c",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47",
    "https://images.unsplash.com/photo-1515488764276-beab7607c1e6",
    "https://images.unsplash.com/photo-1556376872-11c8ce6ba0b0",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
  ],
  price: 2499,
  days: 7,
  rating: 4.8,
  perks: [
    "5-star hotels",
    "Daily breakfast",
    "Guided tours",
    "Airport transfer",
    "Sunset cruise",
    "Wine tasting"
  ],
  highlights: [
    "Sunset in Oia",
    "Volcano tour",
    "Wine tasting",
    "Ancient Thera visit",
    "Black sand beaches"
  ],
  discount: 15,
  description: {
    brief: "Experience the magic of Santorini, with its stunning sunsets, white-washed buildings, and crystal-clear waters.",
    detailed: "Santorini, a jewel in the Aegean Sea, is famous for its dramatic views, stunning sunsets, pristine white buildings, and a volcanic past that has shaped its rugged landscape. Our carefully crafted tour takes you through the island's rich history, vibrant culture, and breathtaking natural beauty.",
    history: "Santorini was shaped by a massive volcanic eruption in the 16th century BC, which created its current geological caldera. The island has a rich history dating back to the Minoan civilization and has been influenced by many cultures over the centuries."
  },
  itinerary: [
    {
      place: "Fira",
      nights: 2,
      description: "Begin your journey in Fira, the island's bustling capital. Explore its narrow streets, visit museums, and enjoy panoramic caldera views.",
      activities: ["Walking tour of Fira", "Visit to the Museum of Prehistoric Thera", "Cable car ride to the Old Port"]
    },
    {
      place: "Oia",
      nights: 3,
      description: "Move to the picturesque village of Oia, famous for its stunning sunsets and blue-domed churches.",
      activities: ["Sunset viewing at Oia Castle", "Photography walk through Oia's streets", "Visit to Domaine Sigalas winery"]
    },
    {
      place: "Akrotiri",
      nights: 2,
      description: "Explore the southern part of the island, including the ancient city of Akrotiri and beautiful beaches.",
      activities: ["Tour of Akrotiri archaeological site", "Red Beach visit", "Catamaran cruise around the caldera"]
    }
  ],
  weather: {
    season: "Summer",
    temperature: "24°C - 29°C",
    rainfall: "Rare",
    bestTime: "Late May to early October"
  },
  culturalNotes: [
    {
      title: "Local Customs",
      description: "Greeks are known for their hospitality. It's common to be offered food or drinks when visiting someone's home.",
      icon: "MdPeople"
    },
    {
      title: "Religion",
      description: "The majority of Greeks are Orthodox Christians. When visiting churches, dress modestly and be respectful.",
      icon: "MdChurch"
    }
  ],
  localCuisine: [
    {
      name: "Fava",
      description: "A puree made from split peas, a local Santorini specialty.",
      image: "https://images.unsplash.com/photo-1632323091845-f636f89749fa"
    },
    {
      name: "Tomatokeftedes",
      description: "Tomato fritters made with Santorini's famous small tomatoes.",
      image: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1"
    }
  ],
  travelTips: [
    {
      category: "Transportation",
      tips: [
        "Rent an ATV or scooter to explore the island",
        "Use local buses for an economical way to travel between towns",
        "Taxis are available but can be expensive"
      ]
    },
    {
      category: "Packing",
      tips: [
        "Bring comfortable walking shoes for the cobblestone streets",
        "Pack a hat and sunscreen for sun protection",
        "Bring a light jacket for cool evenings"
      ]
    }
  ],
  faqs: [
    {
      question: "What's the best time to visit Santorini?",
      answer: "The best time to visit is from late May to early October when the weather is warm and rainfall is minimal. July and August are the busiest months."
    },
    {
      question: "Do I need to rent a car?",
      answer: "While not necessary, renting a car can be convenient for exploring the island. However, parking can be challenging in popular areas."
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "An absolutely magical experience! The sunsets in Oia were breathtaking, and the tour was perfectly organized.",
      date: "June 15, 2023",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment: "Great tour overall. The wine tasting was a highlight. Wish we had more time in Akrotiri.",
      date: "July 3, 2023",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ],
  activities: [
    {
      id: 1,
      title: "Caldera Kayaking Tour",
      duration: "4 hours",
      description: "Paddle along the stunning caldera cliffs, explore sea caves, and swim in crystal-clear waters.",
      price: 65,
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce"
    },
    {
      id: 2,
      title: "Santorini Cooking Class",
      duration: "6 hours",
      description: "Learn to cook traditional Greek dishes using local ingredients, followed by a feast with wine.",
      price: 89,
      image: "https://images.unsplash.com/photo-1551218372-a8789b81b253"
    }
  ],
  location: {
    latitude: 36.3932,
    longitude: 25.4615,
    address: "Santorini, Cyclades, Greece"
  }
}
