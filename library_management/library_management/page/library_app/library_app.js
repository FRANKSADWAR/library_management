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
		
		<div class="col layout-main-section-wrapper">
		<div class="layout-main-section frappe-card"><div class="page-form flex"><div class="standard-filter-section flex"><div class="form-group frappe-control input-max-width col-md-2" data-fieldtype="Data" data-fieldname="name" title="" data-original-title="ID"><input type="text" autocomplete="off" class="input-with-feedback form-control input-xs" maxlength="140" data-fieldtype="Data" data-fieldname="name" placeholder="ID"></div><div class="form-group frappe-control input-max-width col-md-2" data-fieldtype="Data" data-fieldname="article_name" title="" data-original-title="Article Name"><input type="text" autocomplete="off" class="input-with-feedback form-control input-xs" maxlength="140" data-fieldtype="Data" data-fieldname="article_name" placeholder="Article Name"></div></div><div class="filter-section flex"><div class="filter-selector">
<button class="btn btn-default btn-sm filter-button" data-original-title="" title="">
<span class="filter-icon">
	<svg class="icon  icon-sm" style="">
<use class="" href="#icon-filter"></use>
</svg>
</span>
<span class="button-label hidden-xs">
	Filter
<span>
</span></span></button>
</div><div class="sort-selector">  <div class="btn-group">   <button class="btn btn-default btn-sm btn-order" data-value="desc" title="descending">    <span class="sort-order">     <svg class="icon icon-sm">      <use href="#icon-sort-descending"></use>     </svg>    </span>   </button>   <button type="button" class="btn btn-default btn-sm sort-selector-button" data-toggle="dropdown">    <span class="dropdown-text">Last Updated On</span>    <ul class="dropdown-menu dropdown-menu-right">          <li>      <a class="dropdown-item option" data-value="modified">       Last Updated On      </a>     </li>          <li>      <a class="dropdown-item option" data-value="article_name">       Article Name      </a>     </li>          <li>      <a class="dropdown-item option" data-value="name">       ID      </a>     </li>          <li>      <a class="dropdown-item option" data-value="creation">       Created On      </a>     </li>          <li>      <a class="dropdown-item option" data-value="idx">       Most Used      </a>     </li>          <li>      <a class="dropdown-item option" data-value="naming_series">       Naming Series      </a>     </li>          <li>      <a class="dropdown-item option" data-value="author">       Author      </a>     </li>          <li>      <a class="dropdown-item option" data-value="publisher">       Publisher      </a>     </li>          <li>      <a class="dropdown-item option" data-value="isbn_number">       ISBN Number      </a>     </li>          <li>      <a class="dropdown-item option" data-value="status">       Status      </a>     </li>         </ul>   </button>  </div> </div></div></div><div class="frappe-list"><div class="result">
<header class="level list-row-head text-muted">
<div class="level-left list-header-subject">
	
<div class="list-row-col ellipsis list-subject level  ">
	
<input class="level-item list-check-all" type="checkbox" title="Select All">
<span class="level-item list-liked-by-me hidden-xs">
<span title="Likes"><svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg></span>
</span>
<span class="level-item">Article Name</span>

</div>

<div class="list-row-col ellipsis hidden-xs tag-col hide ">
	
		<span>Tag</span>
</div>

<div class="list-row-col ellipsis hidden-xs  ">
	
		<span>Author</span>
</div>

<div class="list-row-col ellipsis hidden-xs  ">
	
		<span>Status</span>
</div>

<div class="list-row-col ellipsis hidden-xs  ">
	
		<span>Publisher</span>
</div>

<div class="list-row-col ellipsis hidden-xs  ">
	
		<span>ID</span>
</div>

</div>
<div class="level-left checkbox-actions" style="display: none;">
	<div class="level list-subject">
		<input class="level-item list-check-all" type="checkbox" title="Select All">
		<span class="level-item list-header-meta"></span>
	</div>
</div>
<div class="level-right">
	<span class="list-count"><span>13 of 13</span></span>
</div>
</header>
<div class="freeze flex justify-center align-center text-muted" style="display: none;">
Loading...
</div>


<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="there-was-a-country">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="there-was-a-country" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="There was a country">
<a class="ellipsis" href="/app/article/there-was-a-country" title="There was a country" data-doctype="Article" data-name="there-was-a-country">
	There was a country
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Chinua Achebe">
<a class="filterable ellipsis" data-filter="author,=,Chinua Achebe">
	Chinua Achebe
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Available">
<span class="filterable indicator-pill green ellipsis" data-filter="status,=,Available">
	<span class="ellipsis"> Available </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: Penguins">
