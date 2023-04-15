// Copyright (c) 2023, Billy Adwar and contributors
// For license information, please see license.txt


// Testing custom API's within Frappe Framework
frappe.ui.form.on('Article', {
	refresh: function(frm) {
		var author = frm.doc.author;

		frm.add_custom_button("Get Author Books",()=>{
			console.log(frm.doc.author);
			frappe.call({
				method: "library_management.api.get_author_articles",
				args : {
					author: author
				},
				callback : function(r){

				}
			});
		},"ACTIONS");
	}
});
