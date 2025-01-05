'use client'
import { Text } from '@chakra-ui/react'
import React from 'react'

const NavItem = ({item} : any) => {
  return (
    <Text>{item.title}</Text>
  )
}

export default NavItem