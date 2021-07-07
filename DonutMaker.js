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
        this.donutCount += 1 * this.getDonutMultiplier();
    }
    
    getDonutMultiplier() {
        return Math.pow(1.2, this.donutMultiplierCount);
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
            this.autoClickerCost *= 1.1;
            this.autoClickerCost = Math.round(this.autoClickerCost);
        }  
    }

    activateAutoClickers() {
        if(this.autoClickerCount > 0 && this.donutMultiplierCount > 0) {
            this.donutCount += this.autoClickerCount * this.donutMultiplierCount;
        } else {
            this.donutCount += this.autoClickerCount;
        }
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getDonutMultiplierCost() {
        return this.donutMultiplierCost;
    }

    purchaseDonutMultiplier() {
        if(this.donutCount >= this.donutMultiplierCost) {
            this.donutMultiplierCount ++;
            this.donutCount -= this.donutMultiplierCost;
            this.donutMultiplierCost *= 1.1;
        }
    }

    // activateDonutMultipliers() {
    //     if(this.donutMultiplierCount > 0) {
    //         this.donutCount += this.donutMultiplierCount * 1.2;
    //     }
    // }

    getDonutMultiplierCount() {
        return this.donutMultiplierCount;
    }


}

export default DonutMaker;