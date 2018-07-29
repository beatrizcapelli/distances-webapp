package com.libring.app;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import com.libring.app.datatypes.*;

public class CitiesAnalyzer {

	public List<City> parseSrcJsonIntoCityList(InputStream jsonStream) throws NullPointerException, JsonSyntaxException {
		Reader reader = new InputStreamReader(jsonStream);
		City[] cityArray = (new GsonBuilder().create()).fromJson(reader, City[].class);
		return Arrays.stream(cityArray).collect(Collectors.toList());
	}
}