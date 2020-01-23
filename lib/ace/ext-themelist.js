

ace.define('ace/ext/themelist', ['require', 'exports', 'module' , 'ace/ext/themelist_utils/themes'], function(require, exports, module) {
module.exports.themes = require('ace/ext/themelist_utils/themes').themes;
module.exports.ThemeDescription = function(name) {
    this.name = name;
    this.desc = name.split('_'
        ).map(
            function(namePart) {
                return namePart[0].toUpperCase() + namePart.slice(1);
            }
        ).join(' ');
    this.theme = "ace/theme/" + name;
};

module.exports.themesByName = {};

module.exports.themes = module.exports.themes.map(function(name) {
    module.exports.themesByName[name] = new module.exports.ThemeDescription(name);
    return module.exports.themesByName[name];
});

});

ace.define('ace/ext/themelist_utils/themes', ['require', 'exports', 'module' ], function(require, exports, module) {

module.exports.themes = [
    "ambiance",
    "chaos",
    "chrome",
    "clouds",
    "clouds_midnight",
    "cobalt",
    "crimson_editor",
    "dawn",
    "dreamweaver",
    "eclipse",
    "github",
    "idle_fingers",
    "kr_theme",
    "merbivore",
    "merbivore_soft",
    "mono_industrial",
    "monokai",
    "pastel_on_dark",
    "solarized_dark",
    "solarized_light",
    "terminal",
    "textmate",
    "tomorrow",
    "tomorrow_night",
    "tomorrow_night_blue",
    "tomorrow_night_bright",
    "tomorrow_night_eighties",
    "twilight",
    "vibrant_ink",
    "xcode"
];

});