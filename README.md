RequireJSBasicExample
=====================
We have explained How Require JS works,
we have 6 files including requireJS, and index.html
1. credits.js
   We have a methode called getCredits(), which returns a credit value.
2. products.js
   We have a methode called reserveProduct(), which returns true.
3. purchase.js
 This file has dependencies of above two files, We have a methode called pruchaseProduct, which validate the credits and if valid display the result in console .
4. main.js
  This file has dependencies of purchase.js, we call a methode in purchase.js by its dependencie object(purchase1.pruchaseProduct())
 5. index.html
