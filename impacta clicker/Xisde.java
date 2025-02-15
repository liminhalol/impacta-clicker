import java.util.List;
import java.util.Random;
import java.util.Scanner;
import java.util.ArrayList;

public class Xisde {

    public static void main(String[] args) {
    Scanner escaneador = new Scanner(System.in);
    //EX 6
    System.out.println("|=======[EX 6]=======|");
    System.out.println("insira um número....");
    String numero1 = escaneador.nextLine();
    Integer numero1Int = Integer.parseInt(numero1);
    System.out.println("numero: " + numero1Int + " sucessor: " + (numero1Int + 1) + " antecessor: " + (numero1Int - 1));
    //EX 1
    System.out.println("|=======[EX 1]=======|");
    System.out.println("Hello world!");
    //EX 2
    System.out.println("|=======[EX 2]=======|");
    
    System.out.println("Insira seu nome:");
    String nome = escaneador.nextLine();
    System.out.println("seu nome é " + nome + ".");
    //EX 3
    System.out.println("|=======[EX 3]=======|");
    System.out.println("Qual seu nome?");
    String nomedois = escaneador.nextLine();
    System.out.println("Qual seu salario??/");
    String salario = escaneador.nextLine();
    System.out.println("Seu nome é: " + nomedois + " e seu slario é: " + salario + "R$");
    //EX 4
    System.out.println("|=======[EX 4]=======|");
    System.out.println("Insira um número");
    String num1 = escaneador.nextLine();
    System.out.println("Insira um número dnv");
    String num2 = escaneador.nextLine();
    Integer num1Int = Integer.parseInt(num1);
    Integer num2Int = Integer.parseInt(num2);
    System.out.println(num1Int + num2Int);
    //EX 5
    System.out.println("|=======[EX 5]=======|");
    System.out.println("Insira um número");
    String num1media = escaneador.nextLine();
    System.out.println("Insira um número dnv");
    String num2media = escaneador.nextLine();
    Integer num1mediaInt = Integer.parseInt(num1media);
    Integer num2mediaInt = Integer.parseInt(num2media);
    System.out.println((num1mediaInt + num2mediaInt) / 2);

    escaneador.close();
}
}
