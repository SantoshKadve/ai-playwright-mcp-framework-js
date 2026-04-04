export function validateUserListSchema(body) {
  return Number.isInteger(body.page) && Array.isArray(body.data);
}

export function validateCreateUserSchema(body) {
  return Boolean(body.id) && Boolean(body.createdAt);
}
