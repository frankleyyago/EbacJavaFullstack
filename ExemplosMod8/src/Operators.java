public class Operators {
    public static void main(String args[]) {
        arithmeticsOperators();
        atribOperators();
        incrementAndDecrementOperators();
        relationalOperators();
        logicalOperator();
    }

    private static void logicalOperator() {
        System.out.println("**** logicalOperator ****");
        int number1 = 10;
        int number2 = 10;

        boolean isBetween = number1 >= number2;
        System.out.println("É maior ou igual: " + isBetween);
    }

    private static void relationalOperators() {
        System.out.println("**** relationalOperators ****");
        int number1 = 10;
        int number2 = 10;

        boolean isBigger = number1 > number2;
        System.out.println("É maior: " + isBigger);

        boolean isIqual = number1 == number2;
        System.out.println("É igual: " + isIqual);

        boolean isDiff = number1 != number2;
        System.out.println("É diferente: " + isDiff);
    }

    public static void incrementAndDecrementOperators() {
        System.out.println("**** incrementAndDecrementOperators ****");

        int numb1 = 10;
        System.out.println(numb1);

        numb1++;
        System.out.println(numb1);

        numb1--;
        System.out.println(numb1);
    }
    private static void atribOperators() {
        System.out.println("**** atribOperators ****");
        int number1 = 50;
        int number2 = 10;
        int number3 = number1 + number2;
        int number4 = 10;
        number4 += number3;
        System.out.println(number3);
        System.out.println(number4);
    }
    public static void arithmeticsOperators(){
        System.out.println("**** arithmeticsOperators ****");
        int num1 = 10;
        int num2 = 20;

        int num3 = num1 + num2;
        int num4 = num1 - num2;
        int num5 = num1 * num2;
        int num6 = num1 / num2;

        System.out.println(num3);
        System.out.println(num4);
        System.out.println(num5);
        System.out.println(num6);
    }
}
