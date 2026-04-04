# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> UI login flow >> locked user should see an error
- Location: tests\ui\login.spec.js:18:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
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
  13 |     try {
  14 |       await this.page.goto('/', { 
  15 |         waitUntil: 'networkidle',
  16 |         timeout: 30000 
  17 |       });
  18 |     } catch (error) {
  19 |       console.log('First navigation attempt failed, retrying...');
> 20 |       await this.page.goto('/', { 
     |                       ^ Error: page.goto: Target page, context or browser has been closed
  21 |         waitUntil: 'domcontentloaded',
  22 |         timeout: 30000 
  23 |       });
  24 |     }
  25 |   }
  26 | 
  27 |   async login(username, password) {
  28 |     await this.usernameInput.fill(username);
  29 |     await this.passwordInput.fill(password);
  30 |     await this.loginButton.click();
  31 |   }
  32 | }
  33 | 
```