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
    
