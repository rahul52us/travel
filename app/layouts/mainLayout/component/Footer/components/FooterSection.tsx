import { Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from "next/navigation";
import React from 'react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSectionProps {
  section: {
    title: string;
    links: FooterLink[];
  };
}

const FooterSection: React.FC<FooterSectionProps> = ({ section }) => {
  const router = useRouter()
  return (
    <Stack align="flex-start" mt={4}>
      <Text fontWeight="400" fontSize="lg" mb={1} color={'brand.100'}>
        {section.title}
      </Text>
      {section.links.map((link) => (
        <Link
          key={link.name}
          mb={{md:0}}
          // href={link.href}
          onClick={() => {
            router.push(link.href)
          }}
          fontSize={{base:"sm",md:"15px"}}
          _hover={{ color: 'gray.300' }}
        >
          {link.name}
        </Link>
      ))}
    </Stack>
  );
};

export default FooterSection;
