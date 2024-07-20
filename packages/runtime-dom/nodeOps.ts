import { RendererOptions} from "../runtime-core/renderer";

export const nodeOps: RendererOptions<Node> = {
  createElement: tagName => {
    return document.createElement(tagName);
  },

  setElementText(node: Node, text: string) {
    node.textContent = text;
  },

  createText(text: string): Node {
    return document.createTextNode(text);
  },

  insert(child: Node, parent: Node, anchor?: Node | null) {
    parent.insertBefore(child, anchor || null)
  }
}