<a class="filterable ellipsis" data-filter="publisher,=,Penguins">
	Penguins
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: there-was-a-country">
<a class="filterable ellipsis" data-filter="name,=,there-was-a-country">
	there-was-a-country
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:41:04.416591" title="15-04-2023 13:11:04">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator green" title="Available"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="jack-ryan">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="jack-ryan" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Jack Ryan">
<a class="ellipsis" href="/app/article/jack-ryan" title="Jack Ryan" data-doctype="Article" data-name="jack-ryan">
	Jack Ryan
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Tom Clancy">
<a class="filterable ellipsis" data-filter="author,=,Tom Clancy">
	Tom Clancy
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Available">
<span class="filterable indicator-pill green ellipsis" data-filter="status,=,Available">
	<span class="ellipsis"> Available </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: Amazon">
<a class="filterable ellipsis" data-filter="publisher,=,Amazon">
	Amazon
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: jack-ryan">
<a class="filterable ellipsis" data-filter="name,=,jack-ryan">
	jack-ryan
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:40:58.386607" title="15-04-2023 13:10:58">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator green" title="Available"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="without-remose">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="without-remose" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Without Remose">
<a class="ellipsis" href="/app/article/without-remose" title="Without Remose" data-doctype="Article" data-name="without-remose">
	Without Remose
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Tom Clancy">
<a class="filterable ellipsis" data-filter="author,=,Tom Clancy">
	Tom Clancy
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Available">
<span class="filterable indicator-pill green ellipsis" data-filter="status,=,Available">
	<span class="ellipsis"> Available </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: Amazon">
<a class="filterable ellipsis" data-filter="publisher,=,Amazon">
	Amazon
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: without-remose">
<a class="filterable ellipsis" data-filter="name,=,without-remose">
	without-remose
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:40:46.204144" title="15-04-2023 13:10:46">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator green" title="Available"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="arrow-of-god">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="arrow-of-god" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Arrow of God">
<a class="ellipsis" href="/app/article/arrow-of-god" title="Arrow of God" data-doctype="Article" data-name="arrow-of-god">
	Arrow of God
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Chinua Achebe">
<a class="filterable ellipsis" data-filter="author,=,Chinua Achebe">
	Chinua Achebe
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Issued">
<span class="filterable indicator-pill gray ellipsis" data-filter="status,=,Issued">
	<span class="ellipsis"> Issued </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: Penguins">
<a class="filterable ellipsis" data-filter="publisher,=,Penguins">
	Penguins
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: arrow-of-god">
<a class="filterable ellipsis" data-filter="name,=,arrow-of-god">
	arrow-of-god
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:40:32.663286" title="15-04-2023 13:10:32">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator gray" title="Issued"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="the-5am-club">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="the-5am-club" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="The 5.AM Club">
<a class="ellipsis" href="/app/article/the-5am-club" title="The 5.AM Club" data-doctype="Article" data-name="the-5am-club">
	The 5.AM Club
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Robin Sharma">
<a class="filterable ellipsis" data-filter="author,=,Robin Sharma">
	Robin Sharma
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Available">
<span class="filterable indicator-pill green ellipsis" data-filter="status,=,Available">
	<span class="ellipsis"> Available </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: London Publishers">
<a class="filterable ellipsis" data-filter="publisher,=,London Publishers">
	London Publishers
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: the-5am-club">
<a class="filterable ellipsis" data-filter="name,=,the-5am-club">
	the-5am-club
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:26:16.154778" title="15-04-2023 12:56:16">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator green" title="Available"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="ART-2023-04-00001">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="ART-2023-04-00001" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Betrayal In the City">
<a class="ellipsis" href="/app/article/ART-2023-04-00001" title="Betrayal In the City" data-doctype="Article" data-name="ART-2023-04-00001">
	Betrayal In the City
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Francis Imbuga">
<a class="filterable ellipsis" data-filter="author,=,Francis Imbuga">
	Francis Imbuga
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Available">
<span class="filterable indicator-pill green ellipsis" data-filter="status,=,Available">
	<span class="ellipsis"> Available </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: JKF Publishers">
<a class="filterable ellipsis" data-filter="publisher,=,JKF Publishers">
	JKF Publishers
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: ART-2023-04-00001">
<a class="filterable ellipsis" data-filter="name,=,ART-2023-04-00001">
	ART-2023-04-00001
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:22:56.925806" title="15-04-2023 12:52:56">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator green" title="Available"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="ART-2023-04-00002">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="ART-2023-04-00002" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Man of Kafira">
<a class="ellipsis" href="/app/article/ART-2023-04-00002" title="Man of Kafira" data-doctype="Article" data-name="ART-2023-04-00002">
	Man of Kafira
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Francis Imbuga">
<a class="filterable ellipsis" data-filter="author,=,Francis Imbuga">
	Francis Imbuga
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Available">
<span class="filterable indicator-pill green ellipsis" data-filter="status,=,Available">
	<span class="ellipsis"> Available </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: JKF FOUNDATION">
