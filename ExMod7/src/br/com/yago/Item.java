package br.com.yago;

public class Item {
    /**
     * creating items props
     */
    private String model;
    private String code;
    private float height;
    private float width;
    private String color;
    public void printItemDetails() {
        /**
         * printing info
         */
        System.out.println("Item Details:");
        System.out.println("Model: " + model);
        System.out.println("Code: " + code);
        System.out.println("Height: " + height);
        System.out.println("Width: " + width);
        System.out.println("Color: " + color);
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public void setWidth(float width) {
        this.width = width;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
