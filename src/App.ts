// MODEL

import {button, div, textarea} from "muvjs/muv-dom";

export const model = {
  mml: ''
};

export type Model = typeof model;


// UPDATE

export interface ChangeMMLText {
  type: 'change-mml-text';
  text: string;
}

export const changeMMLText = (text: string): ChangeMMLText => {
  return {
    type: "change-mml-text",
    text
  };
};

export type Action = ChangeMMLText;

export const update = (model: Model) => (action: Action) => {
  switch (action.type) {
    case "change-mml-text":
      model = {...model};
      model.mml = action.text;
      break;
  }

  return {model};
};

export const view = (dispatch: (a: Action) => void) => (model: Model) => {
    const dispatcher = {
      changeMMLText: (e: InputEvent) => {
        let text = e && e.target && (e.target as HTMLInputElement).value || "";
        dispatch(changeMMLText(text))
      }
    };

    return (
      div()([
        , textarea({oninput: dispatcher.changeMMLText})(model.mml)
        , button()('Play')
      ])
    )
  }
;