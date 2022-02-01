package demo.jsg.restapi;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/demo")
public class RestAPIDemo {
    @GET
    @Path("/{name}")
    public String greetings(@PathParam("name") String name) {
        return name.toUpperCase() + ", from Java Code Geeks";
    }
}
