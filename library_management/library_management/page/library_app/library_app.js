frappe.pages['library-app'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Library App',
		single_column: true
	});
}

PageContent = Class.extend()