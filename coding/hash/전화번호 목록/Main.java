import java.util.HashMap;
import java.util.Arrays;

public class Solution {

    public boolean solution(String[] phone_book) {
        
        boolean answer = true;
        
        // 문자열 오름차순 정렬
        Arrays.sort(phone_book);
        
        for (int i = 0; i < phone_book.length - 1; i++) {
            
            // 다음 배열값의 접두에 내가 포함되었는가?
            if (phone_book[i+1].startsWith(phone_book[i])) {
                answer = false;
            }
        }
        
        return answer;
    }
    
    public static void main(String []args){
        
        Solution sol = new Solution();
        String[] book = new String[] {"119", "97674223", "1195524421"};
        
        System.out.println(sol.solution(book));
    }
    
}