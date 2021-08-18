# List Surveys

> ## Success paths

1. ⛔ Receives a **GET** request in route **/api/surveys**.
2. ⛔ Validates if the request was done by an user.
3. ✅ Returns **204** if there are no surveys.
4. ✅ Returns **200** with the surveys.

> ## Exceptions

1. ⛔ Returns the **404** error if the api doesn't exists.
2. ⛔ Returns the **403** error if the user is not an user.
3. ✅ Returns the **500** error if an error is thrown when trying to get the surveys.
