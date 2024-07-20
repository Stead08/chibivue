import { createRenderer} from "../runtime-core/renderer";
import { nodeOps } from "./nodeOps";
import {createAppAPI, CreateAppFunction} from "../runtime-core/apiCreateApp";

const { render } = createRenderer(nodeOps);
const _createApp = createAppAPI(render);

export const createApp = ((...args) => {
  const app = _createApp(...args);
  const { mount } = app;
  app.mount = ( selector: string) => {
    const container = document.querySelector(selector);
    if (!container) return;
    mount(container)
  }

  return app
}) as CreateAppFunction<Element>