import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Home = async () => {
  const page = await getHash();
  const characters = await getData(page);
  const view = `
  <section class="About">
    <span>All data is provided from <a href="https://rickandmortyapi.com/">Rick and Morty API</a></span>
  </section>
  <div class="Characters">
    ${characters.results
      .map(
        (character) => `
    <article class="Character-item">
      <a href="#/${character.id}/">
        <img class="Character-img" src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </a>
    </article>
    `
      )
      .join("")}

  </div>
  `;
  return view;
};

export default Home;
