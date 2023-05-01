import frappe

## This is how a single data is obtained from a database and parsed to the Jinja template, we also use a web_route_rule hook 
def get_context(context):
    article_name = frappe.form_dict.name
    article = frappe.get_doc("Article",article_name)
    print("\n\n\n\n\n {} \n\n".format(article))
    
    context = {
        "article": article
    }
    return context

    