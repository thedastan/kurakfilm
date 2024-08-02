class PUBLIC {
	private root = '/'

	MAIN = this.root
	AUTH = `${this.root}auth`
	CART = `${this.root}cart`
	FAVORITES = `${this.root}favorites`
	PRODUCTS = `${this.root}products`
	PRODUCT_DETAIL = (slug: number | string) => {
		return `${this.PRODUCTS}/${slug}`
	}

	CATALOG = `${this.root}catalog`
	CATALOG_DETAIL = (slug: number | string) => {
		return `${this.CATALOG}/${slug}`
	}

	BLOG = `${this.root}blog`
	BLOG_DETAIL = (slug: number | string) => {
		return `${this.BLOG}/${slug}`
	}
	AUTHORS_BOUQUET = `${this.CATALOG}/authors-bouquet`
}
export const PUBLIC_PAGES = new PUBLIC()
