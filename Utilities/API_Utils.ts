import { APIRequestContext, expect, request } from "@playwright/test";

export async function createUser(request: APIRequestContext, firstname: string, lastname: string, dob: string, country: string, postalcode: string, housenum: string,
    street: string, city: string, state: string, phone: string, email: string, password: string) {

    const apiResponse = await request.post("https://api.practicesoftwaretesting.com/users/register", {

        headers: {
            "Content-type": "application/json"
        },
        data: {
            "first_name": firstname,
            "last_name": lastname,
            "address": {
                "street": street,
                "house_number": housenum,
                "city": city,
                "state": state,
                "country": country,
                "postal_code": postalcode
            },
            "phone": phone,
            "dob": dob,
            "password": password,
            "email": email
        }

    });

    const responseBody = await apiResponse.json();
    console.log(`Status_code: ${apiResponse.status()}`);
    console.log("User ID:", responseBody.id);

    expect(apiResponse.status()).toBe(201);

    return apiResponse;

}


