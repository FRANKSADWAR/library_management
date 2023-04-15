// Copyright (c) 2023, Billy Adwar and contributors
// For license information, please see license.txt


// Testing custom API's within Frappe Framework
frappe.ui.form.on('Article', {
	refresh: function(frm) {
		var author = frm.doc.author;
		var publisher = frm.doc.publisher;

		frm.add_custom_button("Get Author Books",()=>{
			frappe.call({
				method: "library_management.api.get_all_articles",
				args : {
					author: author,
					publisher: publisher
				},
				callback : function(response){
					if(response){
						console.log(response.message);
					}
				}
			});
		},"ACTIONS");
	}
});
