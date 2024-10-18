import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import TrailerButton from '@/components/ui/buttons/TrailerButton'
import Description from '@/components/ui/texts/Description'

import { fjalla_one, oswald } from '@/constants/fonts'

import Logo from '@/assets/img/hero-logo.svg'

import {
  CONTAINER_WIDTH,
  HEADER_HEIGHT,
  MINI_HEADER_HEIGHT
} from '@/config/_variables.config'

const Hero = () => {
  const t = useTranslations('Hero')
  return (
    <Box
      className='hero-home'
      position='relative'
      pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}
      h={{ md: '120vh', base: '527px' }}
      mb={{ md: '0', base: '280px' }}
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        right='0'
        bottom='0'
        w='100%'
        h='100%'
        bg='radial-gradient(67.84% 67.84% at 50% 50%, rgba(0, 0, 0, 0) 0%, #000000 100%)'
        zIndex='0'
      />

      <Container maxW={CONTAINER_WIDTH}>
        <Box
          position='relative'
          zIndex='1'
          maxW='579px'
          mt={{ md: '116px', base: '368px' }}
        >
          <Box
            maxW='376px'
            w={{ md: '100%', base: '260px' }}
          >
            <Image
              src={Logo}
              alt='Logo'
              className='full-image'
            />
          </Box>
          <Text
            // className={oswald.className}
            mt={{ md: '40px', base: '22px' }}
            fontSize={{ md: '34px', base: '30px' }}
            textTransform='uppercase'
            lineHeight={{ md: '42.73px', base: '37.71px' }}
            color='#FFFFFF'
            opacity='.8'
          >
            {t('description')}
          </Text>

          <Description
            mt={{ md: '15px', base: '5px' }}
            fontSize={{ md: '18px', base: '14px' }}
            mb={{ md: '48px', base: '30px' }}
          >
            {t('subtitle')}
          </Description>
          <TrailerButton title={t('button')} />
        </Box>
      </Container>
    </Box>
  )
}

export default Hero