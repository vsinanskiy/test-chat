const get = require('../index');

test('fetches data from API', async () => {
    const data = {
        status: 'OK'
    };
    const result = await get('status');
    expect(result).toEqual(data);
});