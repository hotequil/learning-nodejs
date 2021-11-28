const { get } = require('./database');

(async () => {
    const developers = await get();

    console.log(developers);
})();
