# Login

> ## Success paths

1. ✅ Receives a **POST** request on **/api/login** route. 
2. ✅ Validates the required **email** and **password** fields.
3. ✅ Validates that the **email** field is a valid **email**.
4. ✅ **Searches** the user with the provided email and password.
5. ✅ Generates an access token from the user ID.
6. ✅ **Updates** the user data with the generated access token.
7. ✅ Returns **200** with the access token and user name.

> ## Exceptions

1. ✅ Returns the **404** error if the API doesn't exist.
2. ✅ Returns the **400** error if the email or password aren't provided by the client.
3. ✅ Returns the **400** error if the email field is invalid.
4. ✅ Returns the **401** error if no user is found with the provided data.
5. ✅ Returns the **500** error if an error is thrown when the access token is being generated.
6. ✅ Returns the **500** error if an error is thrown when trying to update the user with the generated access token.
