package no.kantega.workshops.server;

import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URL;

/**
 *
 */
public class InjectingOutputStream extends ServletOutputStream {
    private final OutputStream outputStream;

    @Override
    public void write(int b) throws IOException {
        outputStream.write(b);
    }

    @Override
    public void close() throws IOException {
        super.close();
    }

    public InjectingOutputStream(OutputStream outputStream) {
        super();
        this.outputStream = outputStream;
    }
}
