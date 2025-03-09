package Assignment_03_EmployeeManagementSystem;

import java.util.ArrayList;
import java.util.List;

class Employee {
    // Private attributes for encapsulation
    private int id;
    private String name;
    private double salary;
    
    // Constructor to initialize an Employee object
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    // Method to display the details 
    public void displayDetails() {
        System.out.println();
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }
}

// Main class 
public class EmployeeManagement {
    public static void main(String[] args) {
        //  ArrayList to store Employee objects
        List<Employee> employees = new ArrayList<>();
        
        // Add Employee objects to the list 
        employees.add(new Employee(1, "ABC", 500000));
        employees.add(new Employee(2, "PQR", 600000));
        employees.add(new Employee(3, "XYZ", 400000));
        employees.add(new Employee(4, "LMN", 300000));
        
        // Iterate over the list and display each employee's details
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
