import java.util.Timer;
import java.util.TimerTask;

public class Debounce {
    private final long delay;
    private Timer timer = new Timer();

    public Debounce(long delayInMillis) {
        this.delay = delayInMillis;
    }

    public void run(Runnable task) {
        timer.cancel();
        timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                task.run();
            }
        }, delay);
    }

    public static void main(String[] args) throws InterruptedException {
        Debounce debounce = new Debounce(2000);

        for (int i = 0; i < 5; i++) {
            debounce.run(() -> System.out.println("Task run at " + System.currentTimeMillis()));
            Thread.sleep(500);
        }

        Thread.sleep(3000);
    }
}
