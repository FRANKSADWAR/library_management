import frappe

def get_courses():
    courses = frappe.db.get_list('Courses',fields=['course_name','course_duration','description','course_fee'])
    return courses

def get_context(context):
    context = {
        "courses": get_courses()
    }

    return context