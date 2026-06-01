import { Box, Heading, Text, SimpleGrid, Card } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export const About = () => {
  const { t } = useTranslation()
  const skills = ["React", "TypeScript", "Chakra UI", "Next.js", "Git"]

  return (
    <Box 
      id="about" 
      py={{ base: 10, md: 20 }} 
      px={{ base: 6, md: 10 }}
      bg="white" 
      _dark={{ bg: "gray.900" }}
    >
      <Heading mb={10} textAlign="center" color="gray.800" _dark={{ color: "white" }}>
        {t("about_title")}
      </Heading>
      
      <Text maxW="800px" mx="auto" textAlign="center" mb={10} fontSize={{ base: "md", md: "lg" }} color="gray.600" _dark={{ color: "gray.300" }}>
        {t("about_desc")}
      </Text>
      
      <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} gap={6} maxW="800px" mx="auto">
        {skills.map((skill) => (
          <Card.Root 
            key={skill} 
            shadow="md"
            transition="0.3s"
            bg="white" 
            border="1px solid"
            borderColor="gray.200"
            // Միավորում ենք բոլոր մութ ռեժիմի կարգավորումները մեկ օբյեկտի մեջ
            _dark={{ 
              bg: "gray.700", 
              borderColor: "gray.600" 
            }}
            // Միավորում ենք hover-ի բոլոր կարգավորումները
            _hover={{ 
              bg: "purple.100", 
              transform: "scale(1.05)",
              _dark: { bg: "purple.900" } 
            }}
          >
            <Card.Body textAlign="center" fontWeight="bold" color="gray.800" _dark={{ color: "white" }}>
              {skill}
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  )
}