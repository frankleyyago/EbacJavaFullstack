public class Student {
    public static void main(String args[]) {
        grades();
    }

    private static void grades() {
        System.out.println("**** Notas do Aluno 1 ****");

        int english = 8;
        System.out.println("Nota de Ingles: " + english);

        int mathematics = 9;
        System.out.println("Nota de Matematica: " + mathematics);

        int chemistry = 7;
        System.out.println("Nota de Química: " + chemistry);

        int arts = 10;
        System.out.println("Nota de Artes: " + arts);

        System.out.println("**** Média do Aluno 1 ****");
        int media = (english + mathematics + chemistry + arts) / 4;
        System.out.println("Média: " + media);
    }
}
