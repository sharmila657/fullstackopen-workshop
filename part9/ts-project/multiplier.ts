export type Operation = "multiply" | "add" | "divide";
type Result = number | string;

export const multiplicator = (a: number, b: number, operation: Operation): Result => {
  if (operation === "divide") {
    if (b === 0) {
      throw new Error("Can't divide by 0!");
    }
    return a / b;
  } else if (operation === "add") {
    return a + b;
  }
  return "not valid operation";
};
// try {
//   console.log(multiplicator(2, 2, "multiply"));
// } catch (e) {
//   console.log("error is", e.message);
// }

try {
  console.log(multiplicator(2, 0, "divide"));
} catch (e: unknown) {
  if (e instanceof Error) {
    console.log("error is", e.message);
  }
}

// multiplicator('how about a string?',
//     4,
//     'Multiplied a string and 4, the result is:');
