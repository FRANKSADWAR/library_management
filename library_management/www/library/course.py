import frappe

## This is how a single data is obtained from a database and parsed to the Jinja template, we also use a web_route_rule hook 
def get_context(context):
    
    id_ = frappe.form_dict.name
    
    article_details = frappe.db.sql(f""" SELECT article_name, author, publisher, status, description FROM `tabArticle` WHERE article_name='{id_}';""",as_dict=True)
    
    
    context = {
        "article_details": article_details[0]
    }
    return context


    