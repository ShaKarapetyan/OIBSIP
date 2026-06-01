import { Box, Heading, Input, Textarea, Button, VStack, Field } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <Box 
      py={10} 
      px={6} 
      id="contact" 
      maxW="600px" 
      mx="auto"
      bg="white" 
      _dark={{ bg: "gray.900" }}
      borderRadius="lg"
    >
      <Heading mb={6} textAlign="center" color="gray.800" _dark={{ color: "white" }}>
        {t("contact")}
      </Heading>
      
      <VStack gap={4}>
        {/* Name Field */}
        <Field.Root>
          <Field.Label color="gray.700" _dark={{ color: "gray.300" }}>{t("contact_name")}</Field.Label>
          <Input 
            placeholder={t("contact_name_placeholder")} 
            borderColor="gray.300" 
            _dark={{ borderColor: "gray.600", color: "white" }}
          />
        </Field.Root>

        {/* Email Field */}
        <Field.Root>
          <Field.Label color="gray.700" _dark={{ color: "gray.300" }}>{t("contact_email")}</Field.Label>
          <Input 
            type="email" 
            placeholder="email@example.com" 
            borderColor="gray.300" 
            _dark={{ borderColor: "gray.600", color: "white" }}
          />
        </Field.Root>

        {/* Message Field */}
        <Field.Root>
          <Field.Label color="gray.700" _dark={{ color: "gray.300" }}>{t("contact_message")}</Field.Label>
          <Textarea 
            placeholder={t("contact_message_placeholder")} 
            borderColor="gray.300" 
            _dark={{ borderColor: "gray.600", color: "white" }}
          />
        </Field.Root>

        <Button 
          bg="purple.600" 
          color="white" 
          w="full" 
          _hover={{ bg: "purple.700" }}
          _dark={{ bg: "purple.700", _hover: { bg: "purple.600" } }}
        >
          {t("contact_send")}
        </Button>
      </VStack>
    </Box>
  )
}