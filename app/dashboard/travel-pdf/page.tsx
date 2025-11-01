"use client";

import { useState } from "react";

export default function TravelPDFPage() {
  const [loading, setLoading] = useState(false);

  const data = {
    heroImageUrl: "https://c8.alamy.com/comp/2C2JJC7/aerial-view-of-ha-long-bay-vietnam-2C2JJC7.jpg",
    tripTitle: "Travel Tour",
    destination: "Vietnam",
    travelerName: "Mr. Yash",
    monthYear: "November 2025",

    aboutDestination:
      "Vietnam is a vibrant Southeast Asian country known for its rich history, diverse culture, and breathtaking landscapes. Highlights include the bustling cities of Hanoi and Ho Chi Minh City, the UNESCO-listed Ha Long Bay, and the scenic rice terraces of Sapa. Vietnam also boasts stunning beach destinations like Da Nang, with its golden coastline and Marble Mountains, and Phu Quoc Island, famous for its clear waters, coral reefs, and relaxed tropical charm.",

    agencyInfo:
      "Cosmic Travels is your trusted outbound travel agency situated in New Delhi, offering expertly curated international holiday packages. From Europe's iconic landmarks to the tropical beauty of Southeast Asia, we craft personalized itineraries for families, couples, and adventure seekers. With seamless bookings, 24/7 support, and competitive pricing, we ensure every journey is unforgettable. Let Cosmic Travels take you beyond borders—explore the world with us.",

    itinerary: [
      {
        day: "4th November",
        title: "Welcome to Vietnam",
        description: "Upon your arrival at Da Nang Airport, our representative will meet and welcome you. You will then be taken to the hotel for your check-in.\n\nOvernight in Da Nang.",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&fit=crop&q=80"
      },
      {
        day: "5th November",
        title: "Ba Na Hills with Golden Bridge",
        description: "Breakfast at the hotel. Post breakfast, Our guide and driver will pick you up from your hotel, depart for Ba Na Hill through one of the most beautiful seaside streets of Central Vietnam. Arrive in Ba Na, you will have a chance to experience the two – UNESCO - record cable system up to the top of the hill and enjoy the beautiful sight of Mo stream, Toc Tien waterfall with the impressive dazzling white spume.\n\nSightseeing on Ba Na Hill to:\n\n1. Hand of the gods hold Vietnam's Golden Bridge.\n\n2. L'Jardin Zone with French Architecture Building: Tinh Tâm Garden, French Stable, one hundred year-old pomelo tree, Old Villas.\n\n3. Linh Ung Pagoda, 27 meters Buddha Statue, Loc Uyen Garden.\n\nFrom Debay station, you will get on the second cable system to move to Nui Chua Peak – the rooftop of Da nang City. Enjoy lunch (own arrangement)\n\nContinue the tour with Fantasy Park – one of the most modern indoor game centers of the Asia. Visit Linh Chua Linh Tu temple, enjoy a panoramic view of the whole Da Nang city and Da Nang bay through the mist in a romantic afternoon on Ba Na peak. Go down by the cable system. Get on coach and return the city Centre.",
        image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800&fit=crop&q=80"
      },
      {
        day: "6th November",
        title: "Full Day Marble Mountain + Coconut Village + Hoi An Ancient Town + Lantern Release From Danang",
        description: "Post breakfast at the hotel, The driver and tour guide will pick you up and the first stop is the Son Tra peninsula, nicknamed \"Monkey Mountain\" by American troops. While there, Linh Ung Pagoda, home to the tallest statue of the Goddess of Mercy in Southeast Asia, will be one of your unforgettable memories. Next, you'll be impressed by the Marble Mountains and Am Phu Cave. Move to the Stone Carving Village of Non-Nuoc, where you can admire stone-fine art and buy some nice souvenirs. Enjoy local cuisine at a local restaurant before visiting Cam Thanh Coconut Jungle and Hoi An Ancient Town. Continue your adventure with Cam Thanh Coconut Jungle and spend your time enjoying the peaceful, green space of Coconut Forest and the hands-on experience of round net and cast net fishing, especially basket boat rowing. Then Hoi An Ancient Town welcomes you to visit Phuc Kien Pagoda, Phung Hung Ancient House, the Japanese Bridge, the Museum, etc. Shopping at Hoi An Central Market. Enjoy your time with the boat ride on the Hoai River and release the flower lanterns to pray for good luck for you and your family. You will immerse yourself in the fanciful space of the lantern street. Free your time with the night market and enjoy the shimmering space of Hoi An. Finally, you'll be transferred back to your hotel.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&fit=crop&q=80"
      },
      {
        day: "7th November",
        title: "Da Nang to Phu Quoc",
        description: "Breakfast at the hotel. Check-out from hotel and proceed airport to board your flights till Phu Quoc.\n\nUpon arrival, Check-in at the hotel and relax for the day.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop&q=80"
      },
      {
        day: "8th November",
        title: "4 Island Tour with Cable car",
        description: "Breakfast at the hotel. Pick you up at your hotel. Arrive at the An Thoi harbor Join our speedboat for a sightseeing tour of the four most famous islands south of Phu Quoc. Xuong Island (or Buom Island): go snorkeling to take in the amazing coral reefs. Gam Ghi Island: continue snorkeling in the wilderness. This is the biggest coral reef and has a wide range of coral species in Phu Quoc. May Rut Trong Island: lunch - check-in - chilling out by the beach. Swim in turquoise water, feel the ocean's cool breeze, relax on a sunbed, and order your favorite drinks. There are many photo spots for taking great pictures. Enjoy lunch on the island together. Optional: Seawalker (your own expense for this side trip). With an air-breathing helmet, you can enjoy walking underwater on the seafloor. It is a great experience even for non-swimmers. There are big schools of fish & colorful coral reefs in your surroundings. Aquatopia Water Park on Thom Island. Experience more than 20 theme games and check in with vivid scenes following the concept of each six zones. Cable Car Thom Island: the longest three-wire cable car in the world. Estimated time around 25 minutes for the ride, breathtaking scenery view from above – the turquoise sea, islands, fishing village & boats, and Sunset Town.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop&q=80"
      },
      {
        day: "9th November",
        title: "Vin Wonder",
        description: "Breakfast at the hotel. Exploring the entertainment paradise VinWonders Phu Quoc - the first theme park in Vietnam and Vinpearl Safari Phu Quoc - the first conservation park and semi-wild zoo in Vietnam. Entertainment paradise VinWonders Phu Quoc - The first theme park in Vietnam with 6 game zones and more than 100 super thrilling games. With 6 themes: Magic World, Adventure World, Neptune Palace, Secret Village, Cyclone World, European Avenue, VinWonders Phu Quoc will take you through many different emotions, from admiration, surprise to delight and excitement by the extremely epic game world, suitable for all types of visitors, including dynamic, adventurous young people.\n\nVinpearl Safari Phu Quoc is the only \"open-air\" semi-wild zoo in our country. Here, rare animals are guaranteed to be cared for and preserved in an open natural environment. With the advantage of developing from a natural primeval forest, Vinpearl Safari Phu Quoc meets the strict requirements of the Safari model.",
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&fit=crop&q=80"
      },
      {
        day: "10th November",
        title: "Half Day Mega Grandworld Tour",
        description: "Breakfast at the hotel. Later in the afternoon, Embark on an unforgettable Half Day Mega Grandworld Tour, perfectly designed for travelers who want to explore the best of Grandworld in just a few hours. This compact yet comprehensive tour takes you through the most iconic attractions, offering a mix of culture, architecture, and breathtaking scenery. Your journey begins with a comfortable pick-up and a warm welcome by your local guide. From there, visit key highlights such as:\n\n• Grand Central Plaza – A vibrant hub of activity and local charm\n\n• Cultural Village – Discover traditions, crafts, and performances\n\n• Art Street – A lively area filled with murals, galleries, and artisan shops\n\n• Skyview Point – Capture panoramic views of the city and coastline\n\nEnjoy brief but immersive stops at each location, with ample time for photos, exploration, and a touch of shopping or refreshments. The tour concludes with a smooth return to your starting point, leaving you enriched and energized.",
        image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&fit=crop&q=80"
      },
      {
        day: "11th November",
        title: "Departure",
        description: "Breakfast at the hotel. Check-out from hotel and proceed airport to board your flights back home with sweet memories of the tour.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&fit=crop&q=80"
      },
    ],

    hotels: [
      {
        name: "Grand Ocean Luxury Boutique",
        address: "27-29 Phan Liêm, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
        roomType: "Deluxe Room",
        checkIn: "4th November 2025",
        checkOut: "7th November 2025",
        nights: 3,
      },
      {
        name: "Bauhinia Resort Phu Quoc",
        address: "Alley 91 Đường Trần Hưng Đạo, Street, Phú Quốc, Kiên Giang 92000, Vietnam",
        roomType: "Garden View Bungalow",
        checkIn: "7th November 2025",
        checkOut: "11th November 2025",
        nights: 4,
      },
    ],

    inclusions: [
      "Accommodation in above hotel",
      "Daily Breakfast",
      "Vietnam Visa",
      "All Airport transfers are on Private",
      "Full Day Marble Mountain + Coconut Village + Hoi An Ancient Town + Lantern Release From Danang",
      "Ba Na Hills",
      "Vin Wonders",
      "4 Island Tour with Cable Car",
      "Grand World Tour",
      "3 Lunch",
      "1 Dinner",
    ],

    exclusions: [
      "Any Visa required, unless mentioned as an inclusion",
      "Any international and/or domestic flights, unless explicitly mentioned as an inclusion",
      "TCS @ 5%. You can claim in ITR",
      "Passport fees, immunization costs, city taxes at the hotel and local departure taxes (wherever applicable)",
      "Optional enhancements like room or flight upgrades, or local camera or video fees",
      "Additional sightseeing, activities and experiences outside of the itinerary",
      "Early check-in or late check-out from hotels (unless otherwise specified)",
      "Breakfast, lunches, dinners and drinks (alcoholic and non-alcoholic), unless specified in the itinerary",
      "Excess baggage charges, and where applicable, baggage not included in your fare",
      "Tips for services and experiences",
      "Anything that is not mentioned in Inclusions",
    ],

    perPersonPrice: "INR 60,000/-",
    totalPrice: "INR 60,000/-",

    contact: {
      phone: "+91-7747900454",
      email: "sales@cosmictravels.in",
      website: "www.cosmictravels.in",
    },
  };

  const handleDownload = async () => {
    setLoading(true);

    try {
      const { pdf } = await import("@react-pdf/renderer");

      // ⚠️ UPDATE THIS PATH to match your file location:
      const { TravelTemplate } = await import("../../component/pdf/travelTemplate");

      const blob = await pdf(<TravelTemplate {...data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Vietnam_7N_8D_Mr_Yash.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error("PDF generation error:", err);
      alert(`Failed to generate PDF: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Dynamic Travel PDF Generator</h1>
      <button
        onClick={handleDownload}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md"
      >
        {loading ? "Generating PDF..." : "Download Itinerary PDF"}
      </button>
    </div>
  );
}