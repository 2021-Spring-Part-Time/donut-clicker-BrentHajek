import DonutMaker from "./DonutMaker";

describe('The creation of DonutMaker', () => {

    test('Does it add a donut?', () => {
        const underTest = new DonutMaker(0,0,0,0,0);
        underTest.createADonut();
        expect(underTest.donutCount).toEqual(1);
    });

    test('Can it purchase an autoClicker AND remove spent donuts?', () => {
        const underTest = new DonutMaker(100,0,100,0,0);
        underTest.purchaseAutoClicker();
        expect(underTest.autoClickerCount).toEqual(1);
        expect(underTest.donutCount).toEqual(0);
    });

    test('Should not allow autoClicker purchase with 99 donuts', () => {
        const underTest = new DonutMaker(99,0,100,0,0);
        underTest.purchaseAutoClicker();
        expect(underTest.autoClickerCount).toEqual(0);
    });

    test('Will add donuts increase by the amount of autoClickers present when fired?', () => {
        const underTest = new DonutMaker(110,2,0,0,0);
        underTest.activateAutoClickers();
        expect(underTest.donutCount).toEqual(112);
    });

    test('Will increase autoclicker cost by 10%', () => {
        const underTest = new DonutMaker(500,1,110,0,0);
        underTest.purchaseAutoClicker();
        expect(underTest.autoClickerCost).toEqual(121);
    });

    test('Repeat last test because I can\'t belive I got that right on the first try', () => {
        const underTest = new DonutMaker(500,2,133,0,0);
        underTest.purchaseAutoClicker();
        expect(underTest.autoClickerCost).toEqual(146);
        expect(underTest.donutCount).toEqual(367)
    });

    test('Will allow purchase of donut multiplier and decrease spent donuts?', () => {
        const underTest = new DonutMaker(100,0,0,0,10);
        underTest.purchaseDonutMultiplier();
        expect(underTest.donutMultiplierCount).toEqual(1);
        expect(underTest.donutCount).toEqual(90);
    });

    test('Will not allow purchase of donut multiplier with less than 10 donuts', () => {
        const underTest = new DonutMaker(9,0,0,0,10);
        underTest.purchaseDonutMultiplier();
        expect(underTest.donutMultiplierCount).toEqual(0);
        expect(underTest.donutCount).toEqual(9);
    });
});