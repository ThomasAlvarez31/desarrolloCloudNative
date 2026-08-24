# CHANGELOG - Pedidos360

## [1.0.0] - 2026-08-24

### Añadido
- **Frontend (React):** Interceptor de Axios, autenticación con Azure AD (MSAL) usando flujo PKCE y vistas para Login, Catálogo y Carrito.
- **Backend (Java - Spring Boot):** Microservicios de Productos y Carrito integrados con soporte para OAuth2 Resource Server.
- **Infraestructura Multi-Nube:** 
  - AWS API Gateway configurado como Single Entrypoint con CORS.
  - JWT Authorizer en API Gateway con validación de JWKS contra Azure AD.
  - Azure AD (Entra ID) configurado con App Registration, scopes y roles.
- **Seguridad:** Protección de rutas perimetrales con respuesta 401/403 ante peticiones no autorizadas.