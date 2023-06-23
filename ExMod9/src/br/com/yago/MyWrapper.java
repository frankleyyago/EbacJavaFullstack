package br.com.yago;

public class MyWrapper {
    public static void main(String args[]) {
        int myPrimitiveNumber = 10;
        System.out.println("Meu numero primitivo: " + myPrimitiveNumber);

        Integer myWrapperNumber = (Integer) myPrimitiveNumber;
        System.out.println("Meu numero wrapper: " + myWrapperNumber);

    }
}
