import { Box, Flex, HStack, Link, Container, Button, useBreakpointValue } from "@chakra-ui/react"
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from "./ThemeToggle"
import { useState } from "react"

export const Header = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false })

  const languages = [
    { code: "hy", name: "Հայ" },
    { code: "en", name: "EN" },
    { code: "ru", name: "RU" },
    { code: "de", name: "DE" },
  ]

  const current = languages.find(l => l.code === i18n.language) || languages[1]

  return (
    <Box 
      as="header" 
      position="sticky" top={0} zIndex={1000} py={4} 
      bg="white/70" backdropFilter="blur(10px)" 
      borderBottom="1px solid" borderColor="gray.200"
      _dark={{ bg: "gray.900/70", borderColor: "gray.700" }}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          {/* Հղում դեպի home հատված */}
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <Box fontWeight="bold" fontSize="xl" color="purple.600">
              {t("brand_name")}
            </Box>
          </Link>
          
          <HStack gap={4}>
            {!isMobile && ['home', 'about', 'projects', 'contact'].map((item) => (
              <Link 
                key={item} href={`#${item}`} 
                color="gray.600" 
                _dark={{ color: "gray.300" }} 
                _hover={{ color: "purple.500", textDecoration: "none" }}
              >
                {t(item)}
              </Link>
            ))}
            
            <Box position="relative">
              <Button 
                size="sm" variant="ghost" fontWeight="medium"
                onClick={() => setIsOpen(!isOpen)}
                color="gray.700"
                _hover={{ bg: "gray.100" }}
                _dark={{ color: "gray.100", _hover: { bg: "gray.800" } }}
              >
                {current.name}
              </Button>
              
              {isOpen && (
                <Box 
                  position="absolute" right={0} mt={2} w="100px"
                  bg="white" 
                  border="1px solid" borderColor="gray.200" 
                  borderRadius="xl" shadow="lg" overflow="hidden"
                  _dark={{ bg: "gray.800", borderColor: "gray.600" }}
                >
                  {languages.map((lng) => (
                    <Box 
                      key={lng.code} 
                      px={4} py={2} cursor="pointer" fontSize="sm"
                      onClick={() => { i18n.changeLanguage(lng.code); setIsOpen(false) }}
                      color={i18n.language === lng.code ? "purple.500" : "gray.700"}
                      fontWeight={i18n.language === lng.code ? "bold" : "normal"}
                      bg={i18n.language === lng.code ? "gray.50" : "transparent"}
                      _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
                      _dark={{ 
                        color: i18n.language === lng.code ? "purple.300" : "gray.200",
                        bg: i18n.language === lng.code ? "gray.700" : "transparent"
                      }}
                    >
                      {lng.name}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            <ThemeToggle />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}