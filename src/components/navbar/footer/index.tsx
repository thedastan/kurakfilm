import { useHeaderNav } from '../data'

import FooterClientComp from './FooterClientComp'

const Footer = () => {
	const header_nav = useHeaderNav()
	return <FooterClientComp header_nav={header_nav} />
}

export default Footer
