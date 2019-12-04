// MODEL
import { button, div, textarea } from "muvjs/muv-dom";
export const model = {
    mml: ''
};
export const changeMMLText = (text) => {
    return {
        type: "change-mml-text",
        text
    };
};
export const update = (model) => (action) => {
    switch (action.type) {
        case "change-mml-text":
            model = Object.assign({}, model);
            model.mml = action.text;
            break;
    }
    return { model };
};
export const view = (dispatch) => (model) => {
    const dispatcher = {
        changeMMLText: (e) => {
            let text = e && e.target && e.target.value || "";
            dispatch(changeMMLText(text));
        }
    };
    return (div()([
        ,
        textarea({ oninput: dispatcher.changeMMLText })(model.mml),
        button()('Play')
    ]));
};
//# sourceMappingURL=App.js.map