package site.conghucai.blogms.utils;

import java.util.UUID;

public class UUIDUtil {
	private UUIDUtil() {
	}

	public static String getUUID(){
		
		return UUID.randomUUID().toString().replaceAll("-","");
		
	}
	
}
