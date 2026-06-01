import { Box, Heading, Text, Button, Flex, VStack, Container, Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <Container 
      maxW="1200px" 
      py={{ base: 10, md: 20 }} 
      px={6} 
      id="home"
    >
      <Flex 
        align="center" 
        justify="space-between" 
        direction={{ base: "column-reverse", md: "row" }} 
        gap={12}
      >
        {/* ՁԱԽ ՀԱՏՎԱԾ - Տեքստեր */}
        <VStack 
          align={{ base: "center", md: "flex-start" }} 
          textAlign={{ base: "center", md: "left" }} 
          maxW="550px" 
          gap={5}
        >
          <Text 
            color="purple.500" 
            fontWeight="bold" 
            fontSize="lg" 
            letterSpacing="widest" 
            textTransform="uppercase"
          >
            {t("hero_greet")}
          </Text>
          
          <Heading 
            size={{ base: "2xl", md: "4xl" }} 
            fontWeight="extrabold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            {t("hero_name")}
          </Heading>
          
          <Heading 
            size={{ base: "lg", md: "xl" }} 
            fontWeight="medium"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            {t("role")}
          </Heading>
          
          <Text 
            fontSize="lg" 
            lineHeight="1.7"
            color="gray.600"
            _dark={{ color: "gray.300" }}
          >
            {t("desc")}
          </Text>
          
          <Flex gap={4} pt={2}>
            <Link href="#projects" _hover={{ textDecoration: 'none' }}>
              <Button 
                bg="purple.600" 
                color="white" 
                size="lg" 
                borderRadius="full" 
                _hover={{ bg: "purple.700" }}
              >
                {t("portfolio_btn")}
              </Button>
            </Link>
            
            <Link href="#contact" _hover={{ textDecoration: 'none' }}>
              <Button 
                variant="outline" 
                size="lg" 
                borderRadius="full"
                color="gray.800"
                borderColor="gray.800"
                _dark={{ color: "white", borderColor: "white" }}
              >
                {t("contact_btn")}
              </Button>
            </Link>
          </Flex>
        </VStack>

        {/* ԱՋ ՀԱՏՎԱԾ - Գեղեցիկ 3D նշան */}
        <Box 
          position="relative" 
          boxSize={{ base: "300px", md: "450px" }} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <Box
            w="200px" h="200px"
            bg="purple.600"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 20px rgba(128, 90, 213, 0.6)"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Text fontSize="60px">👨‍💻</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}