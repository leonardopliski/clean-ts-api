# Load Survey Result

> ## Success paths

1. ✅ Receives a **GET** request on route **/api/surveys/{survey_id}/results**.
2. ✅ Validates if the request was done by an **user**.
3. ✅ Returns **200** with the survey results.

> ## Exceptions

1. ✅ Returns the **404** error if the api doesn't exists.
2. ✅ Returns the **403** error if the requester is not an user.
3. ✅ Returns the **500** error if an error is thrown while trying to load the survey result.

