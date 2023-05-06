import frappe

def get_articles():
    articles = frappe.db.get_list('Article',fields=['article_name','author','status'])
    return articles

def get_member():
    members = frappe.db.get_list('Library Member',fields=['full_name'])
    return members

def get_context(context):
    context = {
        "art_" : get_articles()
    }
    
    return context

    


