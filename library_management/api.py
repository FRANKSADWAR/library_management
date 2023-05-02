import frappe
import requests
import json, time

@frappe.whitelist()
def get_all_members():
    members = frappe.db.sql(f"""SELECT full_name, email_address FROM `tabLibrary Member`; """, as_dict=True)
    return members

@frappe.whitelist()
def get_author_articles(author):
    articles = frappe.db.sql(f""" SELECT name FROM `tabArticle` WHERE author='{author}' """, as_dict=True)
    return articles

@frappe.whitelist()
def get_all_articles(author, publisher):
    all_authors = frappe.db.sql(""" SELECT name, article_name, author, publisher, isbn_number FROM `tabArticle` WHERE author =%s AND publisher =%s""",(author,publisher), as_dict=True)
    return all_authors
   

@frappe.whitelist()
def get_active_memberships(member):
    pass

def get_weather_data():
    try:
        frappe.log_error(f"Reading data error ")
    except Exception as e:
        frappe.log_error("")

def get_daily_weather():
    frappe.msgprint("Obtaining daily weather data")


def get_weekly_weather():
    frappe.msgprint("Obtained weekly weather data")
    


## The code snippet below creates a new doc and then inserts it into the database and finally commits the transaction to the database
def get_data(leadid, leadtype, prefix, name, mobile):
    newData = frappe.get_doc({
        "doctype": "Get Data Sample",
        "leadid": leadid,
        "leadtype":leadtype,
        "prefix":prefix,
        "name":name,
        "mobile":mobile
    })
    newData.insert(ignore_permissions=True)
    frappe.db.commit()

## Start at index 3 and return only the first three items 
def get_limited_articles():
    articles = frappe.db.sql(f""" SELECT name, creation, modified, article_name, author, publisher, status FROM `tabArticle` LIMIT 3,3;""",as_dict=True)
    return articles
    
def paginate(doctype, page=0):
    prev, next = 0,0
    conditions = ""

    query = f""" SELECT name, creation, modified, article_name, author, publisher, status FROM `tab{doctype}` {conditions};"""

    ## Thic condition is used when there is a page existing in the link already i.e articles/?page=5
    if (page):
        page = int(page)
        ## get the articles depending on the page that we are at given the number of pagination that we want
        articles = frappe.db.sql(query+f""" LIMIT {(page*3)-3}, 3""", as_dict=True)
        ## next_page represents what exists after three pages
        next_page = frappe.db.sql(query+f""" LIMIT {page*3}, 3""", as_dict=True)

        ## check whether there is a next page 
        if(next_page):
            prev, next = page-1, page+1
        else:
            prev, next = page-1,0

    ## This condition runs when the page is first loaded, i.e there is no page link that has been visited
    else:
        count = frappe.db.sql(f""" SELECT COUNT(name) AS count  FROM `tab{doctype}`; """,as_dict=True)[0].count
        if (count > 3):
            prev, next = 0,2
        else:
            pass    
        articles = frappe.db.sql(query+ """ LIMIT 3""", as_dict=True)

    return  {
        "articles" : articles,
        "prev" : prev,
        "next" : next
    }    