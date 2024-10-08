 

'use client'

import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, Image, Flex } from '@chakra-ui/react'
import { useState } from 'react'

import TitleComponent from '@/components/ui/texts/TitleComponent'
import { PropsWithTitle } from '@/types/props.types'
import { useGalley } from '@/hooks/data-hooks'

const StillHeroClient = ({ title }: PropsWithTitle) => {
  const { data, isLoading } = useGalley()
  const [image, setImage] = useState('')

  return (
    <> 
    		 <Box display={{ md: 'block', base: 'none' }}>
			<Box
				className='still-hero'
				position='relative'
			>
				<Box
					position='absolute'
					bg='linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'
					h='151px'
					w='100%'
					left='0'
					bottom='0'
					zIndex='0'
				/>

				{!!image && (
					<Box
						position='absolute'
						zIndex='3'
						left='0'
						top='0'
						bottom='0'
						right='0'
						w='100%'
						h='100%'
					>
						<Image
							src={image}
							alt='Background'
							// width={1440}
							// height={664}
							className='full-image'
						/>

						<Box
							position='absolute'
							bg='linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'
							h='151px'
							w='100%'
							left='0'
							bottom='0'
							zIndex='4'
						/>
					</Box>
				)}
				<Flex
					justifyContent='center'
					alignItems='end'
					pb={{ md: '50px', base: '19px' }}
					minH='664px'
					px='4'
					position='relative'
					zIndex='1'
				>
					<Flex
						flexDirection='column'
						alignItems='center'
						textAlign='center'
					>
						<TitleComponent>{title}</TitleComponent>
					</Flex>
				</Flex>
			</Box>
			<Flex
				w='100%'
				overflowX='auto'
				className='unscroll'
			>
				<Flex>
					{!!data &&
						data.map(el => (
							<Box
								key={el.id}
								onMouseOver={() => setImage(el.image)}
								onMouseLeave={() => setImage('')}
								onClick={() => setImage(el.image)}
								w={{ md: '205.88px', base: '107.51px' }}
								h={{ md: '126.39px', base: '69.29px' }}
								cursor='pointer'
								_active={{ opacity: '.8' }}
							>
								<Image
									src={el.image}
									alt='Image'
									width={205.88}
									height={126.39}
									className='full-image'
								/>
							</Box>
						))}
				</Flex>
			</Flex>
		</Box>
    <Box h="300px" display={{ md: 'none', base: 'block' }}>
      <Box className="still-hero" position="relative"  w="100%"  height={300}>
        <Box
          position="absolute"
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
          h="151px"
          w="100%"
          left="0"
          bottom="0"
          zIndex="0"
        />

        {!!image && (
          <Box
            position="absolute"
            zIndex="3"
            left="0"
            top="0"
            bottom="0"
            right="0"
            w="100%"
            h="100%"
          >
            <Image
              src={image}
              alt="Background"
              height={300}
              className="full-image"
            />
            
          </Box>
        )}

        <Box textAlign="start"   position="relative"   pt="140px" pl="4px">
          <TitleComponent w="80">{title}</TitleComponent>
        </Box>
      </Box>

      <Box>
	  <Tabs display="flex" overflowX="scroll" border="none" p={0}  m={0}>
  <TabList p={0} m={0} border="none">
    {!!data &&
      data.map((el) => (
        <Tab
          key={el.id}
          onClick={() => setImage(el.image)}
          
          w="200px"
          h="100px"
		  border="none"
          p={0}  
          m={0}  
        >
          <Image
            src={el.image}
            alt="Thumbnail"
            
            className="full-image"
          />
        </Tab>
      ))}
  </TabList>
</Tabs>

      </Box>
    </Box>
     </>
  )
}

export default StillHeroClient
