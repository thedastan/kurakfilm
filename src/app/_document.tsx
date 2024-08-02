import Document, { Head, Html } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='manifest'
						href='/manifest.json'
					/>
					<link
						rel='icon'
						href='/favicon.ico'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/mini-logo.svg'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon.ico'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon.ico'
					/>
					<link
						rel='manifest'
						href='/manifest.json'
					/>
					<meta
						name='theme-color'
						content='#ffffff'
					/>

					<meta
						name='theme-color'
						content='#000000'
					/>

					{/* <!-- Windows Phone --> */}
					<meta
						name='msapplication-navbutton-color'
						content='#000000'
					/>

					{/* <!-- iOS Safari --> */}
					<meta
						name='apple-mobile-web-app-capable'
						content='yes'
					/>
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='black-transcluent'
					/>
				</Head>
			</Html>
		)
	}
}

export default MyDocument
