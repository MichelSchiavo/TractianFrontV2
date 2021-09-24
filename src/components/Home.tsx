import { Box, Flex, Img, Text, Modal, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FaCircle } from 'react-icons/fa';
import { useTractianContext } from "../context/TractianContext";

import { api } from '../services/api'
import { AssetsProps } from "../utils/types";
import { PrincipalModal } from "./PrincipalModal";

export function Home() {
  const { handleSetModalAsset } = useTractianContext();
  const [assets, setAssets] = useState<AssetsProps[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure({});

  const circleColor: {[index: string]: any} = {
    'inAlert': {color: 'red' },
    'inDowntime': {color: 'gray' },
    'inOperation': {color: 'green' },
  };

  useEffect(() => {
    api.get('assets').then(({data}) => {
      setAssets(data);
    });
  }, []);

  function handleModalOpen(asset: AssetsProps) {
    handleSetModalAsset(asset);
    onOpen();
  }

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <PrincipalModal />
    </Modal>
      {assets.map((asset) => (
        <Flex
          key={asset.id}
          h={128}
          maxW={340}
          p={1}
          bg='gray.800'
          justifyContent='space-around'
          alignItems='center'
          borderRadius={4}
          boxShadow='0 0 1px white'
          cursor='pointer'
          onClick={() => handleModalOpen(asset)}
        >
          <Img h={120} w={140} borderRadius={4} src={asset.image} alt={asset.name+' image'} />
          <Box>
            <Text>Nome: {asset.name}</Text>
            <Text>Sensor: {asset.sensors}</Text>
            <Text 
              position='relative'
            >
              Status: 
              <FaCircle 
                style={{
                  position: 'absolute',
                  top: '4px',
                  left: '60px',
                  color: circleColor[asset.status].color
                }}

              />
            </Text>
            <Text>Saúde: {asset.healthscore}%</Text>
          </Box>
        </Flex>
      ))}
    </>
  )
}