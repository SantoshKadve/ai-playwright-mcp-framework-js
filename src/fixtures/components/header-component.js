export class HeaderComponent {
  constructor(page) {
    this.page = page;
    this.menuButton = page.getByRole('button', { name: /open menu/i });
  }
}
