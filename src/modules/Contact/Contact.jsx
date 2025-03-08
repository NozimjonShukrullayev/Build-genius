import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoClose } from 'react-icons/io5'
import { Container } from '../../components/Container/Container'
import './style.scss'

export const Contact = () => {
	const [modal, setModal] = useState(false)
	const [message, setMessage] = useState(null)
	const [number, setNumber] = useState('')
	const { t } = useTranslation()
	const token = '7050168568:AAG4UDnhTen6HVUc4gnb5yZp45GLX-fjGvM'
	const chatId = 962709515

	const sendMessage = async (name, phoneNumber, message) => {
		try {
			const response = await fetch(
				`https://api.telegram.org/bot${token}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: chatId,
						text: `Name: ${name}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
					}),
				}
			)
			if (!response.ok) {
				throw new Error('Failed to send message')
			}
		} catch (error) {
			console.error('Error sending message:', error)
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const name = e.target.elements.name.value
		const phoneNumber = e.target.elements.tel.value
		const userMessage = e.target.elements.message.value
		await sendMessage(name, phoneNumber, userMessage)
		setMessage('Murojaatingiz qabul qilindi!')
		setModal(true)
		setNumber('')
		e.target.reset()
	}

	const onClick = () => {
		setModal(false)
	}

	const onClose = e => {
		if (!e.target.closest('.modal-con')) {
			setModal(false)
		}
	}

	return (
		<section className='contact'>
			<Container>
				<a className='anchor' id='contact'></a>
				<div className='contact-box'>
					<h2 className='contact-title'>{t('ContactText')}</h2>
					<form className='contact-form' action='' onSubmit={handleSubmit}>
						<input
							className='contact-inp'
							type='text'
							name='name'
							placeholder={t('name')}
							required
						/>
						<input
							className='contact-inp'
							type='tel'
							name='tel'
							placeholder={t('PhoneNumber')}
							required
							value={number}
							onChange={e => setNumber(e.target.value)}
						/>
						<textarea
							className='contact-textarea'
							name='message'
							id=''
							cols='30'
							rows='10'
							placeholder={t('Massage')}
						></textarea>
						<button className='contact-btn' type='submit'>
							{t('FormBtn')}
						</button>
					</form>
				</div>
				{modal && (
					<div className='modal' onClick={onClose}>
						<div className='modal-con'>
							<div className='modal-box'>
								<button className='modal-icon' onClick={onClick}>
									<IoClose />
								</button>
								<h3 className='modal-title'> {t('sending')}</h3>
								<button className='modal-btn' onClick={onClick}>
									Ok
								</button>
							</div>
						</div>
					</div>
				)}
			</Container>
		</section>
	)
}
