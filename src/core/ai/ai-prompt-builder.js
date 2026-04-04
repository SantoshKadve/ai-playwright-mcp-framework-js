export class AIPromptBuilder {
  static buildUiLocatorPrompt(featureText) {
    return `Identify reliable Playwright locators for feature: ${featureText}. Prefer role, label, placeholder and text based selectors.`;
  }

  static buildTestIdeaPrompt(userStory) {
    return `Generate positive, negative and edge Playwright test ideas for user story: ${userStory}`;
  }

  static buildApiAssertionPrompt(apiName) {
    return `Suggest robust API assertions for endpoint: ${apiName}. Focus on status, schema, business rules and response time.`;
  }

  static buildFailureTriagingPrompt(errorText) {
    return `Analyze this Playwright failure and propose likely root causes and next checks: ${errorText}`;
  }
}
