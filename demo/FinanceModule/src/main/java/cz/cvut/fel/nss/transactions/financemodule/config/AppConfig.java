package cz.cvut.fel.nss.transactions.financemodule.config;


import cz.cvut.fel.nss.transactions.financemodule.interest_strategy.InterestCalculator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
/**
 * Configuration class for application-wide beans.
 */
@Configuration
public class AppConfig {
    /**
     * Creates an instance of InterestCalculator bean.
     *
     * @return InterestCalculator instance used for interest calculation strategies
     */
    @Bean
    public InterestCalculator interestCalculator() {
        return new InterestCalculator();
    }
}
