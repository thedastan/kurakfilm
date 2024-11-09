import { useTranslations } from 'next-intl'
import React from 'react'

import Logo from '@/assets/img/hero-logo.svg'
import Logo_ru from '@/assets/img/kurak_rus.svg'

import AboutImage from '@/assets/img/footer-logo.svg' 
import AboutImageRu from '@/assets/img/kurak_rus.svg'



import useTypedLocale from '@/hooks/useLocale'

const useLogoImg = () => {
	const locale = useTypedLocale()

  const selectedLogo = locale === 'ru' ? Logo_ru : locale === 'kg' ? Logo_ru : Logo
  const selectedLogoAbout = locale === 'ru' ? AboutImageRu : locale === 'kg' ? AboutImageRu : AboutImage


  return { selectedLogo,selectedLogoAbout }
}

export default useLogoImg
 