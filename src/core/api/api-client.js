import { expect } from '@playwright/test';
import { Logger } from '../utils/logger.js';

export class ApiClient {
  constructor(request, defaultHeaders = {}) {
    this.request = request;
    this.defaultHeaders = defaultHeaders;
  }

  async get(path, options = {}) {
    Logger.info('API GET request', { path });
    return this.request.get(path, { headers: { ...this.defaultHeaders, ...(options.headers || {}) }, ...options });
  }

  async post(path, payload, options = {}) {
    Logger.info('API POST request', { path, payload });
    return this.request.post(path, {
      data: payload,
      headers: { ...this.defaultHeaders, ...(options.headers || {}) },
      ...options
    });
  }

  async assertOk(response) {
    expect(response.ok()).toBeTruthy();
  }

  async assertStatus(response, status) {
    expect(response.status()).toBe(status);
  }

  async json(response) {
    return response.json();
  }
}
