package cz.cvut.ear.privatelib1.rest;


import cz.cvut.ear.privatelib1.config.TokenProvider;
import cz.cvut.ear.privatelib1.dto.UserDto;
import cz.cvut.ear.privatelib1.model.AuthToken;
import cz.cvut.ear.privatelib1.model.LoginUser;
import cz.cvut.ear.privatelib1.model.Role;
import cz.cvut.ear.privatelib1.model.User;
import cz.cvut.ear.privatelib1.service.RoleService;
import cz.cvut.ear.privatelib1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider jwtTokenUtil;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;


    @RequestMapping(value="/register", method = RequestMethod.POST)
    public User saveUser(@RequestBody UserDto user){
        return userService.save(user);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value="/adminping", method = RequestMethod.GET)
    public String adminPing(){
        return "Only Admins Can Read This";
    }

    @PreAuthorize("hasRole('USER')")
    @RequestMapping(value="/userping", method = RequestMethod.GET)
    public String userPing(){
        return "Any User Can Read This";
    }

//    @PreAuthorize("hasRole('USER')")
//    @RequestMapping(value="/userping", method = RequestMethod.GET)
//    public String userPing2(){
//        return userService.;
//    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> generateToken(@RequestBody LoginUser loginUser) throws AuthenticationException {

        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginUser.getUsername(),
                        loginUser.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = jwtTokenUtil.generateToken(authentication);
        return ResponseEntity.ok(new AuthToken(token));
    }

//    @JsonIgnore
    @GetMapping("/info")
    public ResponseEntity<?> getUserInfo(Authentication authentication) {
        // The 'authentication' is automatically populated by Spring Security with the current user details
        String username = ((UserDetails) authentication.getPrincipal()).getUsername();
        User user = userService.findOne(username); // Retrieve the user details using the username
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setUsername(user.getUsername());
        System.out.println(user.getId());
        userDto.setId(user.getId());

        return ResponseEntity.ok(userDto); // Return the user DTO as the response
    }

    @PutMapping ("/setroles")
    public ResponseEntity<List<Role>> createRole() {
        List<Role> roles = new ArrayList<>();
        roles.add(roleService.createRole("ROLE_USER", "Standard User Role"));
        roles.add(roleService.createRole("ROLE_ADMIN", "Standard User Role"));
        roles.add(roleService.createRole("ADMIN", "Standard User Role"));
        roles.add(roleService.createRole("USER", "Standard User Role"));
        return ResponseEntity.ok().body(roles);
    }

}
