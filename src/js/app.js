import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    console.error(error);
  }
})();
