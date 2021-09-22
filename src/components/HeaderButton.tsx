import { Box, ListIcon } from "@chakra-ui/react";
import { CgMenuGridR } from 'react-icons/cg';
import { useTractianContext } from "../context/TractianContext";

export function HeaderButton() {
  const { menuOpen, handleOpenMenu, handleCloseMenu } = useTractianContext();

  return (
    <>
      {menuOpen ?
      <Box
        mx='auto'
        textAlign='center'
        cursor='pointer'
        fontSize='1.3rem'
        fontWeight='700'
        mb='22px'
        onClick={handleCloseMenu}
      >
        Menu
      </Box>
        : 
      <ListIcon
        as={CgMenuGridR}
        cursor='pointer'
        fontSize='2rem'
        pr={1}
        width='100%'
        mb='20px'
        mx='auto'
        _hover={{
          color: 'black'
        }}
        onClick={handleOpenMenu}
      /> }
    </>    
  )
}