import java.util.Timer;
import java.util.TimerTask;

public class Throttle {
    private boolean isThrottled = false;
    private final long delay;
    private final Timer timer = new Timer();

    public Throttle(long delayInMillis) {
        this.delay = delayInMillis;
    }

    public void run(Runnable task) {
        if (isThrottled) return;

        isThrottled = true;
        task.run();

        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                isThrottled = false;
            }
        }, delay);
    }

    public static void main(String[] args) throws InterruptedException {
        Throttle throttle = new Throttle(2000);

        for (int i = 0; i < 10; i++) {
            throttle.run(() -> System.out.println("Task run at " + System.currentTimeMillis()));
            Thread.sleep(500);
        }
    }
}
