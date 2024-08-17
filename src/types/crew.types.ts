export interface ICrew {
	id: number
	info_ru: string
	info_en: string
	info_es: string
	info_it: string
	info_kg: string
	info_de: string
	info_fr: string
	crews: ICrewPerson[]
}

export interface ICrewPerson {
	id: number
	full_name_ru: string
	full_name_en: string
	full_name_es: string
	full_name_it: string
	full_name_kg: string
	full_name_de: string
	full_name_fr: string
	image: string
	link: string
}
