import {
	Formats,
	MarkupTranslationValues,
	RichTranslationValues,
	TranslationValues
} from 'next-intl'
import { ReactElement, ReactNodeArray } from 'react'

export interface IProcedure {
	id: number
	title_ru: string
	title_en: string
	description_ru: string
	description_en: string
	file: string
	type: 0 | 1
}

//////

export interface IDoctor {
	id: number
	full_name_ru: string
	full_name_en: string
	job_ru: string
	job_en: string
	image: string
	specs: ISpec[]
}

interface ISpec {
	id: number
	title_ru: string
	title_en: string
}

///////

export interface IRehab {
	id: number
	title_ru: string
	title_en: string
	description_ru: string
	description_en: string
	image: string
}

export interface IReview {
	id: number
	full_name_ru: string
	full_name_en: string
	info_ru: string
	info_en: string
	text_ru: string
	text_en: string
	link_ru: string
	link_en: string
}

///////

export interface IFeedbackValue {
	full_name: string
	phone: string
	message: string
}

export interface ITranslateType {
	<TargetKey extends any>(
		key: TargetKey,
		values?: TranslationValues,
		formats?: Partial<Formats>
	): string
	rich<TargetKey extends any>(
		key: TargetKey,
		values?: RichTranslationValues,
		formats?: Partial<Formats>
	): string | ReactElement | ReactNodeArray
	markup<TargetKey extends any>(
		key: TargetKey,
		values?: MarkupTranslationValues,
		formats?: Partial<Formats>
	): string
	raw<TargetKey extends any>(key: TargetKey): any
}
