import { Box, Heading, SimpleGrid, Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const Projects = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState("All") 
  
  const categories = ["All", "React", "JS"]
  const projects = [
    { name: "To-Do List", category: "React" },
    { name: "Weather App", category: "JS" },
    { name: "E-commerce", category: "React" },
  ]

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <Box py={20} id="projects" bg="white" _dark={{ bg: "gray.900" }} transition="background 0.3s">
      <Heading textAlign="center" mb={10} color="gray.800" _dark={{ color: "white" }}>
        {t("projects")}
      </Heading>
      
      <Flex justify="center" gap={4} mb={10} wrap="wrap">
        {categories.map(cat => {
          const isActive = filter === cat;
          return (
            <Button 
              key={cat} 
              onClick={() => setFilter(cat)} 
              borderRadius="full"
              // ԱՆԽԱՓԱՆ ԼՈՒԾՈՒՄ. Կառավարում ենք գույները ձեռքով, առանց colorScheme-ի
              bg={isActive ? "purple.600" : "transparent"}
              color={isActive ? "white" : "gray.600"}
              border="1px solid"
              borderColor={isActive ? "purple.600" : "gray.300"}
              _hover={{ 
                bg: isActive ? "purple.700" : "gray.100",
                borderColor: isActive ? "purple.700" : "gray.400"
              }}
              _dark={{ 
                color: isActive ? "white" : "gray.300",
                borderColor: isActive ? "purple.500" : "gray.600",
                _hover: { bg: isActive ? "purple.800" : "gray.800" }
              }}
            >
              {t(`cat_${cat.toLowerCase()}`)} 
            </Button>
          )
        })}
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={8} px={{ base: 4, md: 10, lg: 20 }}>
        {filtered.map(p => (
          <Box 
            key={p.name} 
            p={8} 
            bg="white" 
            borderRadius="2xl" 
            shadow="sm"
            border="1px solid"
            borderColor="gray.100"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            _hover={{ 
              shadow: "xl", 
              borderColor: "purple.300",
              _dark: { borderColor: "purple.500" } 
            }}
            transition="0.3s"
          >
            <Heading size="md" mb={2} color="gray.800" _dark={{ color: "white" }}>
              {p.name}
            </Heading>
            <Text color="purple.600" _dark={{ color: "purple.300" }} fontSize="sm" fontWeight="bold">
              {p.category}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}