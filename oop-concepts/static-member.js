"use strict";
class Ride {
    start() {
        Ride._activerides++;
    }
    stop() {
        Ride._activerides--;
    }
    static get activerides() {
        return Ride._activerides;
    }
}
Ride._activerides = 0;
const r1 = new Ride();
r1.start();
const r2 = new Ride();
r2.start();
console.log(Ride.activerides);
