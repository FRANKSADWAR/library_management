import frappe

def get_context(context):
    articles = frappe.db.sql(f""" SELECT * FROM `tabArticle` ORDER BY creation DESC; """, as_dict=True)
    context = {
        "articles": articles
    }

    return context

