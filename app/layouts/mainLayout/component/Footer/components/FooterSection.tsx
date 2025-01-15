import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/react';
// import { FooterSection as FooterSectionType } from './types';

// interface FooterSectionProps {
//   section: FooterSectionType;
// }

const FooterSection: React.FC<any> = ({ section }) => {
  return (
    <Stack align={'flex-start'} mt={4}>
      <Text fontWeight={'400'} fontSize={'lg'} mb={1}>
        {section.title}
      </Text>
      {section.links.map((link) => (
        <Link
          key={link.name}
          mb={2}
          href={link.href}
          fontSize={'15px'}
          _hover={{ color: 'gray.300' }}
        >
          {link.name}
        </Link>
      ))}
    </Stack>
  );
};

export default FooterSection;