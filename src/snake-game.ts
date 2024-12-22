class Snake {
  bodyPositions: number[][] = [
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
  ];
  deltaMove = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  move(direction: "up" | "down" | "left" | "right") {
    const [headY, headX] = this.bodyPositions[this.bodyPositions.length - 1];
    const [deltaY, deltaX] = this.deltaMove[direction];

    this.bodyPositions.push([headY + deltaY, headX + deltaX]);
    this.bodyPositions.shift();
  }

  draw() {
    console.clear();

    const grid: string[][] = [];

    for (let x = 0; x < 10; x++) {
      const row: string[] = [];
      for (let y = 0; y < 10; y++) {
        row.push(" ");
      }
      grid.push(row);
    }

    this.bodyPositions.forEach((pos) => {
      const [y, x] = pos;
      grid[y][x] = "O";
    });

    grid.forEach((row) => console.log(row.join("|")));
  }
}

const snake = new Snake();
snake.draw();

process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data", (data) => {
  const input = data.toString().trim();

  if (input === "\u0003") {
    process.exit(); // ctr+C
  } else {
    switch (input) {
      case "w":
        snake.move("up");
        break;

      case "y":
        snake.move("down");
        break;

      case "a":
        snake.move("left");
        break;

      case "s":
        snake.move("right");
        break;

      default:
        console.log("Invalid key. Use 'w', 'a', 's', 'd' to move.");
    }
  }

  snake.draw();
});
