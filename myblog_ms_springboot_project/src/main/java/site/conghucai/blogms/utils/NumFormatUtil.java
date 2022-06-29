package site.conghucai.blogms.utils;

public class NumFormatUtil {
    private NumFormatUtil() {
    }

    public static String getFormatString(String num) {
        int index = 0;
        if(num.length() <= 3) {
            return num;
        } else if(num.length() <= 6) {
            index = 3;
        } else {
            index = 6;
        }

        StringBuffer sb = new StringBuffer();
        for(int i=0; i<num.length()-index; i++) {
            sb.append(num.charAt(i));
        }
        sb.append('.');
        sb.append(num.charAt(num.length()-index));
        sb.append(num.charAt(num.length()-index + 1));
        sb.append(index == 3 ? 'k': 'm');
        return sb.toString();
    }

    public static String getDecimalString(String decimal) {
        int pos = decimal.indexOf('.');
        if(pos == -1){
            return decimal;
        }
        return decimal.substring(0, pos+2);
    }
}
