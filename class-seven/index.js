const { get, create } = require('./database');

(async () => {
    // await create({ name: 'João', age: 19 });

    const developers = await get();

    console.log(developers);
})();
