package br.com.yago;

import java.util.Scanner;

public class Student {
    public static void main(String[] args) {
        double[] grades = getGrades();
        double total = sumGrade(grades);
        double avarage = calculateAvarage(total);
        String status = studentStatus(avarage);
        showResults(total, avarage, status);
    }

    private static void showResults(double total, double avarage, String status) {
        System.out.println("*** RESULTADO ***");
        System.out.println("Total: " + total + "pts.");
        System.out.println("Média: " + avarage + "pts.");
        System.out.println("Situação: " + status);
    }

    private static String studentStatus(double avarage) {
        String status;

        if (avarage >= 7) {
            status = "Aprovado";
        } else if (avarage >= 5) {
            status = "Recuperação";
        } else {
            status = "Reprovado";
        }
        return status;
    }

    private static double calculateAvarage(double total) {
        double avarage = total / 4;
        return avarage;
    }

    private static double sumGrade(double[] grades) {
        double total = 0;
        for (double grade : grades) {
            total += grade;
        }
        return total;
    }

    private static double[] getGrades() {
        Scanner s = new Scanner(System.in);
        double[] grades = new double[4];

        for (int i = 0; i < 4; i++) {
            System.out.print("Digite a " + (i + 1) + "º nota: ");
            grades[i] = s.nextDouble();
        }
        return grades;
    }
}
