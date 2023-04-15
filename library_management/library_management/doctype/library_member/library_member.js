// Copyright (c) 2023, Billy Adwar and contributors
// For license information, please see license.txt



frappe.ui.form.on('Library Member', {
	refresh: function(frm){
		// This is how we add buttons to a button group in Frappe & ErpNext ecosystem
		frm.add_custom_button('Test Btn', function() {
			//console.log(frm); 
			let email = frm.doc.email_address;
			

		}, "Button Group"),
		frm.add_custom_button("Send MSG",function(){
			frappe.show_progress("Loading .....",[20,40,60,80], 100,"Updating data");
		},"Button Group");
		

		frm.add_custom_button('Create Membership',()=>{
			// create a document for membership of this member 
			frappe.new_doc('Library Membership',{
				library_member: frm.doc.name
			});
		});

		// we can also be able to create a transaction for this member
		frm.add_custom_button('Create Transaction',()=> {
			frappe.new_doc('Library Transaction',{
				library_member: frm.doc.name
			});
		});

		
		frm.add_custom_button('Library Members',function(){
			frappe.call({
				method: "library_management.api.get_all_members",
				freeze: true,

				callback: (response) =>{
					console.log(response.message);
				}
			})
		});
	},


	first_name : function(frm){
		let Fname = frm.doc.first_name;
		// a tenary operator that checks presence of the last name before appending it to first name
		frm.doc.last_name ?  frm.set_value ("full_name",Fname+ ' '+ frm.doc.last_name) : frm.set_value("full_name",Fname+ ' ');
	},

	last_name: function(frm){
		let Lname = frm.doc.last_name;
		// a tenary operator that checks for presence of last name and also appends to first name
		frm.doc.last_name ?  frm.set_value ("full_name",frm.doc.first_name+ ' '+ Lname) : frm.set_value("full_name",frm.doc.first_name+ ' ');
		
	},

});

// Select the articles that have been written by this author based on a selection
frappe.ui.form.on('Library Member', {
	author: function(frm){
	    let author = frm.doc.author;
	    if(author){
	        frappe.call({
	            method: "library_management.api.get_author_articles",
	            args : {author : author}
	        }).done((r)=>{
	            console.log(r);
	            
				// initialize the my_articles object to an empty array
	            frm.doc.my_articles = [];
	            
				// iterate through the message and set values in the child table
	            $.each(r.message, function(_i, e){
	                let entry = frm.add_child("my_articles");
	                entry.article_name = e.name;
	            });
				// refresh the field whenever the autor is changed
	            refresh_field("my_articles");
	            
	        });
	    }
	}
});
