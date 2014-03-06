package no.kantega.workshops.server;

import javax.servlet.DispatcherType;
import javax.servlet.ServletContainerInitializer;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import java.util.EnumSet;
import java.util.Set;

/**
 *
 */
public class Initalizer implements ServletContainerInitializer{
    @Override
    public void onStartup(Set<Class<?>> classes, ServletContext servletContext) throws ServletException {

        servletContext.addFilter("TestFilter", new TestFilter())
                .addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, "/*");
    }
}
