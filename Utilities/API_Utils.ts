import { APIRequestContext, expect, request } from "@playwright/test";

export async function createUser(request: APIRequestContext, customer_details: any) {

    const apiResponse = await request.post("https://api.practicesoftwaretesting.com/users/register", {

        headers: {
            "Content-type": "application/json"
        },
        data: {
            "first_name": customer_details.first_name,
            "last_name": customer_details.last_name,
            "address": {
                "street": customer_details.street,
                "house_number": customer_details.house_number,
                "city": customer_details.city,
                "state": customer_details.state,
                "country": customer_details.country,
                "postal_code": customer_details.postal_code
            },
            "phone": customer_details.phone,
            "dob": customer_details.dob,
            "password": customer_details.password,
            "email": customer_details.email
        }

    });

    const responseBody = await apiResponse.json();
    console.log(`Status_code: ${apiResponse.status()}`);
    console.log("User ID:", responseBody.id);

    expect(apiResponse.status()).toBe(201);

    return apiResponse;

}


