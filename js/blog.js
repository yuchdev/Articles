// Stub JS for vanila static blog
(function (window, document, undefined) {

	'use strict';

	//
	// Variables
	//

	let form = document.querySelector('#form-search');
	let input = document.querySelector('#input-search');
	let resultList = document.querySelector('#search-results');


	//
	// Methods
	//

	/**
	 * Create the HTML for each result
	 * @param  {Object} article The article
	 * @param  {Number} id      The result index
	 * @return {String}         The markup
	 */
	let createHTML = function (article, id) {
		let html =
			'<div id="search-result-' + id + '">' +
				'<a href="' + article.url + '">' +
					'<aside>' +
						article.date +
					'</aside>' +
					'<h2>' + article.title + '</h2>' +
					article.summary.slice(0, 150) + '...<br>' +
					article.url +
				'</a>' +
			'</div>';
		return html;
	};

	/**
	 * Create the markup when no results are found
	 * @return {String} The markup
	 */
	let createNoResultsHTML = function () {
		return '<p>Sorry, no matches were found.</p>';
	};

	/**
	 * Create the markup for results
	 * @param  {Array} results The results to display
	 * @return {String}        The results HTML
	 */
	let createResultsHTML = function (results) {
		let html = '<p>Found ' + results.length + ' matching articles</p>';
		html += results.map(function (article, index) {
			return createHTML(article, index);
		}).join('');
		return html;
	};

	/**
	 * Search for matches
	 * @param  {String} query The term to search for
	 */
	let search = function (query) {

		// Variables
		let reg = new RegExp(query, 'gi');
		let priority1 = [];
		let priority2 = [];

		// Search the content
		searchIndex.forEach(function (article) {
			if (reg.test(article.title)) return priority1.push(article);
			if (reg.test(article.content)) priority2.push(article);
		});

		// Combine the results into a single array
		let results = [].concat(priority1, priority2);

		// Display the results
		resultList.innerHTML = results.length < 1 ? createNoResultsHTML() : createResultsHTML(results);

	};

	/**
	 * Handle submit events
	 */
	let submitHandler = function (event) {
		event.preventDefault();
		search(input.value);
	};


	//
	// Inits & Event Listeners
	//

	// Make sure required content exists
	if (!form || !input || !resultList || !searchIndex) return;

	// Create a submit handler
	form.addEventListener('submit', submitHandler);

})(window, document);
