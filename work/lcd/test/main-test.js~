/**
 * Created by wangjun on 16-4-26.
 */
describe('lcd',function () {
    describe('unit testing',function () {
     describe('test buildKeys function',function () {
         var input;
         
         beforeEach(function () {
             input=910;
         });
         
         it('should print Keys',function () {
             var Keys=['9','1','0'];

             expect(buildKeys(input)).toEqual(Keys);
         });
     });

        describe('test buildAllItems function',function () {
            var Keys;

            beforeEach(function () {
                Keys=['9','1','0'];
            });

            it('should print AllItems',function () {
                var AllItems=[
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

                expect(buildAllItems(Keys)).toEqual(AllItems);
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

        it('should print correct text(910)', function() {

            spyOn(console, 'log');

            printLCD(input);

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