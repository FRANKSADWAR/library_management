import frappe

def get_context(context):
    article = frappe.form_dict
    print("\n\n\n\n\n {} \n\n".format(article))