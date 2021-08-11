# Add Survey

> ## Success paths

1. ⛔ Receives a **POST** request in route **/api/surveys**
2. ⛔ Validates if the request was done by an **admin**
3. ⛔ Validates the required fields **question** and **answers**
4. ⛔ **Creates** a survey with the provided data
5. ⛔ Returns **204**, without data.

> ## Exceptions

1. ⛔ Returns the **404** error if the api doesn't exists.
2. ⛔ Returns the **403** error if the user is not an admin
3. ⛔ Returns the **400** error if question or answers aren't provided by the client.
4. ⛔ Returns the **500** error if an error is thrown when trying to create a survey.

