package no.kantega.workshops.server;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.concurrent.atomic.AtomicInteger;

/**
 *
 */
public class RegisterServlet extends HttpServlet {

    private AtomicInteger count = new AtomicInteger();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        String json = "{\"status\":\"success\", \"id\":" + count.incrementAndGet() + "}";
        response.getWriter().print(json);
    }
}
