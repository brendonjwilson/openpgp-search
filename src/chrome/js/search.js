// Load the localized text into the extension's UI.
function loadSearchUI() {
	document.getElementById("search_criteria").placeholder = chrome.i18n.getMessage("search_criteria");
	document.getElementById("search_criteria").addEventListener('input', function() { updateSearchUI(); });
}


// Reveal the instruction icon when the user has typed something.
function updateSearchUI() {
	search_criteria = document.getElementById("search_criteria")
	
	if (search_criteria.value.length > 0)
		document.getElementById("search_form").style.backgroundImage = "url('../images/searchInputBackground.png')";
	else
		document.getElementById("search_form").style.backgroundImage = "none";
}


// Trigger the post-load functionality once the DOM is rendered.
document.addEventListener('DOMContentLoaded', function() {
	loadSearchUI();
});