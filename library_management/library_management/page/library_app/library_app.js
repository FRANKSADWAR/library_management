frappe.pages['library-app'].on_page_load = function (wrapper) {
	new PageContent(wrapper);
};

PageContent = Class.extend({
	init: function (wrapper) {
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Library App',
			single_column: true
		});
		this.make();
	},

	make: function () {
		let htmlContent = `
		
		
		
		`;

		// add the page to the parent DOM element which is the entire page
		$(frappe.render_template(htmlContent, this)).appendTo(this.page.main);
	},
});