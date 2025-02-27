import { Box, Icon, Tooltip, usePrefersReducedMotion, VStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FloatingSocialIcons = () => {
  const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  `;
  
  const pulse = keyframes`
    0% { box-shadow: 0 0 0 0px rgba(0, 230, 64, 0.4); }
    100% { box-shadow: 0 0 0 12px rgba(0, 0, 0, 0); }
  `;

  const prefersReducedMotion = usePrefersReducedMotion();
  const floatAnimation = prefersReducedMotion ? undefined : `${float} 4s ease-in-out infinite`;
  const pulseAnimation = prefersReducedMotion ? undefined : `${pulse} 2s infinite`;

  const handleClick = (platform: string) => {
    switch(platform) {
      case 'whatsapp':
        window.open('https://wa.me/9958805754', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/cosmic_travels_official/', '_blank');
        break;
    }
  };

  return (
    <Box
      position="fixed"
      right={{ base: 4, md: 8 }}
      bottom={{ base: 4, md: 8 }}
      zIndex="overlay"
      animation={floatAnimation}
    >
      <VStack spacing={{base:3,lg:4}}>
        {/* WhatsApp Icon */}
        <Tooltip 
          label="Chat with us!"
          placement="left"
        //   hasArrow
          bg="green.500"
          color="white"
        >
          <Box
            as="button"
            aria-label="WhatsApp"
            onClick={() => handleClick('whatsapp')}
            _hover={{ transform: 'scale(1.1)' }}
            transition="all 0.2s"
            bg="green.500"
            p={3}
            borderRadius="50%"
            boxShadow="xl"
            animation={pulseAnimation}
            position="relative"
            w={{base:"46px",lg:"56px"}}
            h={{base:"46px",lg:"56px"}}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={FaWhatsapp} boxSize={{ base: 6, md: 8 }} color="white" />
            {/* Notification Badge */}
            <Box
              position="absolute"
              top="0"
              right="0"
              w="3"
              h="3"
              bg="red.500"
              borderRadius="full"
              border="2px solid white"
            />
          </Box>
        </Tooltip>

        {/* Instagram Icon */}
        <Tooltip
          label="Follow us!"
          placement="left"
        //   hasArrow
          bgGradient="linear(to-br, #7928CA, #FF0080)"
          color="white"
        >
          <Box
            as="button"
            aria-label="Instagram"
            onClick={() => handleClick('instagram')}
            _hover={{ 
              transform: 'scale(1.1) rotate(15deg)',
            }}
            transition="all 0.3s ease"
            p={3}
            borderRadius="50%"
            boxShadow="xl"
            w={{base:"46px",lg:"56px"}}
            h={{base:"46px",lg:"56px"}}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(to-tr, #fdf497 0%, #fdf497 5%, #fd5949 25%, #d6249f 60%, #285AEB 90%)"
          >
            <Icon as={FaInstagram} boxSize={{ base: 6, md: 8 }} color="white" />
          </Box>
        </Tooltip>
      </VStack>
    </Box>
  );
};

export default FloatingSocialIcons;