// MODEL

import {button, div, textarea} from "muvjs/muv-dom";
import {MML} from "mmljs";
import {Compressed} from "./mml-files/compressed";

window.onload = function() {
  MML.initialize();

  const allText = Compressed.mml;
  MML.readMML(allText.replace(/[\n ]/g, ''));

  // const mml = MML.writeToMML();
};

export const model = {
  mml: Compressed.mml
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

export interface PlayMML {
  type: 'play-mml';
}

export const playMML = (): PlayMML => {
  return {
    type: "play-mml",
  };
};

export type Action = ChangeMMLText | PlayMML;

export const update = (model: Model) => (action: Action) => {
  switch (action.type) {
    case "change-mml-text":
      model = {...model};
      model.mml = action.text;
      break;

    case "play-mml":
      MML.readMML(model.mml.replace(/[\n ]/g, ''));
      MML.play();
      break;
  }

  return {model};
};

export const view = (dispatch: (a: Action) => void) => (model: Model) => {
    const dispatcher = {
      changeMMLText: (e: InputEvent) => {
        let text = e && e.target && (e.target as HTMLInputElement).value || "";
        dispatch(changeMMLText(text))
      },
      playMML: () => dispatch(playMML())
    };

    return (
      div()([
        , textarea({oninput: dispatcher.changeMMLText})(model.mml)
        , button({onclick: dispatcher.playMML})('Play')
      ])
    )
  }
;