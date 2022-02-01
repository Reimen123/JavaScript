import java.sql.*;

public class ConnectionToDB {
   static String LOCAL_PASS = Password.PASS;


    public static void main(String args[]) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/sakila?characterEncoding=utf8",
                     "root", LOCAL_PASS);
            // here sonoo is database name, root is username and password
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select actor_id, first_name, last_name, last_update from actor");
            while (rs.next())
                System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "
                +rs.getString(3) +" "+ rs.getDate(4));  
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

}
