import { Flex, ListItem, ListIcon, Text } from "@chakra-ui/react";
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
  }, [page]);

  return (
    <ListItem
      width='100%'
      mb={1}
      cursor='pointer'
      onClick={() => handleChangePage(options.name)}
    >
      <Flex
        position='relative'
        width='100%'
        display='flex'
        borderRadius='20px 0 0 20px'
        backgroundColor={colorScheme.bg}
        color={colorScheme.color}
        _hover={{
          bg: 'white',
          color: 'blue.900'
        }}
      >
        <Text
          as='span'
          minWidth='60px'
          h='60px'
          lineHeight='60px'
          textAlign='center'
        >
          <ListIcon
            as={options.src}
            ml='6px'
            fontSize='1.5rem'
          />
        </Text>
        <Text
          as='span'
          position='relative'
          paddingLeft='10px'
          h='60px'
          lineHeight='60px'
          whiteSpace='normal'
        >
          {options.name}
        </Text>
      </Flex>
    </ListItem>
  )
}