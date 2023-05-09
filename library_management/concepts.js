frappe.ui.form.on('Loan',{
    onload: function(frm){
        frm.set_query("customer_name",function(){
            return {
                "filters":[
                    ["customer_name", "!=", frm.doc.applicant]
                ]
            };
        });
       

        frm.set_query("loan_type",function(){
            return {
                "filters":{
                    "docstatus": 1,
                    "company": frm.doc.company
                }
            };
        });

        frm.set_query("loan_application",function(){
            return {
                "filters":{
                    "applicant": frm.doc.applicant,
                    "docstatus": 1,
                    "status": "Approved"
                }
            };
        });

        // set the guarantors field such that an applicat cannot be a guarantor
		frm.set_query("customer_name", function(doc,cdt,cdn){
			return {
				query: "library_management.loan_query.filter_customer_and_guarantors", // path to the whitelisted function
				searchfields: "name",
				filters : {
					'customer_name':doc.applicant
				}
			}
		});

        $.each(["penalty_income_account","interest_income_account"],function(i, field){
            frm.set_query(field,function(){
                return {
                    "filters": {
                        "company": frm.doc.company,
                        "roo_type": "Income",
                        "is_group": 0
                    }
                };
            });
        });
    }

})