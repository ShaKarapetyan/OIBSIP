import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: { 500: { value: "#6366F1" } }, // Քո ակցենտային գույնը
      },
    },
  },
})