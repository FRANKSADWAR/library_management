import frappe

@frappe.whitelist()
def get_stock_order_items(sales_order):
    sales_order_items = frappe.db.sql(""" SELECT item.item_code, item.item_name, item.description, item.qty, item.rate, item.amount 
                        FROM `tabSales Order Item` AS item WHERE item.parent = %s """,(sales_order),as_dict=True)
    return sales_order_items

