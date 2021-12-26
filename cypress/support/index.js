// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// importacion plugin tab
require("cypress-plugin-tab");

// importacion de plugin xpath
require("cypress-xpath");

// importacion de drag and drop
require("@4tw/cypress-drag-drop");

// importacion de eventos mouse
import "cypress-real-events/support";

// IMPORTACION PARA IMAGENES
import "cypress-file-upload";