<a class="filterable ellipsis" data-filter="publisher,=,JKF FOUNDATION">
	JKF FOUNDATION
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: ART-2023-04-00002">
<a class="filterable ellipsis" data-filter="name,=,ART-2023-04-00002">
	ART-2023-04-00002
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:22:15.023995" title="15-04-2023 12:52:15">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator green" title="Available"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="ART-2023-04-00003">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="ART-2023-04-00003" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Obstacle Is The Way">
<a class="ellipsis" href="/app/article/ART-2023-04-00003" title="Obstacle Is The Way" data-doctype="Article" data-name="ART-2023-04-00003">
	Obstacle Is The Way
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Ryan Holiday">
<a class="filterable ellipsis" data-filter="author,=,Ryan Holiday">
	Ryan Holiday
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Available">
<span class="filterable indicator-pill green ellipsis" data-filter="status,=,Available">
	<span class="ellipsis"> Available </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: London Publishers">
<a class="filterable ellipsis" data-filter="publisher,=,London Publishers">
	London Publishers
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: ART-2023-04-00003">
<a class="filterable ellipsis" data-filter="name,=,ART-2023-04-00003">
	ART-2023-04-00003
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-04-15 10:20:34.883449" title="15-04-2023 12:50:34">5 d</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator green" title="Available"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="anthrills-of-the-savanna">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="anthrills-of-the-savanna" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Anthrills of the Savanna">
<a class="ellipsis" href="/app/article/anthrills-of-the-savanna" title="Anthrills of the Savanna" data-doctype="Article" data-name="anthrills-of-the-savanna">
	Anthrills of the Savanna
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Chinua Achebe">
<a class="filterable ellipsis" data-filter="author,=,Chinua Achebe">
	Chinua Achebe
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Issued">
<span class="filterable indicator-pill gray ellipsis" data-filter="status,=,Issued">
	<span class="ellipsis"> Issued </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: ">
<a class="filterable ellipsis" data-filter="publisher,=,">
	
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: anthrills-of-the-savanna">
<a class="filterable ellipsis" data-filter="name,=,anthrills-of-the-savanna">
	anthrills-of-the-savanna
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-02-07 07:00:40.066683" title="07-02-2023 09:30:40">2 M</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator gray" title="Issued"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="man-of-the-people">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="man-of-the-people" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Man of the People">
<a class="ellipsis" href="/app/article/man-of-the-people" title="Man of the People" data-doctype="Article" data-name="man-of-the-people">
	Man of the People
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Chinua Achebe">
<a class="filterable ellipsis" data-filter="author,=,Chinua Achebe">
	Chinua Achebe
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Issued">
<span class="filterable indicator-pill gray ellipsis" data-filter="status,=,Issued">
	<span class="ellipsis"> Issued </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: ">
<a class="filterable ellipsis" data-filter="publisher,=,">
	
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: man-of-the-people">
<a class="filterable ellipsis" data-filter="name,=,man-of-the-people">
	man-of-the-people
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-02-07 06:59:37.000810" title="07-02-2023 09:29:37">2 M</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator gray" title="Issued"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="ART-2023-01-00003">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="ART-2023-01-00003" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Ego is the Enemy">
<a class="ellipsis" href="/app/article/ART-2023-01-00003" title="Ego is the Enemy" data-doctype="Article" data-name="ART-2023-01-00003">
	Ego is the Enemy
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Ryan Holiday">
<a class="filterable ellipsis" data-filter="author,=,Ryan Holiday">
	Ryan Holiday
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Issued">
<span class="filterable indicator-pill gray ellipsis" data-filter="status,=,Issued">
	<span class="ellipsis"> Issued </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: Savanna publishers">
<a class="filterable ellipsis" data-filter="publisher,=,Savanna publishers">
	Savanna publishers
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: ART-2023-01-00003">
<a class="filterable ellipsis" data-filter="name,=,ART-2023-01-00003">
	ART-2023-01-00003
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-01-19 07:06:07.073181" title="19-01-2023 09:36:07">3 M</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator gray" title="Issued"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="ART-2023-01-00002">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="ART-2023-01-00002" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="When Breath Becomes Air">
<a class="ellipsis" href="/app/article/ART-2023-01-00002" title="When Breath Becomes Air" data-doctype="Article" data-name="ART-2023-01-00002">
	When Breath Becomes Air
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Paul Kalanithi">
<a class="filterable ellipsis" data-filter="author,=,Paul Kalanithi">
	Paul Kalanithi
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Issued">
<span class="filterable indicator-pill gray ellipsis" data-filter="status,=,Issued">
	<span class="ellipsis"> Issued </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: Penguin Publishers">
