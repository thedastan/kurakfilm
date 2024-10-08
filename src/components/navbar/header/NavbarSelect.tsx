 'use client'

import {
  Box,
  ChakraProps,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { EMAIL_ADDRESS, EMAIL_ADDRESS_LINK } from '@/constants/admin'

import message from '../../../assets/img/Vector.png'
import img from '../../../assets/img/kurak.png'
import { IHeaderNav, social_contact } from '../data'

const NavbarSelect = ({ header_nav }: { header_nav: IHeaderNav[] }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const pathname = usePathname()

  return (
    <Box display={{ md: 'none', base: 'block' }}>
      <Stack
        onClick={onOpen}
        w='24px'
        spacing='2'
        cursor='pointer'
      >
        <Box
          h='2px'
          bg='#FFFFFF'
          w='100%'
        />
        <Box
          h='2px'
          bg='#FFFFFF'
          w='100%'
        />
        <Box
          h='2px'
          bg='#FFFFFF'
          w='100%'
        />
      </Stack>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent
          rounded='0'
          bg='white'
          borderRadius={16}
          w='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          m={0}
          position='absolute'
          top='0'
          right='0'
        >
          <ModalCloseButton
            color='black'
            right='6'
            top='3'
            fontSize='20px'
          />

          <Box
            position='relative'
            mt='50px'
            w='100%'
          >
            <Flex
              borderTop='solid 1px #28282887'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              position='relative'
              zIndex='2'
              gap={8}
              p={4}
              mt={2}
            >
              <Box>
                <Stack
                  spacing='22px'
                  mt='10px'
                >
                  {header_nav.map((el, idx) => (
                    <Link
                      href={el.path}
                      key={idx}
                      onClick={onClose}
                    >
                      <Text
                        fontSize='16px'
                        textAlign='center'
                        fontWeight={400}
                        fontFamily='sans-serif'
                        color={pathname === el.path ? 'black' : 'grey'}
                        _active={{ color: 'black' }}
                      >
                        {el.name}
                      </Text>
                    </Link>
                  ))}
                </Stack>
              </Box>
              <Link
                href={'/'}
                onClick={onClose}
              >
                <Image
                  width={82}
                  height={56}
                  src={img}
                  alt='img'
                />
              </Link>
              <Box
                bg='#F6F6F6'
                w='100%'
                p={6}
                display='flex'
                flexDirection='column'
                gap={8}
                borderRadius={10}
              >
                <Link
                  href={EMAIL_ADDRESS_LINK}
                  target={'_blank'}
                >
                  <Text
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    gap={4}
                    textAlign='center'
                    fontSize='16px'
                    lineHeight='19.6px'
                    color='#2D2E2E'
                    fontWeight={400}
                    fontFamily='sans-serif'
                  >
                    <Image
                      style={{ width: '24px', height: '22px' }}
                      src={message}
                      alt='img'
                    />
                    {EMAIL_ADDRESS}
                  </Text>
                </Link>
                <SocialContacts display='flex' />
              </Box>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  )
}

function SocialContacts({ display }: ChakraProps) {
  return (
    <Flex
      display={display}
      px='5'
      alignItems='center'
      justifyContent='center'
      w={{ md: '34%', base: '100%' }}
      h={{ md: '100%', base: 'auto' }}
      gap='19.28px'
    >
      {social_contact.map((el, idx) => (
        <Link
          href={el.path}
          key={idx}
          target='_blank'
        >
          <Flex
            w='43.38px'
            h='43.38px'
            justifyContent='center'
            alignItems='center'
            bg='#28282887'
            rounded='50%'
            fontSize='18px'
          >
            <el.icon
              color='white'
              fontWeight={600}
            />
          </Flex>
        </Link>
      ))}
    </Flex>
  )
}

export default NavbarSelect