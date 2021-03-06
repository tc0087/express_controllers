const products = []

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add product',
		path: '/admin/add-product'
	})
}

exports.postAddProduct = (req, res, next) => {
	products.push({title: req.body.title})
	res.redirect('/')
}

exports.getProducts = (req, res, next) => {
	res.render('public', {
		prods: products, 
		pageTitle: 'Shop',
		path: '/'
	})
}