using System;

namespace cursoSintaxe
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variaveis
            int idade = 18;
            Console.WriteLine($"A idade do user é {idade}");
            idade = idade + 5;
            Console.WriteLine($"Passou 5 anos e ele tem agora {idade} anos");

            double nota1 = 5.8;
            double nota2 = 8.9;
            double media = (nota1 + nota2) / 2;

            Console.WriteLine($"A nota final é de {media}");

            /////////////
            string name = "Matheus";
            char sexo = 'M';

            if (sexo == 'M')
            {
                Console.WriteLine($"Hello sr.{name}");
            }
            else
            {
                Console.WriteLine($"Hello sra.{name}");
            }

            char primeiraLetra;

            primeiraLetra = (char) 65;
            Console.WriteLine (primeiraLetra);

            primeiraLetra += (char) 1;

            Console.WriteLine (primeiraLetra);

            string titulo = "Estudando c# em " + 2022;

            Console.WriteLine (titulo);

            string subTitulo = @"- Javascript
- CSharp
- Java
- Go
";

            Console.WriteLine (subTitulo);

            /////
            Console.WriteLine("Entrada show!");

            int idadeDoConvidado = 12;
            bool responsavel = false;

            if (idadeDoConvidado > 18)
            {
                Console.WriteLine($"Seja bem vindo!");
            }
            else if (idadeDoConvidado < 18 && responsavel == true)
            {
                Console.WriteLine($"Seja bem vindo! ( Responsavel ) ");
            }
            else
            {
                Console
                    .WriteLine($"Infelizmente você é menor de idade e sem responsavel!");
            }

            // Loops
            double valorInvestido = 1000;
            int meses = 1;

            while (meses <= 12)
            {
                valorInvestido = valorInvestido += 0.0036;
                System.Console.WriteLine($" {meses} mês: R$ {valorInvestido}");

                meses++;
            }

            System.Console.WriteLine("------------------------");

            double valorInvestido2 = 1000;

            for (int mes = 1; mes <= 12; mes++)
            {
                valorInvestido2 = valorInvestido2 += 0.0036;
                System.Console.WriteLine($" {mes} mês: R$ {valorInvestido2}");
            }

            System.Console.WriteLine("------------------------");

            double valorInvestido3 = 1000;
            int mes2 = 1;
            do
            {
                valorInvestido3 = valorInvestido3 += 0.0036;
                System.Console.WriteLine($" {mes2} mês: R$ {valorInvestido3}");
                mes2++;
            }
            while (mes2 <= 12);

            System.Console.WriteLine("------------------------");

            double valorInvestido4 = 1000;
            double juros = 1.0036;
            int validade = 5;

            for (int anos = 1; anos <= validade; anos++)
            {
                for (var mes = 0; mes < 12; mes++)
                {
                    System.Console.WriteLine("---------------------");
                    valorInvestido4 *= juros;
                    Console.WriteLine($"{mes}- R$:{valorInvestido4}");
                }
                juros += 0.0010;
            }

            System.Console.WriteLine("---------------------");

            for (int contadorLinha = 0; contadorLinha < 10; contadorLinha++)
            {
                for (
                    int contadorColuna = 0;
                    contadorColuna < 10;
                    contadorColuna++
                )
                {
                    System.Console.Write("*");
                    if (contadorColuna >= contadorLinha) break;
                }
                System.Console.WriteLine();
            }

            System.Console.WriteLine("---------------------");

            for (int multi = 0; multi < 100; multi++)
            {
                if (multi % 3 == 0)
                {
                    Console.WriteLine($">> {multi}");
                }
            }

            System.Console.WriteLine("---------------------");

            int fatorial = 1;

            for (int i = 1; i < 11; i++)
            {
                fatorial *= i;
                Console.WriteLine($"Fatorial de {i}: {fatorial}");
            }

            Console.ReadLine();
        }
    }
}
