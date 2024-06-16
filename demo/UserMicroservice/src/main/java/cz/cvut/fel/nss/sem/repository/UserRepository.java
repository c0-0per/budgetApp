package cz.cvut.fel.nss.sem.repository;

import cz.cvut.fel.nss.sem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);

    User findByUsername(String username);


    @Override
    Optional<User> findById(Long aLong);
}
