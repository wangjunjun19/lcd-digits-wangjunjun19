describe('lcd',function () {
    describe('unit testing',function () {
        describe('test buildKeys function',function () {
         var input;
         
         beforeEach(function () {
             input=910;
         });
         
         it('should print keys',function () {
             var keys=['9','1','0'];

             expect(buildKeys(input)).toEqual(keys);
         });
      });

        describe('test buildItems function',function () {
            var keys;

            beforeEach(function () {
                keys=['9','1','0'];
            });

            it('should print items',function () {
                var items=[
                    {
                        key:9,
                        item:['._.','|_|','..|']
                    },
                    {
                        key:1,
                        item:['...','..|','..|']
                    },
                    {
                    key:0,
                    item:['._.','|.|','|_|']
                    }
                ];

                expect(buildItems(keys)).toEqual(items);
            })
        })
    });

         describe('integration',function () {
        var allItems;
        var input;

        beforeEach(function() {
            allItems = loadAllItems();
            input = 910;
        });

        it('should print correct text', function() {

            spyOn(console, 'log');

            printLcd(input);

            var expectText =
                "```\n"+
                "._. ... ._.\n"+
                "|_| ..| |.|\n"+
                "..| ..| |_|\n"+
                "```";

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});
