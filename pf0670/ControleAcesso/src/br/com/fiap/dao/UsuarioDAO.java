package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import br.com.fiap.connection.ConectionFactory;
import br.com.fiap.to.UsuarioTO;

public class UsuarioDAO {

	private Connection conn = null;
	
	public UsuarioDAO() {
		this.conn = new ConectionFactory().getConnection();
	}
	
	public UsuarioTO loginDAO(UsuarioTO ut) {
		
		PreparedStatement ps = null;
		
		try {
			
			String sqlQuery = "SELECT * FROM T_RWD_LOGIN WHERE LOGIN = ? AND SENHA = ?";
			
			ps = conn.prepareStatement(sqlQuery);
			
			ps.setString(1, ut.getLogin());
			ps.setString(2, ut.getSenha());
			
			ResultSet rs = ps.executeQuery();
			
			UsuarioTO u = null;
			
			while (rs.next()) {
				u = new UsuarioTO();
				u.setLogin(rs.getString(2));
				u.setSenha(rs.getString(3));
			}
			
			rs.close();
			ps.close();
			conn.close();
			
			System.out.println("USUÁRIO " + u.getLogin() + " VALIDADO!");
			
			return u;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("USUÁRIO " + ut.getLogin() + " NÃO FOI VALIDADO!");
		return null;
	}
	
	
}