<a class="filterable ellipsis" data-filter="publisher,=,Penguin Publishers">
	Penguin Publishers
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: ART-2023-01-00002">
<a class="filterable ellipsis" data-filter="name,=,ART-2023-01-00002">
	ART-2023-01-00002
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-01-18 22:27:15.076261" title="19-01-2023 00:57:15">3 M</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator gray" title="Issued"></span>
</div>

	</div>
</div>
</div>

<div class="list-row-container" tabindex="1">
<div class="level list-row">
	<div class="level-left ellipsis">
		
<div class="list-row-col ellipsis list-subject level ">

<span class="level-item select-like">
<input class="list-row-checkbox" type="checkbox" data-name="ART-2023-01-00001">
<span class="list-row-like hidden-xs style=" margin-bottom:="" 1px;"="">
	<span class="like-action not-liked" data-name="ART-2023-01-00001" data-doctype="Article" data-liked-by="null" title="">
<svg class="icon  icon-sm" style="">
<use class="like-icon" href="#icon-heart"></use>
</svg>
</span>
<span class="likes-count">

</span>
</span>
</span>
<span class="level-item bold ellipsis" title="Things Fall Apart">
<a class="ellipsis" href="/app/article/ART-2023-01-00001" title="Things Fall Apart" data-doctype="Article" data-name="ART-2023-01-00001">
	Things Fall Apart
</a>
</span>

</div>

<div class="list-row-col tag-col hide hidden-xs ellipsis">
	<div class="tags-empty">-</div>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Author: Chinua Achebe">
<a class="filterable ellipsis" data-filter="author,=,Chinua Achebe">
	Chinua Achebe
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Status: Issued">
<span class="filterable indicator-pill gray ellipsis" data-filter="status,=,Issued">
	<span class="ellipsis"> Issued </span>
</span>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="Publisher: Penguin Publishers">
<a class="filterable ellipsis" data-filter="publisher,=,Penguin Publishers">
	Penguin Publishers
</a>
</span>
</div>

<div class="list-row-col ellipsis hidden-xs ">
<span class="ellipsis" title="ID: ART-2023-01-00001">
<a class="filterable ellipsis" data-filter="name,=,ART-2023-01-00001">
	ART-2023-01-00001
</a>
</span>
</div>

	</div>
	<div class="level-right text-muted ellipsis">
		
<div class="level-item list-row-activity hidden-xs">
<div class="hidden-md hidden-xs">
	<div class="list-assignments">
<span class="avatar avatar-small">
<span class="avatar-empty"></span>
</span></div>
</div>
<span class="frappe-timestamp  mini" data-timestamp="2023-01-18 22:24:35.443660" title="19-01-2023 00:54:35">3 M</span>
<span class="comment-count">
<svg class="icon  icon-sm" style="">
<use class="" href="#icon-small-message"></use>
</svg>
0
</span>
</div>
<div class="level-item visible-xs text-right">
<span class="indicator gray" title="Issued"></span>
</div>

	</div>
</div>
</div>
</div><div class="no-result text-muted flex justify-center align-center" style="display: none;">
<div class="no-result text-muted flex justify-center align-center">
<div class="msg-box no-border">
<div>
<img src="/assets/frappe/images/ui-states/list-empty-state.svg" alt="Generic Empty State" class="null-state">
</div>
<p>You haven't created a Article yet</p>
<p><button class="btn btn-primary btn-sm btn-new-doc hidden-xs">
Create your first Article
</button> <button class="btn btn-primary btn-new-doc visible-xs">
Create New
</button></p>

</div>
</div>
</div><div class="list-paging-area level" style="">
<div class="level-left">
	<div class="btn-group">
		
			<button type="button" class="btn btn-default btn-sm btn-paging btn-info" data-value="20">
				20
			</button>
		
			<button type="button" class="btn btn-default btn-sm btn-paging" data-value="100">
				100
			</button>
		
			<button type="button" class="btn btn-default btn-sm btn-paging" data-value="500">
				500
			</button>
		
	</div>
</div>
<div class="level-right">
	<button class="btn btn-default btn-more btn-sm" style="display: none;">
		Load More
	</button>
</div>
</div></div></div>
		<div class="layout-footer hide"></div>
	</div>
		
		`;

		// add the page to the parent DOM element which is the entire page
		$(frappe.render_template(htmlContent, this)).appendTo(this.page.main);
	},
});