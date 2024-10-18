import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

import { poppins } from '@/constants/fonts'

import { ICast } from '@/types/cast.types'

import { getInstaLink } from '@/config/helpers'

import useTypedLocale from '@/hooks/useLocale'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const CastResponsiveCard = ({ el }: { el: ICast }) => {
  const locale = useTypedLocale()
  return (
    <Box bgImage='linear-gradient(45deg, rgba(27, 27, 27, 0.432) 30%, rgba(40, 9, 97, 0.432) 70%)'>
      <Box
        h='462px'
        w='100%'
        position='relative'
      >
        <Image
          src={el.image}
          alt='Image'
          height={462}
          width={782}
          className='full-image'
        />

        <Box
          position='absolute'
          left='0'
          w='100%'
          px='4'
          bottom='5'
          zIndex='2'
        >
          <TitleComponent
            fontSize='34px'
            lineHeight='38.76px'
            color='#FFFFFF'
          >
            {el[`full_name_${locale}`]}
          </TitleComponent>
          <Description
            mt='2'
            fontSize='16px'
          >
            {el[`info_${locale}`]}
          </Description>
        </Box>
      </Box>

      <Container mt='18px'>
        <Link
          href={getInstaLink(el.instagram)}
          target='_blank'
        >
          <Flex
            gap='3'
            alignItems='center'
            className={poppins.className}
            position='relative'
            zIndex='100'
          >
            <Flex
              justifyContent='center'
              align='center'
              w='43.5px'
              h='43.5px'
              rounded='50%'
              bg='#282828'
              fontSize='20px'
            >
              <FaInstagram color='#BDBDBD' />
            </Flex>
            <Text
              fontSize='14px'
              color='#CAC7C5'
              lineHeight='19.6px'
            >
              {el.instagram}
            </Text>
          </Flex>
        </Link>

        <Description mt='20px'>{el[`description_${locale}`]}</Description>
      </Container>
    </Box>
  )
}

export default CastResponsiveCard