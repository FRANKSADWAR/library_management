import frappe

@frappe.whitelist()
@frappe.validate_and_sanitize_search_inputs
def filter_customer_from_guarantors(doctype, txt, searchfield, start, page_len, filters):
    query = f"""SELECT name, customer_name, territory, mobile_no, email_id, customer_details FROM `tabCustomer` WHERE NOT 
            customer_name LIKE '%{txt}%' """


    if filters and filters.get("customer_name"):
       query += " AND NOT customer_name ={customer_name}".format(customer_name=frappe.db.escape(filters.get("customer_name")))
    return frappe.db.sql(query)

@frappe.whitelist()
@frappe.validate_and_sanitize_search_inputs
def filter_customer_and_guarantors(doctype, txt, searchfield, start, page_len, filters):
    query = f"""SELECT name, customer_name, territory, mobile_no, email_id, customer_details FROM `tabCustomer` WHERE """

    if searchfield:
        query += f"""{searchfield} LIKE %s AND """

    query += f"""NOT customer_name LIKE %s"""

    params = ['%' + txt + '%', '%' + txt + '%']

    if filters and filters.get("customer_name"):
        query += " AND NOT customer_name = %s"
        params.append(filters.get("customer_name"))

    return frappe.db.sql(query, tuple(params))
