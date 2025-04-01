package EmployeeManagement.src.com.employee;

import java.util.*;

public class EmployeeDetails {
    public static void main(String[] args) {
        Employee emp1 = new Employee(1, "Chinmaya", 8000);
        Employee emp2 = new Employee(2, "Abhishek", 10000);
        Employee emp3 = new Employee(3, "Asutosh", 15000);

        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        for (Employee employee : employees) {
            employee.displayDetails();
        }
    }
}


