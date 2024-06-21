class Ride {
  private static _activerides: number = 0;

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

const r1 = new Ride();
r1.start();
const r2 = new Ride();
r2.start();

console.log(Ride.activerides);
