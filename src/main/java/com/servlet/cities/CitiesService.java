package com.servlet.cities;

import java.io.InputStream;
import java.io.PrintWriter;
import java.util.List;

import com.google.gson.Gson;
import com.libring.app.CitiesAnalyzer;
import com.libring.app.datatypes.City;

public class CitiesService {

	public static final String JSON_FILE = "/WEB-INF/cities.json";
	public static final String defaultPage = "/jsp/cities-home.jsp";

	protected void handleInitMapRequest(InputStream jsonStream, PrintWriter out) {
		CitiesAnalyzer citiesAnalyzer = new CitiesAnalyzer();
		List<City> cityList = citiesAnalyzer.parseSrcJsonIntoCityList(jsonStream);
		String json = (new Gson()).toJson(cityList);
		out.print(json);
	} 
}