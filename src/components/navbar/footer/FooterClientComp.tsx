'use client'

import { Box, ChakraProps, Container, Flex } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Description from '@/components/ui/texts/Description'

import {
	EMAIL_ADDRESS,
	EMAIL_ADDRESS_LINK,
	MOTION_WEB_LINK
} from '@/constants/admin'

import FooterLogo from '@/assets/img/footer-logo.svg'
import LogoLine from '@/assets/img/logo-line.svg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { IHeaderNav, social_contact } from '../data'

interface FooterClientCompProps {
	header_nav: IHeaderNav[]
	collaboration: string
	developer: string
	data_logo: {  
    selectedLogo: any
    selectedLogoAbout: any
  }
}
const FooterClientComp = ({
	header_nav,
	collaboration,
	developer,
	data_logo,
}: FooterClientCompProps) => {
	const pathname = usePathname()
	return (
		<Box
			id='footer'
			pt={{ md: '130px', base: '100px' }}
			pb={{ md: '51px', base: '14px' }}
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					bg={{ md: '#282828', base: 'transparent' }}
					// h={{ md: '210px', base: 'auto' }}
					p='2px'
					gap='2px'
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Flex
						minH='208px'
						minW='298px'
						px='5'
						justifyContent='center'
						alignItems='center'
						bg='#050505'
					>
						<Image 
						 width={130}
							src={data_logo.selectedLogoAbout}
							alt='Logo'
						/>
					</Flex>
					<Flex
						h={{ md: '208px', base: 'auto' }}
						flexDirection='column'
						gap='2px'
					>
						<Flex
							h={{ md: '104px', base: 'auto' }}
							gap='2px'
							flexDirection={{ xl: 'row', base: 'column' }}
						>
							<Flex
								display={{ md: 'flex', base: 'none' }}
								px='5'
								justifyContent='center'
								textAlign='center'
								alignItems='center'
								bg='#050505'
								w={{ xl: '50%', base: '100%' }}
								h={{ md: '100%', base: 'auto' }}
							>
								<Description
									opacity='.5'
									fontSize='14px'
									lineHeight='19.6px'
								>
									{collaboration}
								</Description>
							</Flex>
							<Flex
								px='5'
								alignItems='center'
								justifyContent='center'
								flexDirection={{ md: 'row', base: 'column' }}
								bg='#050505'
								w={{ xl: '50%', base: '100%' }}
								gap='27px'
								h={{ md: '100%', base: 'auto' }}
							>
								{header_nav.map((el, idx) => (
									<Link
										href={el.path}
										key={idx}
									>
										<Description
											fontSize='14px'
											lineHeight='19.6px'
											opacity={pathname === el.path ? '1' : '.5'}
										>
											{el.name}
										</Description>
									</Link>
								))}

								<Flex
									px='5'
									alignItems='center'
									justifyContent='center'
									bg='#050505'
									w={{ md: '34%', base: '100%' }}
									h={{ md: '100%', base: 'auto' }}
									display={{ md: 'none', base: 'flex' }}
								>
									<Link href={EMAIL_ADDRESS_LINK}>
										<Description
											fontSize='14px'
											lineHeight='19.6px'
										>
											{EMAIL_ADDRESS}
										</Description>
									</Link>
								</Flex>
							</Flex>

							<Flex
								mt='55px'
								display={{ md: 'none', base: 'flex' }}
								justifyContent='center'
							>
								<Image
									src={LogoLine}
									alt='Line'
								/>
							</Flex>
						</Flex>
						<Flex
							display={{ md: 'none', base: 'flex' }}
							mt='60px'
							justifyContent='center'
							textAlign='center'
							alignItems='center'
							bg='#050505'
							w={{ xl: '50%', base: '100%' }}
							h={{ md: '100%', base: 'auto' }}
						>
							<Description
								opacity='.5'
								fontSize='14px'
								lineHeight='19.6px'
							>
								{collaboration}
							</Description>
						</Flex>
						<SocialContacts display={{ md: 'none', base: 'flex' }} />
						<Flex
							mt={{ md: '0', base: '0px' }}
							gap='2px'
							h={{ md: '104px', base: 'auto' }}
							flexDirection={{ md: 'row', base: 'column' }}
							alignItems='center'
							textAlign={{ md: 'start', base: 'start' }}
						>
							<SocialContacts display={{ md: 'flex', base: 'none' }} />
							<Flex
								px='5'
								alignItems='center'
								justifyContent='center'
								bg='#050505'
								w={{ md: '34%', base: '100%' }}
								h={{ md: '100%', base: 'auto' }}
								display={{ md: 'flex', base: 'none' }}
							>
								<Link href={EMAIL_ADDRESS_LINK}>
									<Description
										fontSize='14px'
										lineHeight='19.6px'
									>
										{EMAIL_ADDRESS}
									</Description>
								</Link>
							</Flex>
							<Flex
								px='5'
								flexDirection='column'
								alignItems='center'
								justifyContent='center'
								bg='#050505'
								w={{ md: '34%', base: '100%' }}
								h={{ md: '100%', base: 'auto' }}
								mt={{ md: '0', base: '80px' }}
							>
								<Description
									fontSize={{ md: '14px', base: '10px' }}
									lineHeight={{ md: '19.6px', base: '14px' }}
									opacity='.5'
								>
									© 2025 KURAK
								</Description>
								<Link
									href={"https://www.instagram.com/dastan.mukeev"}
									target='_blank'
								>
									<Description
										fontSize={{ md: '14px', base: '10px' }}
										lineHeight={{ md: '19.6px', base: '14px' }}
										opacity='.5'
									>
										Developed by Dastan Mukeev
									</Description>
								</Link>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

function SocialContacts({ display }: ChakraProps) {
	return (
		<Flex
			display={display}
			mt={{ md: '0', base: '5' }}
			px='5'
			alignItems='center'
			justifyContent='center'
			bg='#050505'
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
						bg='#282828'
						rounded='50%'
						fontSize='18px'
					>
						<el.icon color='#BDBDBD' />
					</Flex>
				</Link>
			))}
		</Flex>
	)
}

export default FooterClientComp

