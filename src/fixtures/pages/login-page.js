import { BasePage } from './base-page.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText(/Epic sadface/i);
  }

  async goto() {
    try {
      await this.page.goto('/', { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
    } catch (error) {
      console.log('First navigation attempt failed, retrying...');
      await this.page.goto('/', { 
        waitUntil: 'domcontentloaded',
        timeout: 30000 
      });
    }
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
