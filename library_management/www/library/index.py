import frappe
from library_management.api import paginate

def get_context(context):
    #articles = frappe.db.sql(f""" SELECT * FROM `tabArticle` ORDER BY creation DESC; """, as_dict=True)

    ## call the pagination function which returns a dictionary 
    pagination = paginate()
    articles = pagination.get('articles') ## get the articles key 
    next = pagination.get('next')
    prev = pagination.get('prev')

    ## build the context dictionary
    context = {
        "articles": articles,
        "next": next,
        "prev": prev
    }

    ## return the context object
    return context

