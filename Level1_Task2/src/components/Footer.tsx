import { Box, Text, Center } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box 
      py={10} 
      bg="gray.100" 
      color="gray.600" 
      borderTop="1px solid"
      borderColor="gray.200"
      // Ամբողջը խմբավորում ենք մեկ _dark օբյեկտի մեջ
      _dark={{ 
        bg: "gray.950", 
        color: "gray.400",
        borderColor: "gray.800" 
      }}
    >
      <Center>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} {t("footer_rights")}
        </Text>
      </Center>
    </Box>
  )
}