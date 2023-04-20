frappe.pages['library-app'].on_page_load = function (wrapper) {
	new PageContent(wrapper);
};

PageContent = Class.extend({
	init: function (wrapper) {
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Library App',
			single_column: true
		});
		this.make();
	},
	
	make: function () {
		let htmlContent = `
			<div class="container">
				<div class="row">
					<div class="col-md-4"> 
						<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
						</div>
					</div>

				</div>

				<div class="col-md-4">
					<h2>Another piece of content</h2>
        		</div>
			</div>`;

		// add the page to the parent DOM element which is the entire page
		$(frappe.render_template(htmlContent, this)).appendTo(this.page.main);
	},
});