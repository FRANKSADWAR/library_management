# Copyright (c) 2023, Billy Adwar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import DocStatus
from frappe.model.document import Document
from library_management.utils import send_email



class LibraryMember(Document):
	##	This is one of the controller methods used in Frappe, there are several of them available
	def get_full_name(self):
		return f"{self.first_name} {self.last_name}"
	
	##  This is a controller hook in frappe framework
	def before_save(self):
		self.full_name = f'{self.first_name} {self.last_name or ""}'
		if (self.last_name):
			self.paid = 1
		else:
			self.paid =0	

		try:
			subject="NEW USER REGISTERED"
			message="a new user {} has been registered to the Library management app".format(self.full_name)
			recipients = ['franklinkzbenz95@gmail.com','chepkorir.cynthia04@gmail.com']
			send_email(self, recipients,subject, message)
			frappe.msgprint("Member created and email alert sent")
		except:
			frappe.msgprint("Email config might be wrong")	
		


	def validate(self):
		if self.paid:
			frappe.msgprint("User has paid")
		
		  


