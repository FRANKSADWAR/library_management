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


## this is a hoo function in Frappe
def test_hook(doc, event):
    print(f"\n\n\n\n{doc} {event}\n\n\n\n")


## This function will create a new note when an Article is created in the Library Management App
def create_note_on_article(doc, event):
    title = doc.article_name
    notify_users = 1
    public = 1
    note = frappe.get_doc(({
        "doctype": "Note",
        "title": title,
        "notify_users": notify_users,
        "public": public
    }))    
    note.insert()
    frappe.db.commit()
    

    print("\n\n Insert succesful \n\n\n")




