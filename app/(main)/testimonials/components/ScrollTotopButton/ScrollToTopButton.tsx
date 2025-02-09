"use client"

import { useState, useEffect } from "react"
import { Box, IconButton } from "@chakra-ui/react"
import { ArrowUpIcon } from "@chakra-ui/icons"
import { motion, AnimatePresence } from "framer-motion"

const MotionBox = motion(Box)

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="tooltip"
        >
          <IconButton
            onClick={scrollToTop}
            icon={<ArrowUpIcon />}
            aria-label="Scroll to top"
            colorScheme="blue"
            size="lg"
            rounded="full"
            boxShadow="md"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

