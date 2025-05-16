import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class PromiseAllExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        CompletableFuture<String> task1 = CompletableFuture.supplyAsync(() -> "Result from Task 1");
        CompletableFuture<String> task2 = CompletableFuture.supplyAsync(() -> "Result from Task 2");
        CompletableFuture<String> task3 = CompletableFuture.supplyAsync(() -> "Result from Task 3");

        CompletableFuture<Void> allTasks = CompletableFuture.allOf(task1, task2, task3);

        allTasks.join();

        List<String> results = Arrays.asList(task1.get(), task2.get(), task3.get());

        for (String result : results) {
            System.out.println(result);
        }
    }
}
