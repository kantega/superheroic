package no.kantega.workshops.server;

import org.apache.commons.io.IOUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

/**
 *
 */
public class TestFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse resp = (HttpServletResponse) servletResponse;

        String uri = req.getRequestURI();
        String path = uri.substring(0, uri.lastIndexOf("/")+1);
        String name = uri.substring(uri.lastIndexOf("/")+1);

        File testFile = new File("src/main/resources/tests" + path + "test-" + name);
        if(testFile.exists() && testFile.isFile()) {
            Wrapper wrapper = new Wrapper(resp);
            filterChain.doFilter(req, wrapper);
            resp.flushBuffer();

            if(wrapper.isWrapped()) {
                String content = new String(wrapper.toByteArray(), "utf-8");
                String test = IOUtils.toString(testFile.toURI().toURL(), "utf-8");
                content = content.replace("</body>", test +"</body>");
                resp.getOutputStream().print(content);
            }
        } else {
            filterChain.doFilter(req, resp);
        }



    }

    @Override
    public void destroy() {

    }

    private static class Wrapper extends HttpServletResponseWrapper {
        private final ByteArrayOutputStream bos;
        private boolean wrapped = true;

        Wrapper(HttpServletResponse response) {
            super(response);
            this.bos = new ByteArrayOutputStream();
        }

        public byte[] toByteArray() {
            return bos.toByteArray();
        }

        @Override
        public void setStatus(int i) {
            if(i != 200) {
                wrapped = false;
            }
            super.setStatus(i);
        }

        public boolean isWrapped() {
            return wrapped;
        }

        @Override
        public ServletOutputStream getOutputStream() throws IOException {
            if(wrapped) {
                return new InjectingOutputStream(bos);
            } else {
                return super.getOutputStream();
            }
        }

        @Override
        public PrintWriter getWriter() throws IOException {
            return super.getWriter();
        }
    }
}
