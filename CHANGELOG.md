# CHANGELOG - Pedidos360

## [1.1.0] - 2026-08-24

### Añadido
- **Microservicio de Productos (Java / Spring Boot):**
  - Implementación de estructura de clases, paquetes y controladores REST.
  - Configuración completa de dependencias en `pom.xml` (Spring Boot 3.x).
  - Configuración de seguridad OAuth2 con `Customizer.withDefaults()` actualizada a Spring Security 6.1+.

### Corregido
- Corrección de la estructura de paquetes Java (`com.pedidos360.productos`) y resolución de dependencias de Maven.

---

## [1.0.0] - 2026-08-24

### Añadido
- **Frontend (React):** Interceptor de Axios, autenticación con Azure AD (MSAL) usando flujo PKCE y vistas para Login, Catálogo y Carrito.
- **Backend (Java - Spring Boot):** Microservicios de Productos y Carrito integrados con soporte para OAuth2 Resource Server.
- **Infraestructura Multi-Nube:** 
  - AWS API Gateway configurado como Single Entrypoint con CORS.
  - JWT Authorizer en API Gateway con validación de JWKS contra Azure AD.
  - Azure AD (Entra ID) configurado con App Registration, scopes y roles.
- **Seguridad:** Protección de rutas perimetrales con respuesta 401/403 ante peticiones no autorizadas.