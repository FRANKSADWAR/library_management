import frappe

@frappe.whitelist(allow_guest=True)
def get_article_count():
    articles = frappe.db.sql(""" SELECT count(*) AS articleNumbers FROM `tabArticle` """,as_dict=True)
    return articles

@frappe.whitelist(allow_guest=True)
def get_users():
    users = frappe.db.get_list()
    pass


## An SQL quesry to get the Weekly sales from sales invoices, which have been paid
@frappe.whitelist(allow_guest=True)
def get_weekly_sales():
    sales = frappe.db.sql(f"""  SELECT week(posting_date) AS week, SUM(grand_total) AS Weekly_sales FROM `tabSales Invoice` WHERE status='Paid' 
                            GROUP BY week ORDER BY week; """, as_dict=True)


    return sales                        

