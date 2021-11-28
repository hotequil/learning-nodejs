const { get, create, update, remove } = require('./database');

(async () => {
    // await create({ name: 'João', age: 19 });
    // await update({ id: 2, name: 'Teste', age: 99 });
    // await remove(4);

    const developers = await get();

    console.log(developers);
})();
