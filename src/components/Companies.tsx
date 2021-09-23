import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { CompanyProps } from "../utils/types";

export function Companies() {
  const [ companies, setCompanies ] = useState<CompanyProps[]>([]);

  useEffect(() => {
    api.get('companies').then(({data}) => {
      setCompanies(data);
    });
  });

  return (
    <>
      {companies.map((company) => (
        <Flex
          key={company.id}
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
            Empresa: {company.name}
          </Text>
        </Flex>
      ))}
    </>
  )
}