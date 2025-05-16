import java.util.ArrayList;
import java.util.List;

public class FlattenArray {
    public static void main(String[] args) {
        Object[] nestedArray = {1, new Object[]{2, 3}, new Object[]{4, new Object[]{5, 6}}};

        List<Object> flatList = new ArrayList<>();
        flatten(nestedArray, flatList);

        System.out.println(flatList);
    }

    static void flatten(Object[] input, List<Object> output) {
        for (Object element : input) {
            if (element instanceof Object[]) {
                flatten((Object[]) element, output);
            } else {
                output.add(element);
            }
        }
    }
}
