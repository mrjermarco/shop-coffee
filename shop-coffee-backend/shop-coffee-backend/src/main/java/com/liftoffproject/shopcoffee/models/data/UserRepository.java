package com.liftoffproject.shopcoffee.models.data;

import com.liftoffproject.shopcoffee.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    User findByusername(String username);

}

