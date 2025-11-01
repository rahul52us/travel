'use client'
import { Box } from '@chakra-ui/react'
import Dashboard from './components/Dashboard/Dashboard'
import { observer } from 'mobx-react-lite'
import TravelPDFPage from './travel-pdf/page'

const page = observer(() => {
  return (
    <Box>
      <Dashboard />
      <TravelPDFPage />
    </Box>
  )
})

export default page