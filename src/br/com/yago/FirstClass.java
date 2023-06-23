package br.com.yago;

public class FirstClass {

    public static void main(String arg[]) {
        System.out.println("Olá, yago");
        Client client = new Client();
        client.addAddress("Rua 1");
        client.setCode(1);
        System.out.println(client.getCode());
        client.addressShow();
    }
}
