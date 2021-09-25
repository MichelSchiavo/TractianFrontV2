import { Box, Flex, Img, Text, Select, ModalContent, ModalOverlay } from "@chakra-ui/react";

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from "react";
import { useTractianContext } from "../context/TractianContext";
import { api } from "../services/api";
import { chartOptions } from "../utils/chartOptions";
import { CompanyProps, UnitProps, userProps } from "../utils/types";



export function PrincipalModal() {
  const { modalAsset } = useTractianContext();
  const [ companies, setCompanies ] = useState<CompanyProps[]>([]);
  const [ actualComp, setActualComp ] = useState('')
  const [ units, setUnits ] = useState<UnitProps[]>([]);
  const [ actualUnit, setActualUnit ] = useState('');
  const [ users, setUsers ] = useState<userProps[]>([]);
  const [ actualUser, setActualUser ] = useState('');

  useEffect(() => {
    api.get(`companies`).then(({data}) => {
      setCompanies(data);
      if (modalAsset) data[0] && setActualComp(data[Number(modalAsset?.companyId)-1].name)
    });

    api.get('units').then(({data}) => {
      setUnits(data);
      if (modalAsset) data[0] && setActualUnit(data[Number(modalAsset?.unitId)-1].name)
    });

    api.get('users').then(({data}) => {
      setUsers(data);
  });
  }, []);

  return (
    <>
      <ModalOverlay />
      <ModalContent
        h='50rem'
        maxW="52rem"
        bg='gray.800'
      >
        <Box
          w='100%'
          p='1rem'
          mx='0'
          alignItems='center'
          justifyContent='space-between'
        >
          <Img 
            h='22rem'
            w='100%'
            mx='auto'
            src={modalAsset?.image} 
          />
          <Flex
            alignItems='center'
            justifyContent='space-between'
            mt={6}
          >
            <Box
              mt={30}
            >
              <Text py='0.2rem'>Id: {modalAsset?.id}</Text>
              <Text py='0.2rem'>Sensor: {modalAsset?.sensors}</Text>
              <Text py='0.2rem'>Modelo: {modalAsset?.model}</Text>
              <Text py='0.2rem'>Nome: {modalAsset?.name}</Text>
              <Text py='0.2rem'>Temperatura máxima: {modalAsset?.specifications.maxTemp}</Text>
              <Text py='0.2rem'>Tempo de atividade de coleta total: {modalAsset?.metrics.totalUptime}</Text>
              <Text py='0.2rem'>Tempo total ligado: {modalAsset?.metrics.lastUptimeAt}</Text>
              <Text py='0.2rem'>Última atualização: {new Date(modalAsset?.metrics.lastUptimeAt || '').toLocaleString()}</Text>
              <Select
               mb={1}
              >
                <option style={{backgroundColor: 'black'}}>{actualComp}</option>
                {companies.map((company, index) => (
                    company.name === actualComp ? '' : (
                      <option style={{backgroundColor: 'black'}} value={company.name} key={index}>
                        {company.name}
                      </option>
                    )
                  ))}
              </Select>

              <Select
               mb={1}
              >
                <option style={{backgroundColor: 'black'}}>{actualUnit}</option>
                  {units.map((unit, index) => (
                    unit.name === actualUnit ? '' : (
                      <option style={{backgroundColor: 'black'}} value={unit.name} key={index}>
                        {unit.name}
                      </option>
                    )
                  ))}
              </Select>

              <Select
                mb={1}
                onChange={(event) => setActualUser(event.target.value)}
              >
                <option style={{backgroundColor: 'black'}}>{actualUser}</option>
                  {users.map((user, index) => (
                    user.name === actualUser ? '' : (
                      <option style={{backgroundColor: 'black'}} value={user.name} key={index}>
                        {user.name}
                      </option>
                    )
                  ))}
              </Select>
            </Box>
            <Box
            >
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions(modalAsset)}
              />
            </Box>
          </Flex>
        </Box>
      </ModalContent>
    </>
  )
}