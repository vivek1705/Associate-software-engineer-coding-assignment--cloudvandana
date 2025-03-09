import java.util.Arrays;
import java.util.Scanner;

public class AnagramCheck {

    // Method to check if two strings are anagrams of each other
    public static boolean checkAnagrams(String str1, String str2) {
        
        // Remove spaces and convert strings to lowercase
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        // Convert strings to character arrays
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();

        // Sort the character arrays
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        // If the lengths are different, they cannot be anagrams
        if (str1.length() != str2.length()) {
            return false;
        }

        // Compare the sorted arrays; if they are equal, the strings are anagrams
        return Arrays.equals(arr1, arr2);
    }

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("\nEnter first string: ");
        String first = sc.nextLine();

        System.out.print("Enter second string: ");
        String second = sc.nextLine();

        // Check if the two strings are anagrams and display the result
        if (checkAnagrams(first, second)) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }
        sc.close();
    }
}
