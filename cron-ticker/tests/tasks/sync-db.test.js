const { syncDB } = require("../../tasks/sync-db");

describe('Tests in Sync-DB', () => {
    test('The process should be executed two times', () => {
        syncDB();
        const times = syncDB();

        expect(times).toBe(2);
    });
});