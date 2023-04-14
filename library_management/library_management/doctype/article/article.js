// Copyright (c) 2023, Billy Adwar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {
	refresh: function(frm) {
		frm.add_custom_button("Get Author Books",()=>{
			console.log(frm.doc.author);
		},"ACTIONS")
	}
});
