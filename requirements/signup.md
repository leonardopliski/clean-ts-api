# Sign Up

> ## Success paths

1. ✅ Receives a **POST** request in route **/api/signup**.
2. ✅ Validates the required fields **name**, **email**, **password** and **passwordConfirmation**.
3. ✅ Validates that the **password** and **passwordConfirmation** are equals.
4. ✅ Validates that the **email** field is a valid email.
5. ⛔ **Validates** if there's already an existant user with the provided email.
6. ✅ Generates an **encrypted** password (this password can't be decrypted)
7. ✅ **Creates** an account for the user with the provided data, **replacing** the password with the encrypted password.
8. ✅ Generates an access **token** from the user ID.
9. ✅ **Updates** the user data with the generated access token.
10. ✅ Returns **200** with the access token and user name.

> ## Exceptions

1. ✅ Returns the error **404** if the api doesn't exists.
2. ✅ Returns the error **400** if name, email, password or passwordConfirmation aren't provided by the client.
3. ✅ Returns the error **400** if password and passwordConfirmation aren't equals.
4. ✅ Returns the error **400** if the email field is an invalid e-mail.
5. ✅ Returns the error **403** if the provided email is already being used.
6. ✅ Returns the error **500** if an error is thrown when trying to generate an encrypted password
7. ✅ Returns the error **500** if an error is thrown when trying to create the user account.
8. ✅ Returns the error **500** if an error is thrown when trying to generate the access token.
9. ✅ Returns the error **500** if an error is thrown when trying to update the user with the generated access token.