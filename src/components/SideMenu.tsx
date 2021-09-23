import { Box, List } from "@chakra-ui/react";
import { useTractianContext } from "../context/TractianContext";

import { SideOptions } from "./SideOptions";

import { FaHome } from 'react-icons/fa';
import { GiFactory } from 'react-icons/gi';
import { BiUnite } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { HeaderButton } from "./HeaderButton";

export function SideMenu() {
  const { menuOpen } = useTractianContext();

  return (
    <Box
      position='fixed'
      top='20px'
      bottom='20px'
      width={menuOpen ? '300px' : '70px'}
      borderRadius='10px'
      boxSizing='initial'
      borderLeft='4px solid white'
      background='blue.900'
      transition='width 0.3s'
      overflowX='hidden'
    >
      <List
        position='absolute'
        top='0'
        left='0'
        width='100%'
        paddingLeft='4px'
        paddingTop='40px'
      >
        <HeaderButton />
        <SideOptions options={{name: 'Home', src: FaHome}} />
        <SideOptions options={{name: 'Companies', src: GiFactory}} />
        <SideOptions options={{name: 'Units', src: BiUnite}} />
        <SideOptions options={{name: 'Users', src: FiUsers}} />
      </List>
    </Box>
  )
}