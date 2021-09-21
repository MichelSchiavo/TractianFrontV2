import { Box, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { useTractianContext } from "../context/TractianContext";


interface SideOptionsProps {
  options: {
    name: string;
    src: IconType;
  }
}

export function SideOptions({options}:SideOptionsProps ) {
  const { page, handleChangePage } = useTractianContext();
  const [colorScheme, setColorScheme] = useState({bg: 'transparent', color: '#fff'});

  useEffect(() => {
    page === options.name ? setColorScheme({bg: '#fff', color: 'black'}) : setColorScheme({bg: 'transparent', color: '#fff'})
  }, [page])

  return (
    <ListItem
      backgroundColor={colorScheme.bg}
      position='relative'
      width='100%'
      borderTopLeftRadius='20px'
      borderBottomLeftRadius='20px'
      onClick={() => handleChangePage(options.name)}
    >
      <Link
        href='#'
        position='relative'
        width='100%'
        display='flex'
        textDecoration='none'
        color={colorScheme.color}
      >
        <Box
          as='span'
          display='block'
          minWidth='60px'
          h='60px'
          lineHeight='70px'
          textAlign='center'
        >
          <ListIcon
            as={options.src}
            fontSize='1.5rem'
          />
        </Box>
        <Box
          as='span'
          position='relative'
          display='block'
          paddingLeft='10px'
          h='60px'
          lineHeight='60px'
          whiteSpace='normal'
        >
          {options.name}
        </Box>
      </Link>
    </ListItem>
  )
}