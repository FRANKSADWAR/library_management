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