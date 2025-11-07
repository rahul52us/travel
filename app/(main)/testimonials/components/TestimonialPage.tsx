import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Icon,
	SlideFade,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import "../../../component/FAQ/FAQAccordion/scroll.css";
import TravelGallery from "./ExperienceGallery/TravelGallery";
import RatingsSummary from "./OverallRating/OverallRating";
import ReviewsList from "./ReviewCard/ReviewCard";
import RevireCard2 from "./ReviewCard/ReviewCard2";

const TestimonialsPage = () => {
	return (
		<Box bg={useColorModeValue("gray.50", "gray.800")}>
			<PageHero
				title="Hear from Our Travelers"
				lineColor="brand.100"
				subtitle={
					<>
						Discover the experiences of our happy travelers and get inspired for
						your next adventure!
						<Text as="span" color="brand.300" fontWeight="semibold" mx={1.5}>
							Real Stories. Real Journeys.
						</Text>
					</>
				}
				bgImage="url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
			/>
			{/* Testimonials Grid Section */}
			<Container maxW={{ base: "95%", lg: "90%" }} py={{ base: 12, lg: 16 }}>
				<SlideFade in={true} offsetY={20}>
					<Heading
						mb={{ base: 2, lg: 8 }}
						textAlign="center"
						fontSize={{ base: "2xl", lg: "4xl" }}
					>
						What Our Travelers Say
					</Heading>
				</SlideFade>
				<ReviewsList />
			</Container>
			<Box display="none">
				<RatingsSummary />
			</Box>
			<Flex
				justify="center"
				mt={{ lg: 8 }}
				p={4}
				borderRadius="lg"
				bg={useColorModeValue("teal.50", "teal.900")}
				display="none"
			>
				<Icon as={FaThumbsUp} boxSize={6} color="teal.400" mr={2} />
				<Text fontWeight="bold" color="teal.400">
					95% of travelers recommend us!
				</Text>
			</Flex>

			<Container maxW="7xl" py={{ base: 8, md: 12, lg: 16 }}>
				<Grid
					templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
					gap={{ base: 6, md: 10, lg: 12 }}
				>
					{/* Image Gallery */}
					<Box position={{ base: "relative", lg: "sticky" }} top="0">
						<TravelGallery />
					</Box>

					{/* Reviews Section - Fixed height with scrolling */}
					<Box
						overflowY="auto"
						maxHeight="70vh"
						pr={{ base: 2, md: 4 }}
						className="customScrollBar"
					>
						<RevireCard2 />
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};

export default TestimonialsPage;
