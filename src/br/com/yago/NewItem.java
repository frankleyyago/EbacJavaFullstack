package br.com.yago;
import br.com.yago.Item;

public class NewItem {
    /**
     * creating a new item
     * @param args
     */
    public static void main(String[] args) {
        Item item = new Item();
        item.setModel("ABC123");
        item.setCode("XYZ456");
        item.setHeight(10.0f);
        item.setWidth(5.0f);
        item.setColor("Red");

        item.printItemDetails();
    }
}
