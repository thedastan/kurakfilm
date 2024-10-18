import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

import { poppins } from '@/constants/fonts'

import { ICast } from '@/types/cast.types'

import YellowEllipse from '@/assets/svg/YellowEllipse'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import { getInstaLink } from '@/config/helpers'

import useTypedLocale from '@/hooks/useLocale'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const CastCard = ({ el, withBg }: { el: ICast; withBg: boolean }) => {
  const locale = useTypedLocale()

  return (
    <Flex
      minH={'555px'}
      alignItems='center'
      background={`url("${el.image}") no-repeat center`}
      position='relative'
      overflow='hidden'
    >
      {withBg && (
        <Box
          bg='#000000B2'
          position='absolute'
          left='0'
          top='0'
          w='100%'
          h='100%'
          zIndex='0'
          bgImage='linear-gradient(90deg, #000000 20%, #070b2b 80%)'
        />
      )}

      {/* {!withBg && (
        <Box
          position='absolute'
          right='-10%'
          bottom='100%'
          zIndex='0'
          h='100%'
        >
          <YellowEllipse />
        </Box>
      )} */}

      <Container maxW={CONTAINER_WIDTH}>
        <Flex
          justifyContent='space-between'
          flexDirection={withBg ? 'row-reverse' : 'row'}
          alignItems='center'
          gap='74px'
          position='relative'
          zIndex='1'
        >
          <Box
            minW='347px'
            maxW='347px'
            h='347px'
            rounded='50%'
            overflow='hidden'
          >
            <Image
              src={el.image}
              alt='Image'
              width={347}
              height={347}
              className='full-image'
            />
          </Box>

          <Box>
            <TitleComponent
              fontSize='34px'
              lineHeight='38.76px'
              color='#FFFFFF'
            >
              {el[`full_name_${locale}`]}
            </TitleComponent>
            <Description mt='10px'>{el[`info_${locale}`]}</Description>
            <Link
              href={getInstaLink(el.instagram)}
              target='_blank'
            >
              <Flex
                mt='18px'
                gap='3'
                alignItems='center'
                className={poppins.className}
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

            <Description mt='33px'>{el[`description_${locale}`]}</Description>
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}

export default CastCard