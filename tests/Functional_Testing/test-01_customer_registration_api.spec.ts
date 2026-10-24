//---------------------------------------------------------------------------------------------------------------------------------

import test, { request } from "@playwright/test";
import data from "../../test-data/user_details.json";
import { HomePage } from "../../Pages/Home_Page";
import { createUser } from "../../Utilities/API_Utils";

test("TestCase-01-CustomerRegistration", async ({ page, request }) => {

    const home_page = new HomePage(page);

    await page.goto(data.appUrl.domain);
    await home_page.toolshopSignUp();

    await createUser(request, data.customer_detail_entry.first_name, data.customer_detail_entry.last_name, data.customer_detail_entry.dob,
        data.customer_detail_entry.country, data.customer_detail_entry.postal_code, data.customer_detail_entry.house_number,
        data.customer_detail_entry.street, data.customer_detail_entry.city, data.customer_detail_entry.state, data.customer_detail_entry.phone,
        data.customer_detail_entry.email, data.customer_detail_entry.passWord
    );

});
//---------------------------------------------------------------------------------------------------------------------------------