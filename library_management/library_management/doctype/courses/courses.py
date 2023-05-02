# Copyright (c) 2023, Billy Adwar and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class Courses(WebsiteGenerator):
	def __init__(self):
		self.course_name = str(self.course_name).upper()

	def before_save(self):
		if not (self.course_fee):
			self.course_fee = 500

	def get_context(self,context):
		context = {
			"course": frappe.db.get_value("Courses",self.course_name,["course_name as name","course_fee"],as_dict=True)
		}
		return context
