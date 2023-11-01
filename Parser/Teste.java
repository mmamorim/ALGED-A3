package Parser;

import java.io.File;

public class Teste {
    public static void main(String args[]) {

        File file = new File("entrada.txt");
        Parser parser = new Parser(file);

        while (parser.hasNext()) {
            String line = parser.nextLine();
            String tokens[] = line.split(" ");
            System.out.println("Linha: "+line);
            for (int i = 0; i < tokens.length; i++) {
                System.out.println("token "+i+" "+tokens[i]);
            }
        }
    }
}
