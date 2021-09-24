import { Box, Flex, Img, Text, ModalContent, ModalOverlay } from "@chakra-ui/react";

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useTractianContext } from "../context/TractianContext";
import { chartOptions } from "../utils/chartOptions";



export function PrincipalModal() {
  const { modalAsset } = useTractianContext();

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
              mt={36}
            >
              <Text py='0.2rem'>Id: {modalAsset?.id}</Text>
              <Text py='0.2rem'>Sensor: {modalAsset?.sensors}</Text>
              <Text py='0.2rem'>Modelo: {modalAsset?.model}</Text>
              <Text py='0.2rem'>Nome: {modalAsset?.name}</Text>
              <Text py='0.2rem'>Temperatura máxima: {modalAsset?.specifications.maxTemp}</Text>
              <Text py='0.2rem'>Tempo de atividade de coleta total: {modalAsset?.metrics.totalUptime}</Text>
              <Text py='0.2rem'>Tempo total ligado: {modalAsset?.metrics.lastUptimeAt}</Text>
              <Text py='0.2rem'>Última atualização: {new Date(modalAsset?.metrics.lastUptimeAt || '').toLocaleString()}</Text>
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