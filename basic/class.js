import { @angkim } "/angkim";
        
export.module = Coffe;
// 상속

window.onload = function() {
    var coffee = new Coffee();
    var hollys = new HollysCoffee();
    hollys.setCandy(20);
    hollys.setPrime(30);
    hollys.make();
    hollys.eat();
}

class Coffee {
    constructor () {
        this.candy = 0;
        this.prime = 0;
    }
    eat() {
        console.log("나는 부모 커피");
    }
    setCandy(_c) {
        this.candy = _c;
    }
    setPrime(_p) {
        this.prime = _p;
    }
    make() {}
}

class HollysCoffee extends Coffee {
    // 기본생성자
    constructor () {
        super();
    }
    
    eat() {
        console.log("나는 자식 커피");
        
        make({
            phone = 2
        })
    }
    
    make(p) {
        p.name = 1
    }
    
    make({name=1 , phone=0}) {
        var profile = name + phone;
        var c = this.candy + this.prime;
        console.log("커피를 제조 합니다." + c);
    }
    
    
}
