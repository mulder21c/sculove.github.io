$("code[contenteditable]").focusout(function(e) {
	var $el = $(e.target);
	eval($el.text());
});