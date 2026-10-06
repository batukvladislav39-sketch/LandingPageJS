import "./styles/base.css";
import { getSettnigs, getPages } from "./api.js";
import { renderBlocks } from "./render.js";

const app = document.querySelector('#app');

async function start() {
  try {
    const [ settings, page ] = await Promise.all([
      getSettnigs(),
      getPages(location.pathname)
  ])

    document.title = `${page.title} - ${settings.siteName}`;

    app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`;

  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();