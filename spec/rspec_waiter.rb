module RspecWaiter
  def wait(duration: Capybara.default_max_wait_time, time_between: 0.2, wait_time: 1, &block)
    expires = Time.now.utc + duration

    exception = nil

    while expires > Time.now.utc
      begin
        Capybara.using_wait_time(wait_time, &block)
        exception = nil
        break
      rescue RSpec::Expectations::ExpectationNotMetError => e
        exception = e
        sleep time_between
      end
    end

    raise exception if exception
  end
end
