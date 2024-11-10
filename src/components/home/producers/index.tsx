// 'use client'

// import { Avatar, Box, Container, Flex, Text } from '@chakra-ui/react'
// import Image from 'next/image'
// import Link from 'next/link'

// import Description from '@/components/ui/texts/Description'
// import TitleComponent from '@/components/ui/texts/TitleComponent'

// import { PropsWithTitle } from '@/types/props.types'

// import { CONTAINER_WIDTH } from '@/config/_variables.config'

// import { useProducer } from '@/hooks/data-hooks'
// import useTypedLocale from '@/hooks/useLocale'

// const Producers = ({ title }: PropsWithTitle) => {
// 	const { data, isLoading } = useProducer()
// 	const locale = useTypedLocale()
// 	console.log(data,"ppppppppppppppppppppppppppppppppppp");
	
// 	return (
// 		<Box mt={{ md: '150px', base: '120px' }}>
// 			<Container
// 				maxW={CONTAINER_WIDTH}
// 				px={{ md: '4', base: '0' }}
// 			>
// 				<TitleComponent px={{ md: '0', base: '4' }}>{title}</TitleComponent>
// 				<Flex
// 					mt='25px'
// 					w='100%'
// 					overflowX='auto'
// 					className='unscroll'
// 				>
// 					<Flex
// 						px={{ md: '0', base: '4' }}
// 						gap='30px'
// 					>
// 						{data?.map(el => (
// 							<Box
// 								key={el.id}
// 								w='300px'
// 								minH='371px'
// 							>
// 								<Box
// 									w='100%'
// 									h='300px'
// 								>
// 									<Image
// 										src={el.image}
// 										alt='Image'
// 										height={300}
// 										width={300}
// 										className='full-image'
// 									/>
// 								</Box>
// 								<Link
// 									href={el.link}
// 									target='_blank'
// 								>
// 									<Flex
// 										mt='6'
// 										gap='3'
// 										alignItems='center'
// 										_hover={{ textDecoration: 'underline' }}
// 									>
// 										<Avatar
// 											src={el.logo}
// 											w='38px'
// 											h='38px'
// 										/>
// 										<Box color='#FFFFFF'>
// 											<Text
// 												fontWeight='500'
// 												fontSize='18px'
// 												lineHeight='20.52px'
// 												textTransform="uppercase"
// 											>
// 												{el[`full_name_${locale}`]}
// 											</Text>
// 											<Text
// 												mt='2'
// 												opacity='.5'
// 												lineHeight='18.24px'
// 											>
// 												{el.company}
// 											</Text>
// 										</Box>
// 									</Flex>
// 								</Link>
// 							</Box>
// 						))}
// 					</Flex>
// 				</Flex>
// 			</Container>
// 		</Box>
// 	)
// }

// export default Producers

////////
 
'use client'

import { Avatar, Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { PropsWithTitles } from '@/types/props.types'
import { CONTAINER_WIDTH } from '@/config/_variables.config'
import { useProducer } from '@/hooks/data-hooks'
import useTypedLocale from '@/hooks/useLocale'

const Producers = ({ title, coProducerTitle, associateProducerTitle }: PropsWithTitles) => {
	const { data, isLoading } = useProducer()
	const locale = useTypedLocale()

	// Separate producers by status
	const producers = data?.filter(el => el.status === 'producer') || []
	const coProducers = data?.filter(el => el.status === 'co-producer') || []
	const associateProducers = data?.filter(el => el.status === 'associate-producer') || []

	return (
		<Box mt={{ md: '150px', base: '120px' }}>
			<Container maxW={CONTAINER_WIDTH} px={{ md: '4', base: '0' }}>
				{/* Render Producers */}
				<TitleComponent px={{ md: '0', base: '4' }}>{title}</TitleComponent>
				<Flex mt='25px' w='100%' overflowX='auto' className='unscroll'>
					<Flex px={{ md: '0', base: '4' }} gap='30px'>
						{producers.map(el => (
							<Box key={el.id} w='300px' minH='371px'>
								<Box w='100%' h='300px'>
									<Image src={el.image} alt='Image' height={300} width={300} className='full-image' />
								</Box>
								<Link href={el.link} target='_blank'>
									<Flex mt='6' gap='3' alignItems='center' _hover={{ textDecoration: 'underline' }}>
										<Avatar src={el.logo} w='38px' h='38px' />
										<Box color='#FFFFFF'>
											<Text fontWeight='500' fontSize='18px' lineHeight='20.52px' textTransform="uppercase">
												{el[`full_name_${locale}`]}
											</Text>
											<Text mt='2' opacity='.5' lineHeight='18.24px'>
												{el.company}
											</Text>
										</Box>
									</Flex>
								</Link>
							</Box>
						))}
					</Flex>
				</Flex>

				{/* Render Co-Producers */}
				<TitleComponent px={{ md: '0', base: '4' }} mt='40px'>{coProducerTitle}</TitleComponent>
				<Flex mt='25px' w='100%' overflowX='auto' className='unscroll'>
					<Flex px={{ md: '0', base: '4' }} gap='30px'>
						{coProducers.map(el => (
							<Box key={el.id} w='300px' minH='371px'>
								<Box w='100%' h='300px'>
									<Image src={el.image} alt='Image' height={300} width={300} className='full-image' />
								</Box>
								<Link href={el.link} target='_blank'>
									<Flex mt='6' gap='3' alignItems='center' _hover={{ textDecoration: 'underline' }}>
										<Avatar src={el.logo} w='38px' h='38px' />
										<Box color='#FFFFFF'>
											<Text fontWeight='500' fontSize='18px' lineHeight='20.52px' textTransform="uppercase">
												{el[`full_name_${locale}`]}
											</Text>
											<Text mt='2' opacity='.5' lineHeight='18.24px'>
												{el.company}
											</Text>
										</Box>
									</Flex>
								</Link>
							</Box>
						))}
					</Flex>
				</Flex>

				{/* Render Associate Producers */}
				<TitleComponent px={{ md: '0', base: '4' }} mt='40px'>{associateProducerTitle}</TitleComponent>
				<Flex mt='25px' w='100%' overflowX='auto' className='unscroll'>
					<Flex px={{ md: '0', base: '4' }} gap='30px'>
						{associateProducers.map(el => (
							<Box key={el.id} w='300px' minH='371px'>
								<Box w='100%' h='300px'>
									<Image src={el.image} alt='Image' height={300} width={300} className='full-image' />
								</Box>
								<Link href={el.link} target='_blank'>
									<Flex mt='6' gap='3' alignItems='center' _hover={{ textDecoration: 'underline' }}>
										<Avatar src={el.logo} w='38px' h='38px' />
										<Box color='#FFFFFF'>
											<Text fontWeight='500' fontSize='18px' lineHeight='20.52px' textTransform="uppercase">
												{el[`full_name_${locale}`]}
											</Text>
											<Text mt='2' opacity='.5' lineHeight='18.24px'>
												{el.company}
											</Text>
										</Box>
									</Flex>
								</Link>
							</Box>
						))}
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Producers
