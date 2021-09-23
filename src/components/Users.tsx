import { Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { userProps } from "../utils/types";

export function Users() {
  const [ users, setUsers ] = useState<userProps[]>([]);

  useEffect(() => {
    api.get('users').then(({data}) => {
        setUsers(data);
    });
  });

  return (
    <>
      {users.map((user) => (
        <Grid
          key={user.id}
          h={128}
          maxW={340}
          gridTemplateColumns='1fr'
          p={4}
          bg='gray.800'
          justifyContent='space-around'
          alignItems='center'
          borderRadius={4}
          boxShadow='0 0 1px white'
        >
          <Text>
            E-mail: {user.email}
          </Text>

          <Text>
            Nome: {user.name}
          </Text>

          <Text>
            Unidade: {user.unitId}
          </Text>

          <Text>
            Empresa: {user.companyId}
          </Text>
        </Grid>
      ))}
    </>
  )
}