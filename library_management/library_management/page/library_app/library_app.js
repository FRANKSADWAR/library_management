frappe.pages['library-app'].on_page_load = function(wrapper) {
	new PageContent(wrapper);
}

var PageContent = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Library App',
			single_column: true
		});
	},

	make: function(){
		let htmlContent = `<h2>Library App Page</h2>`;
		$(frappe.render_template())
	}
})