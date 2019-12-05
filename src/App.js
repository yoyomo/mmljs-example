// MODEL
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { button, div, textarea } from "muvjs/muv-dom";
export var model = {
    mml: ''
};
export var changeMMLText = function (text) {
    return {
        type: "change-mml-text",
        text: text
    };
};
export var update = function (model) { return function (action) {
    switch (action.type) {
        case "change-mml-text":
            model = __assign({}, model);
            model.mml = action.text;
            break;
    }
    return { model: model };
}; };
export var view = function (dispatch) { return function (model) {
    var dispatcher = {
        changeMMLText: function (e) {
            var text = e && e.target && e.target.value || "";
            dispatch(changeMMLText(text));
        }
    };
    return (div()([
        ,
        textarea({ oninput: dispatcher.changeMMLText })(model.mml),
        button()('Play')
    ]));
}; };
//# sourceMappingURL=App.js.map