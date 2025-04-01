import java.util.*;


public class Anagram {
    public static boolean isAnagram(String string1, String string2) {
        string1 = string1.toLowerCase();
        string2 = string2.toLowerCase();

        if (string1.length() != string2.length()) {
            return false;
        }

        char[] charArray1 = string1.toCharArray();
        char[] charArray2 = string2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String string1 = scanner.nextLine();
        System.out.print("Enter second string: ");
        String string2 = scanner.nextLine();
        scanner.close();

        boolean result = isAnagram(string1, string2);
        if(result == true) {
            System.out.println("Is Anagram of each other");
        }else {
            System.out.println("Is not Anagram of each other");
        }
    }
}