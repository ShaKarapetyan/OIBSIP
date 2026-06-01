import { Box } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <Box 
      minH="100vh" 
      bgGradient="linear(to-br, gray.50, white)" // Նուրբ գրադիենտ
      bgAttachment="fixed"
      color="#1E293B"
    >
      <Header />
      <Box id="home"><Hero /></Box>
      <Box id="about"><About /></Box>
      <Box id="projects"><Projects /></Box>
      <Box id="contact"><Contact /></Box>
      <Footer />
    </Box>
  )
}

export default App