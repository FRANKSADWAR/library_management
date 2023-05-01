import frappe

def get_context(context):
    articles = frappe.db.sql(f""" SELECT * FROM `tabArticle`; """, as_dict=True)
    context = {
        "articles": articles
    }

    return context

    