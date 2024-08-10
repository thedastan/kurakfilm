'use client'

import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Description from '@/components/ui/texts/Description'

import FooterLogo from '@/assets/img/footer-logo.svg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { IHeaderNav } from '../data'

const FooterClientComp = ({ header_nav }: { header_nav: IHeaderNav[] }) => {
	const pathname = usePathname()
	return (
		<Box
			pt='130px'
			pb='51px'
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					bg='#282828'
					minH='208px'
					p='2px'
					gap='2px'
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
							src={FooterLogo}
							alt='Logo'
						/>
					</Flex>
					<Flex
						minH='208px'
						flexDirection='column'
						gap='2px'
					>
						<Flex
							minH='104px'
							gap='2px'
						>
							<Flex
								px='5'
								justifyContent='center'
								textAlign='center'
								alignItems='center'
								bg='#050505'
								w='50%'
								h='100%'
							>
								<Description
									opacity='.5'
									fontSize='14px'
									lineHeight='19.6px'
								>
									If you would like to receive a film to be shown for
									educational purposes, please contact us using the contact
									details provided.
								</Description>
							</Flex>
							<Flex
								px='5'
								alignItems='center'
								justifyContent='center'
								bg='#050505'
								w='50%'
								gap='27px'
								h='100%'
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
							</Flex>
						</Flex>

						<Flex
							gap='2px'
							minH='104px'
						>
							<Flex
								px='5'
								alignItems='center'
								justifyContent='center'
								bg='#050505'
								w='34%'
								h='100%'
							></Flex>
							<Flex
								px='5'
								alignItems='center'
								justifyContent='center'
								bg='#050505'
								w='34%'
								h='100%'
							>
								<Description
									fontSize='14px'
									lineHeight='19.6px'
								>
									kurakfilmkg@gmail.com
								</Description>
							</Flex>
							<Flex
								px='5'
								flexDirection='column'
								alignItems='center'
								justifyContent='center'
								bg='#050505'
								w='34%'
								h='100%'
							>
								<Description
									fontSize='14px'
									lineHeight='19.6px'
									opacity='.5'
								>
									© 2024 KURAK
								</Description>
								<Description
									fontSize='14px'
									lineHeight='19.6px'
									opacity='.5'
								>
									Разработал Motion Web LLC
								</Description>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default FooterClientComp
