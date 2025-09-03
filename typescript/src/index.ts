import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Shape } from "./shapes/shape.js";
import { Square } from "./shapes/square.js";

const square: Shape = new Square(4)
const renderer1 = newRenderer(square)
renderer1.draw();

const rectangle: Shape = new Rectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();

const circle: Shape = new Circle(3)
const renderer2 = newRenderer(circle)
renderer2.draw();