class SeatAssignment {
  // seat management like A1,A2,...
  // Mosh,ash,...
  // Index signature property
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = "mosh";
seats.A2 = "ash";
console.log(seats);
