import frappe

@frappe.whitelist(allow_guest=True)
def get_article_count():
    articles = frappe.db.sql(""" SELECT count(*) AS articleNumbers FROM `tabArticle` """,as_dict=True)
    return articles

