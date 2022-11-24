# Circle

## Application’s features: 

   - Components common to all pages:
       * Navbar: containing the logo and some links to the other pages 
       * Footer:  contains address and (unusable) links


  - Home Page:

      Contains different sections with data about the business. Also fetch info from the API and using DOM manipulation displays 3 proyets in cards in the Recent Proyects section. If you click on the learn more link, you will be redirected to the project page where the project you clicked will be displayed. 
      Clicking the client´s section logo´s will open a new tab with the business webpage. Cta section form will not work
  

   - Project Page:

   Displays a random proyect unless you choose a proyect to display. Also, show cards with other 3 proyects

   - Contact Page:

   Shows a form with inputs for contact and a textarea for a message. All of them have validation via required atribbute and some of them will display an error message when trying to submit invalid info.
   The form has as method POST, wich would take you to an error page. To prevent that from happening I used method .preventDefault() and after the validation the user is redirected to the Home page







