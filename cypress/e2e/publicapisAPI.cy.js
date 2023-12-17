/// <reference types="cypress" />

describe("https://api.publicapis.org/entries API test.", () => {
  it("GET https://api.publicapis.org/entries ", () => {
    // Send a GET request to the specified URL
    cy.request({
      method: "GET",
      url: "/entries",
    }).then((resp) => {
      // Verify the response status is 200
      expect(resp.status).to.eq(200);

      // Verify the response body is not empty
      expect(resp.body).to.not.be.empty;

      // Verify the response body has the expected keys
      expect(resp.body).to.have.all.keys(["count", "entries"]);

      // Get the entries from the response body
      const entries = resp.body.entries;

      // Filter the entries based on the category "Authentication & Authorization"
      const authenticationEntries = entries.filter(
        (entry) => entry.Category === "Authentication & Authorization"
      );

      // Iterate through each authentication entry
      authenticationEntries.forEach((entry, index) => {
        // Verify the entry has the expected keys
        expect(entry).to.have.all.keys([
          "API",
          "Description",
          "Auth",
          "HTTPS",
          "Cors",
          "Link",
          "Category",
        ]);

        // Verify the data types of each entry property
        expect(entry.API).to.be.a("string");
        expect(entry.Description).to.be.a("string");
        expect(entry.Auth).to.be.a("string");
        expect(entry.HTTPS).to.be.a("boolean");
        expect(entry.Cors).to.be.a("string");
        expect(entry.Link).to.be.a("string");
        expect(entry.Category).to.be.a("string");

        // Log the authentication entry object
        cy.log(
          `Authentication & Authorization entry Object ${
            index + 1
          }: ${JSON.stringify(entry)}`
        );
      });

      // Count the number of entries with HTTPS true
      const numHTTPSTrueEntries = authenticationEntries.filter(
        (entry) => entry.HTTPS
      ).length;

      // Count the number of entries with HTTPS false
      const numHTTPSFalseEntries = authenticationEntries.filter(
        (entry) => !entry.HTTPS
      ).length;

      // Count the number of entries with CORS yes
      const numCorsYesEntries = authenticationEntries.filter(
        (entry) => entry.Cors === "yes"
      ).length;

      // Verify the number of entries with CORS yes is 4
      expect(numCorsYesEntries).to.equal(4);

      // Count the number of entries with CORS no
      const numCorsNoEntries = authenticationEntries.filter(
        (entry) => entry.Cors === "no"
      ).length;

      // Verify the number of entries with CORS no is 3
      expect(numCorsNoEntries).to.equal(3);

      // Count the total number of authentication entries
      const numAuthenticationEntries = authenticationEntries.length;

      // Verify the total number of authentication entries is 7
      expect(numAuthenticationEntries).to.equal(7);

      // Log the number of entries with HTTPS true
      cy.log(`Number of entries with HTTPS true: ${numHTTPSTrueEntries}`);

      // Log the number of entries with HTTPS false
      cy.log(`Number of entries with HTTPS false: ${numHTTPSFalseEntries}`);

      // Log the number of entries with CORS yes
      cy.log(`Number of entries with CORS yes: ${numCorsYesEntries}`);

      // Log the number of entries with CORS no
      cy.log(`Number of entries with CORS no: ${numCorsNoEntries}`);
    });
  });
});
