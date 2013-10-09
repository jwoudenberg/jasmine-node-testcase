(function () {
    var Q = require('q');

    describe('A test', function () {
        it('Should succeed', function () {
            expect(false).toBe(false);
        });

        it('should fail with an error', function () {
            var result = null;

            runs(function () {
                Q('foo')
                .then(function () {
                    if (true) throw new Error('oops');
                    result = true;
                })
                .done();
            });

            waitsFor(function () {
                return result;
            }, 'result should be set', 500);

            runs(function () {
                expect(true).toBe(true);
            });
        });

        it('Should fail', function () {
            expect(true).toBe(false);
        });
    });
})();
