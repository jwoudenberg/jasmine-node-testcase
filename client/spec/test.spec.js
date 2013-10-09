/**
 * Test case.
 * Below are three tests. The top one should succeed.
 * In the second one an exception is thrown, so it should fail.
 * The last one should also fail.
 * What happens is that the first two are executed, then jasmine drops
 * dead when trying to execute the second one.
 */
(function () {
    var Q = window.Q;

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
