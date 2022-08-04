import readline from 'readline';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let flag = true;
let mainQ;



const question = () => {
    return new Promise((res) => {
        if(flag){
            mainQ = 'Привет! Давай сыграем в "Орел и Решка"! Введите "Да" или "Нет"  ';
            flag = !flag;
        }
        else{
            mainQ = 'Подкинем еще раз?  ';
        }
        input.question(mainQ , answer => {
            switch (answer) {
                case "Да":
                    console.log(`Круто! Я подбрасываю монетку!`);
                    break;
                case "Нет":
                    console.log(`Не Круто!`);
                    process.exit();
                default:
                    console.log(`Да или Нет надо выбрать!!`);
                    process.exit();
            }
            res();
        })
    })
}

class Coin {
    constructor(side) {
        this.side = side
    }
    setSide() {
        this.side = Math.floor(0 + Math.random() * (1 + 1 - 0));
        switch (this.side) {
            case 0:
                console.log("Выпала Решка");
                break;
            case 1:
                console.log("Выпал Орел")
                break;
            default:
                break;
        }
    }
}

const coins = () => {
    new Promise((res) => {
        setTimeout(() => {
            const coin = new Coin()
            coin.setSide();
            returnGame();
            res()
        }, 1000)

    })
}

const main = async () => {
    await question()
    // input.close();
    await coins()

}

main()

var returnGame = function () {
    main()

};

