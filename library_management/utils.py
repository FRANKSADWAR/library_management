import frappe
from frappe import enqueue, enqueue_doc

def send_email(doc,recipients, subject, message, attachments=None):
    email_args = {
        "recipients": recipients,
        "subject": subject,
        "message": message,
        "reference_doctype": doc.doctype,
        "reference_name": doc.name
    }
    if attachments:
        email_args['attachments'] = attachments

    enqueue(method=frappe.sendmail,queue="short",timeout=300,now=True, at_front=True,**email_args)    


def test_hook(doc, event):
    print(f"\n\n\n\n{doc} \n\n{event}")





