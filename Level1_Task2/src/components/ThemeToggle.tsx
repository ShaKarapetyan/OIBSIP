import { IconButton } from "@chakra-ui/react"
import { LuSun, LuMoon } from "react-icons/lu"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  
  // Հետաձգում ենք ռենդերը մինչև mounting-ը՝ hydration error-ից խուսափելու համար
  if (!mounted) return <IconButton aria-label="Loading Theme" variant="ghost" size="sm" />

  return (
    <IconButton 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      variant="ghost"
      size="sm" // v3-ում սա խորհուրդ է տրվում
      color="gray.600"
      _dark={{ color: "yellow.400" }} // Արևը դարձնում ենք դեղին, լուսինը՝ սպիտակ
      _hover={{ bg: "gray.100", _dark: { bg: "gray.800" } }}
    >
      {theme === "dark" ? <LuSun /> : <LuMoon />}
    </IconButton>
  )
}