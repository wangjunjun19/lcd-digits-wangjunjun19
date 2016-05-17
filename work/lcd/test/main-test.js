describe('lcd', function () {
    describe('unit testing', function () {
        describe('test buildKeysArray function', function () {
            var input;

            beforeEach(function () {
                input = 910;
            });

            it('should print keysArray', function () {
                var keysArray = ['9', '1', '0'];

                expect(buildKeysArray(input)).toEqual(keysArray);
            });
        });

        describe('test buildLcdsArray function', function () {
            var keysArray;

            beforeEach(function () {
                keysArray = ['9', '1', '0'];
            });

            it('should print lcdArray', function () {
                var lcdArray = [
                    {
                        key: 9,
                        item: ['._.', '|_|', '..|']
                    },
                    {
                        key: 1,
                        item: ['...', '..|', '..|']
                    },
                    {
                        key: 0,
                        item: ['._.', '|.|', '|_|']
                    }
                ];

                expect(buildLcdsArray(keysArray)).toEqual(lcdArray);
            })
        })
    });

    describe('integration', function () {
        var allItems;
        var input;

        beforeEach(function () {
            allItems = loadAllItems();
            input = 910;
        });

        it('should print correct text', function () {

            spyOn(console, 'log');

            printLcd(input);

            var expectText =
                "```\n" +
                "._. ... ._.\n" +
                "|_| ..| |.|\n" +
                "..| ..| |_|\n" +
                "```";

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});
