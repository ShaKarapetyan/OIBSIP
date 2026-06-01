import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes" // Նոր իմպորտ
import './index.css' 
import './i18n'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>,
)