# Copyright (c) 2023, Billy Adwar and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Courses(Document):
	def __init__(self):
		self.course_name = str(self.course_name).upper()

	def before_save(self):
		if not (self.course_fee):
			self.course_fee = 500
			
