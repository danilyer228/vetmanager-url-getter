const vm_url = require('./index');
const assert = require('assert').strict;

describe("integration test", function() {
    it("VM url test", function() {
        assert.equal(vm_url("ua"), "https://ua.vetmanager.ru");
        assert.equal(vm_url("devtr6"), "https://devtr6.vetmanager2.ru");
    });
});
