// Copyright (c) 2023, Billy Adwar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Membership', {
	refresh: function(frm) {

	},
	before_save: function(){
		let customer = frm.doc.customer;
		frappe.call({
			method: "library_management.api.get_customer_balance",
			args: {
				"company": frm.doc.company,
				"customer_name": frm.doc.customer
			},
			callback: function(response){
				frm.set_value({
					"account_balance": response.message['account_balance'],
					"customer_balance": response.message['party_balance'],
				})
			}
		});
	}
});
