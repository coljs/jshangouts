/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-play' : '&#x21;',
			'icon-camera' : '&#x22;',
			'icon-bell' : '&#x23;',
			'icon-mail' : '&#x24;',
			'icon-tag' : '&#x25;',
			'icon-box-add' : '&#x26;',
			'icon-box-remove' : '&#x27;',
			'icon-reply' : '&#x28;',
			'icon-reply-2' : '&#x29;',
			'icon-forward' : '&#x2a;',
			'icon-redo' : '&#x2b;',
			'icon-undo' : '&#x2c;',
			'icon-comments' : '&#x2d;',
			'icon-comments-2' : '&#x2e;',
			'icon-cog' : '&#x2f;',
			'icon-rocket' : '&#x30;',
			'icon-fire' : '&#x31;',
			'icon-lab' : '&#x32;',
			'icon-grid-view' : '&#x33;',
			'icon-cloud' : '&#x34;',
			'icon-star' : '&#x35;',
			'icon-star-2' : '&#x36;',
			'icon-bookmark' : '&#x37;',
			'icon-bookmark-2' : '&#x38;',
			'icon-checkmark' : '&#x39;',
			'icon-cancel' : '&#x3a;',
			'icon-cancel-2' : '&#x3b;',
			'icon-seven-segment' : '&#x41;',
			'icon-seven-segment-2' : '&#x42;',
			'icon-seven-segment-3' : '&#x43;',
			'icon-seven-segment-4' : '&#x44;',
			'icon-seven-segment-5' : '&#x45;',
			'icon-facebook' : '&#x46;',
			'icon-twitter' : '&#x47;',
			'icon-youtube' : '&#x48;',
			'icon-flickr' : '&#x49;',
			'icon-github' : '&#x4a;',
			'icon-html5' : '&#x4b;',
			'icon-html5-2' : '&#x4c;',
			'icon-chrome' : '&#x4d;',
			'icon-css3' : '&#x4e;',
			'icon-file-css' : '&#x4f;',
			'icon-file-xml' : '&#x50;',
			'icon-file-zip' : '&#x51;',
			'icon-firefox' : '&#x52;',
			'icon-IE' : '&#x53;',
			'icon-opera' : '&#x54;',
			'icon-safari' : '&#x55;',
			'icon-skype' : '&#x56;',
			'icon-tumblr' : '&#x57;',
			'icon-warning' : '&#x58;',
			'icon-film' : '&#x59;',
			'icon-location' : '&#x5a;',
			'icon-star-3' : '&#x5b;',
			'icon-cancel-3' : '&#x5c;',
			'icon-checkmark-2' : '&#x5d;',
			'icon-circle' : '&#x5e;',
			'icon-shit' : '&#x5f;',
			'icon-bookmark-3' : '&#x60;',
			'icon-heart' : '&#x61;',
			'icon-document-alt-fill' : '&#x62;',
			'icon-fullscreen' : '&#x63;',
			'icon-droplet' : '&#x64;',
			'icon-eye' : '&#x65;',
			'icon-bolt' : '&#x66;',
			'icon-arrow-left' : '&#x67;',
			'icon-arrow-right' : '&#x68;',
			'icon-arrow-down' : '&#x69;',
			'icon-arrow-up' : '&#x6a;',
			'icon-camera-2' : '&#x6b;',
			'icon-pacman' : '&#x6c;',
			'icon-user' : '&#x6d;',
			'icon-unchecked' : '&#x6e;',
			'icon-checked' : '&#x6f;',
			'icon-play-alt' : '&#x70;',
			'icon-seven-segment-6' : '&#x40;',
			'icon-seven-segment-7' : '&#x3f;',
			'icon-seven-segment-8' : '&#x3e;',
			'icon-seven-segment-9' : '&#x3d;',
			'icon-seven-segment-10' : '&#x3c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};