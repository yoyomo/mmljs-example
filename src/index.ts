import {MML} from 'mmljs';
import {Compressed} from "./mml-files/compressed";
import {muv} from "muvjs/muv";
import {model, update, view} from "./App";


// MML.initialize();
//
// const allText = Compressed.mml;
// MML.readMML(allText.replace(/[\n ]/g, ''));
//
// const mml = MML.writeToMML();
// const root = document.querySelector('#root');
// if(root) root.innerHTML = mml;

muv({model,update,view});