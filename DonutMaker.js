class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerCost, donutMultiplierCount, donutMultiplierCost) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        //autoClickers start at 100 donuts
        this.autoClickerCost = autoClickerCost;
        this.donutMultiplierCount = donutMultiplierCount;
        //donutMultipliers start at 10 donuts
        this.donutMultiplierCost = donutMultiplierCost;
    }

    createADonut() {
        this.donutCount ++;
    }
    
    getDonutCount() {
        return this.donutCount;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    purchaseAutoClicker() {
        if(this.donutCount >= this.autoClickerCost){
            this.autoClickerCount++;
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost = this.autoClickerCost * 1.1;
            this.autoClickerCost = Math.round(this.autoClickerCost);
        }  
    }

    activateAutoClickers() {
        if(this.autoClickerCount > 0) {
            this.donutCount += this.autoClickerCount * 1;
        }
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getDonutMultiplierCost() {
        return this.donutMultiplierCost;
    }

    purchaseDonutMultiplier() {
        (donutCount >= this.donutMultiplierCost)
        this.donutMultiplierCount += 1;
        this.donutCount -= this.donutMultiplierCost;
        this.donutMultiplierCost *= 1.2;
    }

    getDonutMultiplierCount() {
        return this.donutMultiplierCount;
    }

    createDonutWithAutoClicker() {
        this.donutCount += (1 * this.autoClickerCount);
    }

    createDonutWithDonutMultiplier() {
        this.donutCount += (Math.pow(1.2, this.donutMultiplierCount));
    }
}

export default DonutMaker;