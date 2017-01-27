name=

build-site:
	mkdir -p public
	npm run build-site
	node scripts/build-site.js

upload-site:
	ghp-import public

component:
	COMPONENT=${name} npm run build-component
