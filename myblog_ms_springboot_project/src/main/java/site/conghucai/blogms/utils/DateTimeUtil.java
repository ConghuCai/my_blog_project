package site.conghucai.blogms.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateTimeUtil {
	private DateTimeUtil(){}

	public static String getSysTime(){
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		Date date = new Date();
		String dateStr = sdf.format(date);
		
		return dateStr;
		
	}

	public static String getSysDate(){

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		Date date = new Date();
		String dateStr = sdf.format(date);

		return dateStr;

	}
	
}
