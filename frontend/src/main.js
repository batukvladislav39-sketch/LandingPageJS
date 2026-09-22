import { getSettnigs, getPages } from "./api.js";

const app = document.querySelector('#app');

async function start() {
  try {
    const [ settings, page ] = await Promise.all([
      getSettnigs(),
      getPages(location.pathname)
  ])

    document.title = `${page.title} - ${settings.siteName}`;

    console.log(settings, page);

  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();