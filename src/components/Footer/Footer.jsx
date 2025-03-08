import { useTranslation } from 'react-i18next'
import { FaInstagram } from 'react-icons/fa6'
import { SiFacebook } from 'react-icons/si'
import pht from '../../assets/ataev2.563d9f6552a0ae9e7a2b logo.png'
import { Container } from '../Container/Container'
import './style.scss'

export const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className='footer'>
			{' '}
			<Container>
				<div className='footer-flex'>
					<div className='footer-box'>
						<a href='#'>
							{' '}
							<img className='footer-logo' src={pht} alt='' />
						</a>
						<p className='footer-text'>{t('Subscribe')}</p>
						<div className='footer-icon-box'>
							<a className='footer-icon' href=''>
								<FaInstagram />
							</a>
							<a className='footer-icon' href=''>
								<SiFacebook />
							</a>
						</div>
					</div>
					<div className='footer-box'>
						<h3 className='footer-title'>{t('Company')}</h3>
						<ul className='footer-ul'>
							<li className='footer-list'>
								<a className='footer-link' href='#page'>
									{t('korxona')}
								</a>
							</li>
							<li className='footer-list'>
								<a className='footer-link' href='#projects'>
									{t('about')}
								</a>
							</li>
							<li className='footer-list'>
								<a className='footer-link' href='#about'>
									{t('news')}
								</a>
							</li>
							<li className='footer-list'>
								<a className='footer-link' href='#projects'>
									{t('btnProject')}
								</a>
							</li>
						</ul>
					</div>
					<div className='footer-box'>
						<h3 className='footer-title'>{t('contact')}</h3>
						<button className='footer-btn'>
							{' '}
							<a className='footer-link' href='tel:+998951040767'>
								+998951040767
							</a>
						</button>
						<br />
						<button className='footer-btn'>
							{' '}
							<a className='footer-link' href='tel:+998951040767'>
								+998951040767
							</a>
						</button>
					</div>
				</div>
			</Container>
		</footer>
	)
}
