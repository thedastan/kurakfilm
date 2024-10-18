 'use client'

import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

import { PropsWithTitle } from '@/types/props.types'

import BottomLeftCorder from '@/assets/svg/BottomLeftCorder'
import BottomRightCorner from '@/assets/svg/BottomRightCorner'
import TopLeftCorner from '@/assets/svg/TopLeftCorner'
import TopRightCorner from '@/assets/svg/TopRightCorner'

import { useGalley } from '@/hooks/data-hooks'

import TitleComponent from '../ui/texts/TitleComponent'

const Backstage = ({ title }: PropsWithTitle) => {
  const { data, isLoading } = useGalley()
  return (
    <Box pt='47px'>
      <Container maxW='container.lg'>
        <TitleComponent
          textAlign={{ md: 'center', base: 'start' }}
          mb={{ md: '47px', base: '30px' }}
        >
          {title}
        </TitleComponent>
        <Frame link='https://drive.google.com/file/d/1f3hdrcsq3sA0sNyKEMdw-O7sFc466nwv/preview' />
      </Container>
      <Flex
        my={{ md: '95px', base: '60px' }}
        w='100%'
        overflowX='auto'
        className='unscroll'
      >
        <Flex>
          {data?.map(el => (
            <Box
              key={el.id}
              w='360.5px'
              h='221.31px'
              cursor='pointer'
            >
              <Box
                position='absolute'
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgImage='radial-gradient(circle at center, rgba(11, 0, 29, 0.096) 25%, rgba(27, 27, 27, 0.2) 70%, rgba(0, 0, 0, 0) 100%)'
                zIndex={-1}
              />
              <Image
                src={el.image}
                alt='Image'
                width={360.88}
                height={221.39}
                className='full-image'
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export function Frame({ link }: { link: string }) {
  return (
    <Flex
      justifyContent='center'
      p={{ md: '20px', base: '8.5px' }}
      maxW='942.5px'
      w='100%'
      position='relative'
      h={{ md: '481px', sm: '350px', base: '218px' }}
    >
      <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorder />
      <BottomRightCorner />
      <iframe
        src={link}
        width='100%'
        height='100%'
        allow='autoplay'
      ></iframe>
    </Flex>
  )
}
export default Backstage