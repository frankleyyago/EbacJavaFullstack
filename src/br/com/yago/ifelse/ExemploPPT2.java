package br.com.yago.ifelse;

public class ExemploPPT2 {
    public static void main(String[] args) {
        int result = 7;
        if (result > 1 && result < 5) {
            System.out.println("Resultado maior que 1 e meno que 5");
        } else if (result >= 5 && result < 8) {
            System.out.println("Resultado maior ou igual a 5 e menor que 8");
        } else {
            System.out.println("Outros resultados");
        }
    }
}
