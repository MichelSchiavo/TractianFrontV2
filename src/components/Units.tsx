import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { UnitProps } from "../utils/types";

export function Units() {
  const [ units, setUnits ] = useState<UnitProps[]>([]);

  useEffect(() => {
    api.get('units').then(({data}) => {
      setUnits(data);
    });
  });

  return (
    <>
      {units.map((unit) => (
        <Flex 
          key={unit.id}
          h='64px'
          maxW={280}
          p={1}
          bg='gray.800'
          justifyContent='space-around'
          alignItems='center'
          borderRadius={4}
          boxShadow='0 0 1px white'
        >
          <Text>
            Unit: {unit.name}
          </Text>
        </Flex>
      ))}
    </>
  )
}