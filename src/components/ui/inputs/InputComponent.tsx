'use client'

import {
	Box,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Textarea
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { PiEyeClosedFill, PiEyeFill } from 'react-icons/pi'

export interface IInputComponentProps {
	name: string
	placeholder: string
	type?: string
	value?: string
	as?: 'input' | 'textArea'
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	required?: boolean
}

const InputComponent = ({
	name,
	placeholder,
	value,
	handleChange,
	handleChangeTextarea,
	type = 'text',
	required = true,
	as = 'input'
}: IInputComponentProps) => {
	const [show, setShow] = useState(false)
	return (
		<Stack mb='4'>
			{as === 'input' ? (
				<InputGroup>
					<Input
						onChange={handleChange}
						variant='none'
						value={value}
						name={name}
						type={show ? 'text' : type}
						rounded='0'
						placeholder={placeholder}
						h='56px'
						w='100%'
						border='none'
						borderBottom='1px solid #565656'
						bg='transparent'
						fontSize='16px'
						letterSpacing='0.5px'
						px='4'
						fontWeight='400'
						lineHeight='20px'
						color='#000000'
						_placeholder={{
							color: '#00000080'
						}}
						isRequired={required}
						autoFocus={false}
					/>
					{type === 'password' && (
						<InputRightElement
							w='3rem'
							h='100%'
							display='flex'
							alignItems='center'
						>
							<Box
								onClick={() => setShow(!show)}
								fontSize='24px'
								color='#A8A8A8'
								cursor='pointer'
							>
								{show ? <PiEyeFill /> : <PiEyeClosedFill />}
							</Box>
						</InputRightElement>
					)}
				</InputGroup>
			) : (
				<Textarea
					onChange={handleChangeTextarea}
					value={value}
					name={name}
					placeholder={placeholder}
					variant='flushed'
					h='98px'
					px='4'
					pt='18px'
					w='100%'
					borderBottom='1px solid #D8DADC'
					bg='transparent'
					fontSize='16px'
					letterSpacing='0.5px'
					fontWeight='400'
					lineHeight='20px'
					color='#000000'
					_placeholder={{
						color: '#00000080'
					}}
					isRequired={required}
				/>
			)}
		</Stack>
	)
}

export default InputComponent
