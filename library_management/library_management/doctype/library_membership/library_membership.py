# Copyright (c) 2023, Billy Adwar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import DocStatus
from frappe.model.document import Document

class LibraryMembership(Document):
	## use a controller method for checking the document before submitting it
	def before_submit(self):
		exists = frappe.db.exists("Library Membership",
								{"library_member":self.library_member, 
									"docstatus":DocStatus.submitted(), 
									# check if the membership's end date is later than this membership's start date
									"to_date": (">",self.from_date),
								},
							)

		if exists:
			frappe.throw("There is an active membership for this member already")

		loan_period = frappe.db.get_single_value("Library Settings","loan_period")
		
		## we use the frappe.db.get_single_value method to get the value of loan_period from the Library Settings doctype
		self.to_date = frappe.utils.add_days(self.from_date,loan_period or 30)	

	def validate(self):
		if self.from_date > self.to_date:
			frappe.throw("The start date has to be before the end date")
