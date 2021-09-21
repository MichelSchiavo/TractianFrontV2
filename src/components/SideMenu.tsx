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
      borderLeft='5px solid #4d5bf9'
      background='#4d5bf9'
      transition='width 0.5s'
      overflowX='hidden'
    >
      <List
        position='absolute'
        top='0'
        left='0'
        width='100%'
        paddingLeft='5px'
        paddingTop='40px'
      >
        <HeaderButton />
        <SideOptions options={{name: 'Home', src: FaHome}} />
        <SideOptions options={{name: 'Empresas', src: GiFactory}} />
        <SideOptions options={{name: 'Unidades', src: BiUnite}} />
        <SideOptions options={{name: 'Usuários', src: FiUsers}} />
      </List>
    </Box>
  )
}