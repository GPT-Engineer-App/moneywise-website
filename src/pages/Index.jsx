import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} my={8}>
        <Heading as="h2" size="xl" mb={4}>Main Headline: The State of the Global Economy</Heading>
        <Text fontSize="lg">An in-depth analysis of the current trends and future outlook of the global economy...</Text>
      </Box>

      {/* Articles Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
        <Box bg="white" p={4} boxShadow="md">
          <Heading as="h3" size="md" mb={2}>Article 1</Heading>
          <Text>Summary of the first article...</Text>
        </Box>
        <Box bg="white" p={4} boxShadow="md">
          <Heading as="h3" size="md" mb={2}>Article 2</Heading>
          <Text>Summary of the second article...</Text>
        </Box>
        <Box bg="white" p={4} boxShadow="md">
          <Heading as="h3" size="md" mb={2}>Article 3</Heading>
          <Text>Summary of the third article...</Text>
        </Box>
        <Box bg="white" p={4} boxShadow="md">
          <Heading as="h3" size="md" mb={2}>Article 4</Heading>
          <Text>Summary of the fourth article...</Text>
        </Box>
        <Box bg="white" p={4} boxShadow="md">
          <Heading as="h3" size="md" mb={2}>Article 5</Heading>
          <Text>Summary of the fifth article...</Text>
        </Box>
        <Box bg="white" p={4} boxShadow="md">
          <Heading as="h3" size="md" mb={2}>Article 6</Heading>
          <Text>Summary of the sixth article...</Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={4}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;