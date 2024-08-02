package backend.app.controllers;

import javax.servlet.annotation.WebServlet;
import javax.ejb.EJB;

@WebServlet(urlPatterns = { "/GWTJEE/greet" })
public class GreetingServiceServlet implements GreetingService {

    @EJB
    private GreetingBean greetingBean;

    public void greetServer(String input) {
        String sanitizedServerInfo = escapeHtml(getServerInfo());
        String sanitizedUserAgent = escapeHtml(getUserAgent());
        
        // Call relevant API endpoints for greeting functionality
        greetingBean.greet(input, sanitizedUserAgent, sanitizedServerInfo);
    }

    private String escapeHtml(String html) {
        // Implement logic to escape HTML characters
        return html;
    }

    private String getServerInfo() {
        // Implement logic to get server information
        return "Server Information";
    }

    private String getUserAgent() {
        // Implement logic to get user agent information
        return "User Agent Information";
    }
}