package com.servlet.cities;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(
		name = "CitiesServlet",
		urlPatterns = {"/cities"}
		)

public class CitiesServlet extends HttpServlet {

	private CitiesService service = new CitiesService();

	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.setContentType("application/json");
		PrintWriter out = new PrintWriter(resp.getWriter(), true);

		String action = req.getParameter("actionName");

		if (null != action && action.equals("initMap")) {
			InputStream freshJsonStream = getServletContext().getResourceAsStream("/WEB-INF/cities.json");
			service.handleInitMapRequest(freshJsonStream, out);
		}

		resp.setStatus(HttpServletResponse.SC_OK);
		out.flush();
		out.close();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(CitiesService.defaultPage);
		dispatcher.forward(req, resp);
	}
}