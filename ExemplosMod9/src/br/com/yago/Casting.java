package br.com.yago;

public class Casting {
    public static void main (String args[]) {
        //casting explicito
        int num1 = 10;
        short num2 = (short) num1;

        int num3 = 1;
        byte num4 = (byte) num3;

        //casting implicito
        byte num5 = 2;
        int num6 = num5;
    }
}
