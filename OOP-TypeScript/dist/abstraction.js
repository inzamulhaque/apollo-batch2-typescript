"use strict";
{
    // real implementation
    class Car {
        startEngine() {
            console.log("start");
        }
        stopEngine() {
            console.log("stop");
        }
        move() {
            console.log("moving...");
        }
        test() {
            console.log("testing");
        }
    }
    const car1 = new Car();
    car1.startEngine();
    car1.move();
    car1.stopEngine();
    car1.test();
    // abstract class
    // idea
    class Car2 {
        test() {
            console.log(`I am just testing`);
        }
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log("I am starting the car  engine");
        }
        stopEngine() {
            console.log("I am stopping the car engine");
        }
        move() {
            console.log("I am moving  the car");
        }
    }
    const toyotaCar = new ToyotaCar();
    toyotaCar.startEngine();
}
