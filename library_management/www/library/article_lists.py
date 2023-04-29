import frappe

def get_articles():
    articles = frappe.db.get_list('Article',fields=['article_name','author','status'])
    return articles

def get_context(context):
    context.art_ = get_articles()
    return context


