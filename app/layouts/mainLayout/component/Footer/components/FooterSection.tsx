import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/react';

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
  return (
    <Stack align="flex-start" mt={4}>
      <Text fontWeight="400" fontSize="lg" mb={1}>
        {section.title}
      </Text>
      {section.links.map((link) => (
        <Link
          key={link.name}
          mb={{md:2}}
          href={link.href}
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
