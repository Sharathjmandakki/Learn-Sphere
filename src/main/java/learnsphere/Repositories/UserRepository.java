package learnsphere.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import learnsphere.Entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {
	Users findByEmail(String email);
	Users findByUsername(String username);
}