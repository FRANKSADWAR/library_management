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
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4"> 
						<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
							<a id="counts" href="#" class="btn btn-primary">Articles : </a>
						</div>
						</div>
					</div>

					<div class="col-md-4">
						<h2></h2>
        			</div>
				</div>
			</div>`;

			let articles_count = function(){
				frappe.call({
					method: "library_management.library_management.page.library_app.library_api.get_article_count",
					callback : function(response){
						let articles = response.message;
						$('a#counts').append(articles[0]['articleNumbers']);
						console.log(articles);
					}
				})
			}
			// make the function call after being done right here
			articles_count();
		// add the page to the parent DOM element which is the entire page
		$(frappe.render_template(htmlContent, this)).appendTo(this.page.main);
	},
});