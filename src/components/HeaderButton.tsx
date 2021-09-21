import { Box, ListIcon } from "@chakra-ui/react";
import { CgMenuGridR } from 'react-icons/cg';
import { useTractianContext } from "../context/TractianContext";

export function HeaderButton() {
  const { menuOpen, handleOpenMenu, handleCloseMenu } = useTractianContext();

  return (
    <>
      {menuOpen ?
      <Box
        width="100%"
        mx='auto'
        textAlign='center'
        cursor='pointer'
        fontSize='1.3rem'
        mb='22px'
        onClick={handleCloseMenu}
      >
        Header
      </Box>
        : 
      <ListIcon
        as={CgMenuGridR}
        cursor='pointer'
        fontSize='1.5rem'
        minWidth='50px'
        mb='25px'
        mx='auto'
        onClick={handleOpenMenu}
      /> }
    </>    
  )
}