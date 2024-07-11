import { IoMdArrowBack } from 'react-icons/io'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

// eslint-disable-next-line react/prop-types
const Header = ({ backLink = '' }) => {
	/* TODO: React router useHistory */

	const { pathname } = useLocation()

	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname != '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<SlUser fill='#fff' fontSize={29} />
				</button>
			)}

			<Hamburger />
		</header>
	)
}

export default Header
