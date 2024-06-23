package cz.cvut.ear.privatelib1.dao;


import cz.cvut.ear.privatelib1.model.Role;
import cz.cvut.ear.privatelib1.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDao extends CrudRepository<Role, Long>{

    Role findRoleByName(String name);


}
