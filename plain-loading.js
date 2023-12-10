/*

ready( () => 
		jQuery.getScript("https://kimbtech.github.io/better-moodle/plain-loading.js", 
		()=>load_better_moodle()
	)
);
*/

function load_better_moodle(){

	this.GM_addStyle ??= style => {
		const styleEl = document.createElement('style');
		styleEl.textContent = style;
		document.head.append(styleEl);
	};

	this.GM_getValue ??= (key, defaultValue) =>
		JSON.parse(localStorage.getItem(key) ?? JSON.stringify(defaultValue));

	this.GM_setValue ??= (key, value) =>
		localStorage.setItem(key, JSON.stringify(value));

	this.GM_listValues ??= () => Object.keys(localStorage);

	this.GM_addValueChangeListener ??= (key, callback) => {
		this.listeners ??= [];
		const listener = ({ oldValue, newValue }) =>
			callback(key, oldValue, newValue, false);
		this.listeners.push(listener);
		window.addEventListener('storage', listener);
		return this.listeners.length;
	};
	
	this.GM_removeValueChangeListener ??= id => {
		window.removeEventListener('storage', this.listeners[id - 1]);
		this.listeners[id - 1] = null;
	};

	this.GM_info ??= {
		script: {
			version: '1.21.0',
			updateUrl: 'https://github.com/jxn-30/better-moodle/raw/main/redesign.user.js',
		},
	};

	jQuery.getScript(
		this.GM_info.script.updateUrl.replace(
			"https://github.com/jxn-30/better-moodle/raw/main/",
			"https://kimbtech.github.io/better-moodle/"
		)
	)
}