# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> UI login flow >> standard user should login successfully @smoke
- Location: tests\ui\login.spec.js:6:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { BasePage } from './base-page.js';
  2  | 
  3  | export class LoginPage extends BasePage {
  4  |   constructor(page) {
  5  |     super(page);
  6  |     this.usernameInput = page.getByPlaceholder('Username');
  7  |     this.passwordInput = page.getByPlaceholder('Password');
  8  |     this.loginButton = page.getByRole('button', { name: 'Login' });
  9  |     this.errorMessage = page.getByText(/Epic sadface/i);
  10 |   }
  11 | 
  12 |   async goto() {
> 13 |     await this.page.goto('/');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  14 |   }
  15 | 
  16 |   async login(username, password) {
  17 |     await this.usernameInput.fill(username);
  18 |     await this.passwordInput.fill(password);
  19 |     await this.loginButton.click();
  20 |   }
  21 | }
  22 | 
```