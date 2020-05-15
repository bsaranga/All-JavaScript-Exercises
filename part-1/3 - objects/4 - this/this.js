let account = {
    startingAmount: 500,
    interest: 0.14,
    numYears: 2,
    pointsTo: this == account,
    currBalance: currBal = function () {
        return function () {
            return (this.startingAmount + this.startingAmount*(1+this.interest)**this.numYears);
        }
    },
    incYear: function () {
        this.numYears++;
    }
}

let currentBal = account.currBalance();
console.log(currentBal());
console.log(account.pointsTo);

/* console.log(account.currBalance());

console.log(account.numYears);

account.incYear();

console.log(account.numYears);

console.log(account.currBalance());


// this is unbounded

let projectile = {
    postition: [0,0],
    g: 9.81,
    init_v: [10,6],
    max_height: maxHeight,
    getAngle() {
        return Math.tan(this.init_v[1]/this.init_v[0]);
    }
}

let projectile2 = {
    postition: [-1,-5],
    g: 9.81,
    init_v: [20,35],
    max_height: maxHeight
}

function maxHeight () {
    let init_v_square = (Math.sqrt(this.init_v[0]**2 + this.init_v[1]**2))**2;
    let init_angle = Math.tan(this.init_v[1]/this.init_v[0]);
    let height = (init_v_square*(Math.sin(init_angle))**2)/(2*this.g);
    return height;
}

console.log(`Max height 1 : ${projectile.max_height()}`);
console.log(`Max height 2 : ${projectile2.max_height()}`);

console.log(projectile.getAngle());
//OR
console.log((projectile.getAngle)());

console.log(projectile); */