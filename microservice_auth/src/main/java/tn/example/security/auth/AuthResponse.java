package tn.example.security.auth;

public class AuthResponse {
    private Long userId;

    private String email;
    private String accessToken;
    private String role;

    public AuthResponse() { }
    public AuthResponse(String email, String accessToken, String role, Long userId) {
        this.email = email;
        this.accessToken = accessToken;
        this.role = role;
        this.userId = userId;

    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

}
