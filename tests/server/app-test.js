const {app} = require('../../src/server/app');
const React = require('react');

test("running on correct port", () => {
    const port = process.env.PORT || 8080;
    app.listen(port);
    expect(port).toEqual(8080);

});