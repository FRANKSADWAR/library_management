# Copyright (c) 2023, Billy Adwar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.website.website_generator import WebsiteGenerator

class Article(WebsiteGenerator):
	def validate(self):
		if (self.track_buyers == 1):
			if not self.buyers:
				frappe.throw("This article MUST track buyers")
		if (self.track_buyers == 0) and (self.buyers == True):
			frappe.throw("The track buyers must be cheked") ## the code after the error is thrown is not executed by Frappe, execution stops at that point
	# def before_save(self):
	# 	frappe.msgprint("Check this")			

	# def before_save(self):
	# 	if (self.track_buyers == 0):
	# 		if not self.buyers:
	# 			frappe.throw("This article must track buyers")


	## All generator code can be writtent in this same class, no need to SubClass the Dcoument class

