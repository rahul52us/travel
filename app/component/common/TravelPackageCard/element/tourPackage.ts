export interface Review {
    id: number
    name: string
    rating: number
    comment: string
    date: string
    avatar?: string
  }
  
  export interface Activity {
    id: number
    title: string
    duration: string
    description: string
    price: number
    image: string
  }
  
  export interface WeatherInfo {
    season: string
    temperature: string
    rainfall: string
    bestTime: string
  }
  
  export interface FAQ {
    question: string
    answer: string
  }
  
  export interface CulturalNote {
    title: string
    description: string
    icon: string
  }
  
  export interface LocalCuisine {
    name: string
    description: string
    image: string
  }
  
  export interface TravelTip {
    category: string
    tips: string[]
  }
  
  export interface TourPackage {
    id: number
    location1: string
    images: string[]
    mainImage: string
    price: number
    days: number
    rating: number
    perks: string[]
    highlights: string[]
    discount: number
    description: {
      brief: string
      detailed: string
      history: string
    }
    itinerary: Array<{
      place: string
      nights: number
      description: string
      activities: string[]
    }>
    weather: WeatherInfo
    culturalNotes: CulturalNote[]
    localCuisine: LocalCuisine[]
    travelTips: TravelTip[]
    faqs: FAQ[]
    reviews: Review[]
    activities: Activity[]
    location: {
      latitude: number
      longitude: number
      address: string
    }
  }
  
  