package com.gregor.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
//@EnableAutoConfiguration
public class ExampleApplication {

/*	@RequestMapping("/")
	@ResponseBody
	String home()
	{
		return "<p>Gregor</p><table border='1'><tr><td>tttt</td><td>ddd</td></tr></table>";
	}
*/
	public static void main(String[] args) {
		SpringApplication.run(ExampleApplication.class, args);
	}

}
