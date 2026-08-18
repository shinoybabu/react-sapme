# GitHub Copilot Instructions for .NET Project

This file provides guidance for GitHub Copilot when assisting with code generation, refactoring, and documentation in this repository.  
Copilot should follow these practices to ensure maintainability, performance, and security.

---

## ✅ General Coding Practices
- Prefer **C# latest language features** (e.g., `async/await`, `record` types, pattern matching).
- Follow **.NET naming conventions**:
  - PascalCase for classes, methods, and properties.
  - camelCase for local variables and parameters.
- Generate **XML documentation comments** for public methods and classes.
- Suggest **unit tests** using `xUnit` or `NUnit` with clear Arrange–Act–Assert structure.
- Use **dependency injection** instead of hardcoding dependencies.
- Favor **LINQ** and built-in .NET libraries over custom implementations.

---

## 🔒 Security Guidelines
- Never suggest storing **secrets, API keys, or connection strings** in source code.  
  → Use `dotnet user-secrets` or environment variables.
- Always use **parameterized queries** with `SqlCommand` or ORM frameworks to prevent SQL injection.
- Prefer **`HttpClientFactory`** for HTTP calls to avoid socket exhaustion.
- Validate and sanitize **user input** before processing.
- Avoid insecure cryptography:
  - Do not use `MD5` or `SHA1`.
  - Prefer `SHA256`, `SHA512`, or `AES` with secure key management.
- Enforce **HTTPS/TLS** for all external service calls.
- When handling authentication:
  - Use **ASP.NET Core Identity** or OAuth/OpenID Connect.
  - Never roll your own password hashing — rely on `PasswordHasher<TUser>`.

---

## 🧪 Testing & Quality
- Generate **unit tests** for all new methods.
- Include **integration tests** for database and API interactions.
- Use **mocking frameworks** (e.g., Moq) for external dependencies.
- Ensure tests run in **CI/CD pipelines** with `dotnet test`.

---

## 📦 Project Structure
- Place business logic in **Services** layer, not in Controllers.
- Keep Controllers thin — delegate work to Services.
- Use **DTOs** for API input/output models.
- Separate **domain models** from persistence models (e.g., EF Core entities).

---

## 🚫 Anti-Patterns to Avoid
- Do not generate code with:
  - Hardcoded credentials.
  - Static mutable state.
  - Thread.Sleep for async operations (use `Task.Delay`).
- Avoid excessive nesting — prefer early returns.
- Do not suggest obsolete APIs (e.g., `WebClient`, `BinaryFormatter`).

---

## 📝 Documentation
- Provide **README updates** when generating new modules.
- Suggest **XML comments** for public APIs.
- Include **sample usage snippets** in documentation when relevant.

---

## ⚙️ Example Prompts for Copilot
- "Generate a secure ASP.NET Core controller for user registration."
- "Suggest unit tests for a service that calculates loan interest."
- "Refactor this method to use async/await."
- "Add input validation for this API endpoint."
