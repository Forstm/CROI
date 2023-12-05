<%@page language="java" import="java.sql.*" %>

<%
    // Criar variaveis para armazenar as informações

    int vtel = Integer.parseInt(request.getParameter("txtTel"));
    int vcpf = Integer.parseInt(request.getParameter("txtCpf"));
    int vcep = Integer.parseInt(request.getParameter("txtCep"));
    String vnome = request.getParameter("txtNome");
    String vsobre = request.getParameter("txtSobre");
    String vemail = request.getParameter("txtEmail");
    String vendereco = request.getParameter("txtEnde");
    String vcidade = request.getParameter("txtCid");
    String vestado = request.getParameter("txtEst");

    // Variaveis para o banco de dados

    String banco = "croi";
    String endereco = "jdbc:mysql://localhost:3306/" + banco;
    String usuario = "root";
    String senha = "";

    // Variaveis para o driver

    String driver = "com.myslq.jdbc.Driver";

    // Carregar o driver na memoria

    Class.forName(driver);

    // Criar a variavel para conectar com o banco de dados

    Connection conexao;

    // Abrir a conexao com o banco de dados

    conexao = DriverManager.getConnection(endereco,usuario,senha);

    String sql = "";

%>