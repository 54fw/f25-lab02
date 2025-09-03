package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Square(2.0);

        Renderer renderer = new Renderer(rectangle);

        renderer.draw();

        Shape circle = new Circle(1.0);
        Renderer renderer2 = new Renderer(circle);
        renderer2.draw();
    }
}
