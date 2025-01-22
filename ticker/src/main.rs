use tokio::time::{interval, Duration};

// A generic async ticker function which takes a function/closure `func` with no parameters and no return value.
async fn ticker<F>(mut func: F)
where
    F: FnMut() + Send + 'static,
{
    let mut interval = interval(Duration::from_secs(1));
    // Consume the immediate tick
    interval.tick().await;

    loop {
        interval.tick().await;
        func();
    }
}

#[tokio::main]
async fn main() {
    let mut count = 0;

    // Capture the count and increment
    ticker(move || {
        count += 1;
        println!("Count: {}", count);
    })
    .await;
}
